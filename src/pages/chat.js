/* eslint-disable no-unused-vars */

import ChatMessagesView from "../components/ChatMessagesView";
import UserTextInput from "../components/UserTextInput";
import ChatManager from "../core/ChatManager";

const Chat = (props) => {
  const chatManager = new ChatManager(props.userManager);
  return (
    <div>
      <ChatMessagesView chatManager={chatManager} />
      <UserTextInput chatManager={chatManager} />
    </div>
  );
};

export default Chat;
