const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html",
  };
  
const routeResponseMap = {
    "/error": "<title>Error!</title><h1>Page not found!</h1>",
};

const date = new Date();
const d =  date.toDateString();
const t = date.toLocaleTimeString();

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
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
      res.end(routeResponseMap["/error"]);
      console.log(`An error occurred. Request for page `,req.url,`could not be found on the server on `, d, t);
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
