const port = 3000;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

const plainTextContentType = {
  "Content-Type": "text/css",
};
const htmlContentType = {
  "Content-Type": "text/html",
};
const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("INDEX");
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});

router.get("/book_list.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book_list.html", res);
});
router.get("/norse_mythology.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/norse_mythology.html", res);
});

router.get("/pride_and_prejudice.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/pride_and_prejudice.html", res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("POSTED");
  console.log(`Response:`, res)//res
});
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);
