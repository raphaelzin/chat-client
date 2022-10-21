import "./css/animations.css";
import "./css/themes.css";
import "./css/main.css";
import React from "react";
import ChatManager from "../../core/ChatManager";
import CoolMessageView from "../../components/CoolChatMessage";

class CoolChat extends React.Component {
  constructor(props) {
    super(props);
    this.chatManager = new ChatManager(props.userManager);
    this.state = { messages: [], value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.proxyFocus = this.proxyFocus.bind(this);
  }

  componentDidMount() {
    this.proxyFocus();
    this.chatManager.onReceive((messages) => {
      var currMessages = this.state.messages || [];
      currMessages = currMessages.concat(messages);
      // eslint-disable-next-line no-unused-vars
      this.setState((state, props) => {
        return { messages: currMessages, value: state.value };
      });
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.chatManager.sendTextMessage(this.state.value);
    this.setState({ value: "" });
  }

  proxyFocus() {
    document.getElementById("hiddeninput").focus();
  }

  render() {
    var listItems = this.state.messages.map((message) => {
      return <CoolMessageView key={message.id} message={message} />;
    });

    return (
      <div className="theme-orange">
        <div id="monitor">
          <div id="screen">
            <div id="crt" className="off">
              <div className="scanline"></div>
              <div className="terminal">
                <div id="transcript">welcome to chat</div>
                {listItems}
                <p
                  id="input"
                  onMouseUp={this.proxyFocus}
                  onTouchEnd={this.proxyFocus}
                >
                  {this.state.value}
                </p>
                <form id="form-wrapper" onSubmit={this.handleSubmit}>
                  <input
                    id="hiddeninput"
                    autoComplete="off"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoolChat;
