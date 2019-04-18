var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = (url.parse(request.url).pathname.replace('/', '') || 'start');
    console.log("Request for " + pathname + " received.");
    route(pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;