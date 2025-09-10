import path from "path";
import fs from "fs";
import ffmpegPath from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";

const args = process.argv.splice(2);
const OUTPUTPATH = path.join(__dirname, "formarts");
const INPUTPATH = path.join(__dirname);

async function checkVideoExist(path: string | undefined): Promise<boolean> {
  try {
    return fs.existsSync(path || "");
  } catch {
    return false;
  }
}

function checkffmpeg() {
  if (ffmpegPath !== null) {
    ffmpeg.setFfmpegPath(ffmpegPath);
    return ffmpeg;
  } else {
    return false;
  }
}

async function main(): Promise<void> {
  try {
    const VIDEO_PATH = path.join(INPUTPATH, args[0]);
    const validation = await checkVideoExist(VIDEO_PATH);
    if (!validation) {
      console.error(`${args[0]} video does not exist.`);
      return;
    }
    const ffmpegRef = checkffmpeg();
    if (ffmpegRef === false) {
      console.error("ffmpeg is not installed");
      return;
    }
    if (!fs.existsSync(OUTPUTPATH)) {
      fs.mkdirSync(OUTPUTPATH, { recursive: true });
    }
    const VIDEO_OUTPUT_PATH = path.join(OUTPUTPATH, "output_144p.mp4");

    ffmpegRef(VIDEO_PATH)
      .videoCodec("libx264")
      .audioCodec("aac")
      .size("?x144")
      .format("mp4")
      .on("error", (e) => {
        console.error("Error while Conversion:", e.message);
      })
      .on("end", () => {
        console.log("Conversion Done");
      })
      .save(VIDEO_OUTPUT_PATH);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Unable to process the file");
      console.error("Error:", error.message);
    }
  }
}

main();
