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
const date = new Date();
const d =  date.toDateString();
const t = date.toLocaleTimeString();

router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("Try localhost:3000/index.html to get the home page");
  console.log(`Received an incoming request from `,req.url,` on `, d, ` at `, t);
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
  console.log(`Received an incoming request...`, req.url,` on `, d, ` at `, t);
});

router.get("/books.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/books.html", res);
  console.log(`Received an incoming request...`,req.url,` on `, d, ` at `, t);
});

router.get("/book1.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book1.html", res);
  console.log(`Received an incoming request...`,req.url,` on `, d, ` at `, t);
});

router.get("/book2.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book2.html", res);
  console.log(`Received an incoming request...`, req.url,` on `, d, ` at `, t);
});

router.get("/book3.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/book3.html", res);
  console.log(`Received an incoming request...`, req.url,` on `, d, ` at `, t);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("POSTED");
  console.log(`Received an incoming request...`, req.url,` on `, d, ` at `, t);
  console.log(`Response:`, res)
});
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);
