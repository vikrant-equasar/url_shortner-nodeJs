import http from "http";
import { readFile } from "fs/promises";
import path from "path";

const PORT = 3006;

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  if (req.method === "GET") {
    if (req.url === "/") {
      try {
        const data = await readFile(path.join("public", "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
      }
    }
  } else if (req.method === "GET") {
    if (req.url === "style.css") {
      try {
        const data = await readFile(path.join("public", "style.css"));
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } catch (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
      }
    }
  }
});
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
