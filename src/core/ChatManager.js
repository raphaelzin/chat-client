import Message from "../models/Message";
import InfoMessage from "../models/InfoMessage";
import process from "process";

class ChatManager {
  constructor(userManager) {
    this.ws = new WebSocket(
      "ws://" + process.env.REACT_APP_BASE_URL + "/chat/ws"
    );
    this.userManager = userManager;
  }

  onReceive(callback) {
    this.callback = callback;
    this.ws.onmessage = (event) => {
      const arr = JSON.parse(event.data);

      var messages = [];
      for (let data of arr) {
        var message = this.parseMessage(data);
        messages.push(message);
      }
      this.callback(messages);
    };
  }

  sendTextMessage(content) {
    const data = { type: "text", content: content };
    this.ws.send(JSON.stringify(data));
  }

  parseMessage(rawData) {
    const data = JSON.parse(String(rawData));
    if (data["type"] == "text") {
      const message = new Message(data);
      message.isOutgoing = message.user.id == this.userManager.token;
      return message;
    } else if (data["type"] == "info") {
      return new InfoMessage(data);
    }
  }
}

export default ChatManager;
