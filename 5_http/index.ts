import http from "http";

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);
  if (req.url === "/") {
    console.table(req.headers["sec-ch-ua-platform"]);
    res.end("hello world");
  } else {
    res.statusCode = 404;
    res.end("page not found");
  }
});

server.listen(8000);
