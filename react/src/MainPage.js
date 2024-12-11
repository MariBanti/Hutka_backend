import React from "react";
import BookingForm from "./BookingForm";
import InfoPanel from "./InfoPanel";

const MainPage = () =>{
	return(
		<div>
			<h1>Поездки по самым низким ценам!</h1>
			<BookingForm/>
			<InfoPanel/>
		</div>
	);
};

export default MainPage