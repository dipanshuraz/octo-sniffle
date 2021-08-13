import config from "../constants/config.json";

let ws;

export const initSocket = () => {
  ws = new WebSocket(config.SERVER_URL);
};

export const subscribeWS = (cbk) => {
  if (!ws) {
    initSocket();
  }

  ws.onmessage = (event) => {
    return cbk(null, JSON.parse(event.data));
  };
};
