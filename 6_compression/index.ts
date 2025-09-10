import zlib from "zlib";
import fs from "fs";

// 576k before compression
const file = fs.createReadStream("./text.txt");
const compressionFile = fs.createWriteStream("./text-compress");

file.pipe(zlib.createGzip()).pipe(compressionFile);
// after compression 208K
