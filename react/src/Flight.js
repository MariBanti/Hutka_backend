import React from "react";
import { useNavigate } from "react-router";

const Flight = () =>{
	const navigate = useNavigate();

	return(
		<div className="flight-card">
		<div className="flight-info">
				<div className="time">
						<div className="departure-time">12:30</div>
						<hr></hr>
						<div className="travel-time">1 ч 30 мин</div>
						<hr></hr>
						<div className="arrival-time">14:00</div>
				</div>
				<div className="trip-towns">
						<div className="departure">
								<div className="city">Минск</div>
								<div className="station">Центральный автовокзал</div>
						</div>
						<div className="arrival">
								<div className="city">Гродно</div>
								<div className="station">Автовокзал</div>
						</div>
				</div>
				<div className="other-info">
						<div className='bus-info'>
								<div className="bus-model">Машина: Mercedes-Sprinter, MV 2903-5</div>
						</div>
				</div>
		</div>
		<div className="flight-price">
				<div className="price">20 Br</div>
				<button className="order-button" onClick={()=>navigate('/booking')}>Заказать</button>
		</div>
</div>
	);
}

export default Flight;