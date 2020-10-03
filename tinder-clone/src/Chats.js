import React from "react";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! how are you?"
        timestamp="35 minutes ago"
        profilePic="https://www.bing.com/images/search?view=detailV2&ccid=i3SBFigI&id=B95850014B97D0085EA76FCC2DE398728F9AA0A7&thid=OIP.i3SBFigIijcn9v3xY_0svQHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2fBtsdRkj0UZw%2fmaxresdefault.jpg&exph=720&expw=1280&q=female&simid=608053209070833177&ck=C9D26B67261D907961B2158851E4DD7C&selectedIndex=1&FORM=IRPRST&ajaxhist=0"
      ></Chat>
      <Chat
        name="Ellen"
        message="Hey! how are you?"
        timestamp="45 minutes ago"
        profilePic=""
      ></Chat>
      <Chat
        name="Sandra"
        message="Hey! how are you?"
        timestamp="55 minutes ago"
        profilePic=""
      ></Chat>
      <Chat
        name="Natasha"
        message="Hey! how are you?"
        timestamp="57 minutes ago"
        profilePic=""
      ></Chat>
    </div>
  );
};

export default Chats;
