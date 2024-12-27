import React from "react";

import Group8_img from "../style/img/Group 8.png"

const ChatButton = ({ onClick }) => {
  return (
    <button className="chat-button" onClick={onClick}>
     <img src={Group8_img} alt='Chat'></img>
    </button>
  );
};

export default ChatButton;
