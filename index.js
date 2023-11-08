const http = require("http"); // we need the http module

const port = 3000;  // port we listen for requests on

// Create HTTP server to handle requests
// the callback function is executed for each request received
const server = http.createServer(function (req, res) {

  // log the request to the console 
  console.log("Received an incoming request.");

  // display the request URL in the console
  console.log(req.url);

  // Set the response HTTP header with HTTP status OK
	res.statusCode = 200;
  // set Content type header to text/html (so we get a response with text/html code)
  res.setHeader("Content-Type", "text/html");

  // Send the response body "Hello World"
  res.end("<h1>Hello happy World !! </h1>\n");
});

// Prints message on the console once the server starts listening
server.listen(port, function () {
  console.log(`Server running at ${port}/`);
});
