import React from "react";
import { useNavigate } from "react-router";

import imgConfirmUtka from "./style/img/Group 6.png"

const ConfirmedBook = () =>{

	const nanigate = useNavigate();

	return (
		<div className="bookIsConfirmed">
				<img src={imgConfirmUtka}></img>
				<div>Бронь подтверждена!</div>
				<button type="submit" onClick={()=>nanigate("/")}>Вернуться на главную</button>
		</div>
	)
}

export default ConfirmedBook