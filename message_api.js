//Load HTTP module
const http = require("http");
const axios = require("axios");
const WebSocket = require("ws");
const { get } = require("node:http");

function createMessagingSocket() {
  return new WebSocket("ws://localhost:3001/message");
}

function getMessages() {
  return axios.get("ws://localhost:3001/message").then((resp) => resp.data);
}

function sendMessage(message) {
  //message is payload here
  return axios.post("ws://localhost:3001/message", message);
}

module.exports.createMessagingSocket = createMessagingSocket;
module.exports.getMessages = getMessages;
module.exports.sendMessage = sendMessage;

// const hostname = "127.0.0.1";
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
