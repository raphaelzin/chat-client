import React from "react";
import MessageView from "./MessageView";
import InfoMessageView from "./InfoMessageView";

class ChatMessagesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    this.props.chatManager.onReceive((messages) => {
      var currMessages = this.state.messages || [];
      currMessages = currMessages.concat(messages);

      // eslint-disable-next-line no-unused-vars
      this.setState((state, props) => {
        return { messages: currMessages };
      });
    });
  }

  render() {
    var listItems = this.state.messages.map((message) => {
      const obj =
        message["type"] == "info" ? (
          <InfoMessageView message={message} />
        ) : (
          <MessageView message={message} />
        );
      return <li key={message.id}>{obj}</li>;
    });
    return <ul>{listItems}</ul>;
  }
}

export default ChatMessagesView;
