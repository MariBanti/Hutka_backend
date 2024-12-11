import React from "react";
import Flight from "./Flight";
import { useNavigate } from "react-router-dom";

import imgHere from "./style/img/location_on.png";
import imgArrowsDown from "./style/img/Chevrons down.png";
import imgArrowLeft from "./style/img/Arrow left.png"

const Flights = () => {
	const navigate = useNavigate();


	return (
		<main>
			<div className="return">
				<button className="returnBackToMainPage" onClick={()=>navigate('/')}><img src={imgArrowLeft} alt="назад"></img>Вернуться назад</button>
			</div>
			<div className="listOfFlight">
				<div className="sortFlights">
					<div className="stops">
						<div><img src={imgHere}></img>
						Остановки</div>
						<input
							type="placeholder"
							id="departure-stop"
							value="Отправление"
						></input>
						<hr></hr>
						<input
							type="placeholder"
							id="arrival-stop"
							value="Прибытие"
						></input>
					</div>

					<div className="sort">
						<div><img src={imgArrowsDown}></img>Сортировать по</div>
						<div className="sortButton">
							<button className="sortButtonTime">Времени</button>
							<hr></hr>
							<button className="sortButtonPrice">Цене</button>
						</div>
					</div>
				</div>
				<div className="flights">
					<Flight />
					<Flight />
					<Flight />
				</div>
			</div>
		</main>
	);
};

export default Flights;
