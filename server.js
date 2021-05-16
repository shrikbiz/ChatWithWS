import express, { json } from "express";
import expressWs from "express-ws";

const app = express();
expressWs(app);

const messages = [
  { id: 0, text: "Welcome to this app", username: "App Admin" },
];
const sockets = [];

app.use(json());

app.listen(3001, () => {
  console.log("Listening to port 3001");
});

app.get("/message", (request, response) => {
  response.json(messages);
});

app.post("/message", (request, response) => {
  const message = request.body;
  messages.push(message);

  for (const socket of sockets) {
    socket.send(JSON.stringify(message));
  }
});

app.ws("/message", (socket) => {
  sockets.push(socket);
  sockets.on("close", () => {
    socket.splice(sockets.indexOf(socket), 1);
  });
});
