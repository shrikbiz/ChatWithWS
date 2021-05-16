const axios = require("axios");
const WebSocket = require("ws");

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
