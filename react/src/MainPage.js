import React, { useEffect, useState } from "react";

import BookingForm from "./BookingForm";
import InfoPanel from "./InfoPanel";
import Sales from "./Sales";
import ChatButton from "./Chat/ChatButton";
import ChatWindow from "./Chat/ChatWindow";
import Footer from "./Footer"

const MainPage = () => {
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const section = document.querySelector(hash);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, []);

	const [isChatOpen, setChatOpen] = useState(false);

	const toggleChat = () => {
		setChatOpen(!isChatOpen);
	};

	return (
        <div>
            <h1>Поездки по самым низким ценам!</h1>
            <BookingForm/>
            <InfoPanel/>
            <div id="main-page-sales">
                <Sales/>
            </div>
            <div id="main-page-contacts">
                <Footer/>
            </div>
            <ChatButton onClick={toggleChat}/>
            {isChatOpen && <ChatWindow onClose={toggleChat}/>}
        </div>
    );
};

export default MainPage;
