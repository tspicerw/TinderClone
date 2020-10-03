import React from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [messages, setMessages] = React.useState([
    {
      name: "Ellen",
      image: "",
      message: "What's up?",
    },
    {
      name: "Ellen",
      image: "",
      message: "How's it going?",
    },
    {
      message: "good!",
    },
  ]);
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with Ellen 10/1/2020</p>
      {messages.map((message) => {
        return (
          <div className="chatScreen__message" key="message">
            <p className="chatScreen__text"></p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatScreen;
