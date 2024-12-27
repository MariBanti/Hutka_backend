import React from "react";

import Avatar_img from "../style/img/Group 13.png";
import attach_img from "../style/img/attach_file.png"
import Smile_img from "../style/img/mood.png"

const ChatWindow = ({ onClose }) => {
	return (
		<div className="chat-window">
			<div className="chat-header">
        <div className="chat-avatar"><img src={Avatar_img} alt='uwu'></img></div>
        <div className="chat-title">
          <h4>Консультант Мария</h4>
          <span className="chat-status">онлайн</span>
        </div>
        <button className="chat-close" onClick={onClose}>
          ✖
        </button>
      </div>
			<div className="chat-messages">
				<div className="message">
					<p>Добрый день, чем могу помочь?</p>
					<span className="message-time">14:30</span>
				</div>
				<div className="message user-message">
					<p>Добрый, подскажите, пожалуйста, где посмотреть скидки и акции</p>
					<span className="message-time">14:45</span>
				</div>
				<div className="message">
					<p>Конечно, акции вы можете посмотреть внизу главной страницы</p>
					<span className="message-time">14:50</span>
				</div>
				<div className="typing-indicator">Печатает...</div>
			</div>
			<div className="chat-input">
        <button className="attach-button">
          <img src={attach_img} alt='attach'></img>
        </button>
        <button className="sticker-button">
				<img src={Smile_img} alt='smile'></img>
        </button>
        <input type="text" placeholder="Написать сообщение" />
        <button className="send-button">➤</button>
      </div>
		</div>
	);
};

export default ChatWindow;
