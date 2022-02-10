const cookieSession = require("cookie-session");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const httpServer = http.createServer(app);
const socketServer = socketIo(httpServer);

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    secret: "pokemon-master-trainer",
    signed: false,
    httpOnly: false,
  })
);

app.get("/healthcheck", async (req, res) => {
  res.status(200).send();
});

socketServer.sockets.on("connection", (socket) => {
  socket.on('EVENT', () => {});
});

httpServer.listen(8000, function () {
  console.log("listening on *:3456");
});