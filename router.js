const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html",
  };
  //object routes
const routes = {
  GET: {
    "/info": (req, res) => {
      res.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html",
      });
      res.end("Welcome to the Info Page!");
    },
  },
  //key = post value ={}
  POST: {},
};
// the export keywords, enables the function handle to be accessible from outside the code
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>");
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};
//callback function
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
