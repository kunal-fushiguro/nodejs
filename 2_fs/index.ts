import fs from "fs/promises";
import path from "path";

const FILE_NAME = process.argv[2];
const CURRENT_PATH = path.join(__dirname, FILE_NAME || "");

async function main() {
  const watcher = fs.watch(CURRENT_PATH);
  for await (const watch of watcher) {
    if (watch.eventType === "change") {
      const fileData = await fs.readFile(CURRENT_PATH, { encoding: "utf8" });
      console.log("File changed:");
      console.log(fileData);
    }
  }
}

main();
