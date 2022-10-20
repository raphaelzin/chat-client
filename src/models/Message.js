import User from "./User";

class Message {
  constructor(data) {
    this.id = data["id"];
    this.content = data["content"];
    this.type = data["type"];
    this.user = new User(data["user"]);
    this.timestamp = new Date(data["timestamp"]);
  }
}

export default Message;
