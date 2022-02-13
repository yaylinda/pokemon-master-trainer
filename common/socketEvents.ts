import keyMirror from "key-mirror";

export const serverEvents = keyMirror({
    SEND_GAMES_FOR_USER: null,
});

export const clientEvents = keyMirror({
    REQUEST_GAMES_FOR_USER: null,
});
