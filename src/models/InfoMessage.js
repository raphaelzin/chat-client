class Message {
  constructor(data) {
    this.id = data["id"];
    this.content = data["content"];
    this.type = data["type"];
    this.infoType = data["info-type"];
    this.timestamp = new Date(data["timestamp"]);
  }
}

export default Message;
