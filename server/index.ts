const cookieSession = require("cookie-session");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const events = require("../common/socketEvents");
const db = require("./data/database");

///////////////////////////////////////////////////////////
// SET UP
///////////////////////////////////////////////////////////

const app = express();
const httpServer = http.createServer(app);
const socketServer = socketIo(httpServer);

app.use(express.json());

app.use((req: any, res: any, next: any) => {
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

httpServer.listen(8000, function () {
  console.log("listening on *:3000");
});

///////////////////////////////////////////////////////////
// VARIABLES & LOGIC
///////////////////////////////////////////////////////////

const onlineUserIds: Set<string> = new Set([]);

///////////////////////////////////////////////////////////
// REST ENDPOINTS
///////////////////////////////////////////////////////////

/**
 * Health check endpoint
 */
app.get("/healthcheck", async (req: any, res: any) => {
  res.status(200).send();
});

/**
 * Login and set userId as online
 */
app.post("/login", (req: any, res: any) => {
  const { userId }: { userId: string } = req.body;
  req.session.userId = userId;
  console.log(`[/login] - ${userId} has come online`);
  onlineUserIds.add(userId);
  res.status(200).send();
});

/**
 * Logout and remove userId from online users
 */
app.post("/logout", (req: any, res: any) => {
  const { userId }: { userId: string } = req.session;
  console.log(`[/logout] - ${userId} has gone offline`);
  onlineUserIds.delete(userId);
  req.session = null;
  res.status(200).send();
});

///////////////////////////////////////////////////////////
// SOCKET MESSAGE HANDLERS
///////////////////////////////////////////////////////////

socketServer.sockets.on("connection", (socket: any) => {
  socket.on(events.clientEvents.REQUEST_GAMES_FOR_USER, async ({ userId }: { userId: string }) => {
    const games = await db.getGamesByUserId(userId);
    socket.emit(events.serverEvents.SEND_GAMES_FOR_USER, games);
  });
});
