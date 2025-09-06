// const buff = Buffer.from("hi!", "utf-8");
// console.log(buff);
// console.log(buff.toString("hex"));
// console.log(buff.toString("utf-8"));
// import fs from "fs";

// const file = fs.readFileSync("./challenge.bin");
// const fileBuffer = Buffer.from(file);

// console.log(fileBuffer.toString("ascii"));

import path from "path";
import fs from "fs";

const FILE_NAME = process.argv[2];
const CURRENT_PATH = path.join(__dirname, FILE_NAME || "");

const READ_FILE = fs.readFileSync(CURRENT_PATH);
console.log(READ_FILE.toString("base64"));

for (let i = 0; i < READ_FILE.length; i++) {
  const b = READ_FILE[i];
  if (b !== undefined) {
    if (b >= 32 && b <= 126) process.stdout.write(String.fromCharCode(b));
    else process.stdout.write(".");
  }
}
