// import fs from "fs/promises";

// (async () => {
//   console.time("start");
//   const file = await fs.open("text.txt", "w");

//   for (let i = 0; i < 100000; i++) {
//     await file.write(` ${i}`);
//   }

//   console.timeEnd("start");
// })();

// import fs from "fs";

// (async () => {
//   console.time("start");

//   const write = fs.createWriteStream("text.txt", { encoding: "utf-8" });

//   for (let i = 0; i < 100000; i++) {
//     const buff = Buffer.from(` ${i}`, "utf-8");
//     write.write(buff);
//   }
//   write.end();

//   write.on("finish", () => {
//     console.timeEnd("start");
//   });
// })();
