import "./css/animations.css";
import "./css/themes.css";
import "./css/main.css";

const CoolMessageView = (props) => {
  var tsClass = props.message.isOutgoing ? "from-me" : "from-someone";
  tsClass += " timestamp";

  const username =
    props.message.type == "info" ? "System" : props.message.user.username;
  const timestamp = new Intl.DateTimeFormat("en-US").format(
    props.message.timestamp
  );
  return (
    <p>
      <span className={tsClass}>{timestamp}</span>
      <span className="from">{" " + username + " said: "}</span>
      <span className="msg">{props.message.content}</span>
    </p>
  );
};

export default CoolMessageView;
