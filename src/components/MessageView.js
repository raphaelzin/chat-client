const MessageView = (props) => {
  var userTitle;
  if (props.message.isOutgoing === true) {
    userTitle = " (You)";
  } else if (props.message.user) {
    userTitle = " (" + props.message.user.username + ")";
  }

  return (
    <p>
      {props.message.content} {userTitle}
    </p>
  );
};

export default MessageView;
