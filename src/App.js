/* eslint-disable no-unused-vars */
import "./App.css";
// import ChatMessagesView from "./components/ChatMessagesView";
// import UserTextInput from "./components/UserTextInput";
import ChatManager from "./core/ChatManager";
import UserManager from "./core/UserManager";
import CoolChat from "./pages/CoolChat/CoolChat";
import Chat from "./pages/chat";
import Login from "./pages/login";

var userManager = new UserManager();
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Login userManager={userManager} />,
  },
  {
    path: "/cool-chat/ws",
    element: <CoolChat userManager={userManager} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
