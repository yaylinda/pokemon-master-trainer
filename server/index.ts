import { clientEvents, serverEvents } from "../common/socketEvents";
import * as db from './data/database';

const cookieSession = require("cookie-session");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

///////////////////////////////////////////////////////////
// SET UP
///////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////
// VARIABLES & LOGIC
///////////////////////////////////////////////////////////

const onlineUserIds = new Set([]);

///////////////////////////////////////////////////////////
// REST ENDPOINTS
///////////////////////////////////////////////////////////

/**
 * Health check endpoint
 */
app.get("/healthcheck", async (req, res) => {
  res.status(200).send();
});

/**
 * Login and set userId as online
 */
app.post("/login", (req, res) => {
  const { userId } = req.body;
  req.session.userId = userId;
  console.log(`[/login] - ${userId} has come online`);
  onlineUserIds.add(userId);
  res.status(200).send();
});

/**
 * Logout and remove userId from online users
 */
app.post("/logout", (req, res) => {
  const { userId } = req.session;
  console.log(`[/logout] - ${userId} has gone offline`);
  onlineUserIds.delete(userId);
  req.session = null;
  res.status(200).send();
});

///////////////////////////////////////////////////////////
// SOCKET MESSAGE HANDLERS
///////////////////////////////////////////////////////////

socketServer.sockets.on("connection", (socket) => {
  socket.on(clientEvents.REQUEST_GAMES_FOR_USER, async ({ userId }) => {
    const games = await db.getGamesByUserId(userId);
    socket.emit(serverEvents.SEND_GAMES_FOR_USER, games);
  });
});

///////////////////////////////////////////////////////////
// OPEN LISTEN
///////////////////////////////////////////////////////////

httpServer.listen(8000, function () {
  console.log("listening on *:3000");
});
