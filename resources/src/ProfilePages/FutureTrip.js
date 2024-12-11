import React from "react";

const FutureTrip = () => {
	return (
		<div className="future-trip">
			<div className="trip-date-direction">
				<p>24.10.2024</p>
				<p>Минск-Гродно</p>
			</div>
			<hr></hr>
			<div className="trip-time-num">
				<div className="blocks">
					<div className="header">Отправление</div>
					<div className="time">05:45</div>
					<div className="city">Минск</div>
					<div className="stop">Каменная горка</div>
					<div className="stop-detail">Напротив ТЦ Green City</div>
				</div>
				<div className="blocks">
					<div className="header">Прибытие</div>
					<div className="time">09:20</div>
					<div className="city">Гродно</div>
					<div className="stop">Автовокзал</div>
					<div className="stop-detail">Платформа 6</div>
				</div>
				<div className="blocks">
					<div className="header">Время в пути</div>
					<div className="num">3 ч 35 мин</div>
					<div className="header">Номер заказа</div>
					<div className="num">2345678</div>
				</div>
			</div>
			<div className="trip-passenger-car-info">
				<div className="blocks">
					<div className="header">Пассажир</div>
					<span className="info-type">Фамилия: </span>{" "}
					<span className="info">Мардасевич</span>
					<br></br>
					<span className="info-type">Имя: </span>{" "}
					<span className="info">Егор</span>
					<br></br>
					<span className="info-type">Отчество: </span>{" "}
					<span className="info">Сергеевич</span>
					<br></br>
					<span className="info-type">Номер: </span>{" "}
					<span className="info">+375447622722</span>
					<br></br>
				</div>
				<div className="blocks">
					<div className="header">Машина</div>
					<span className="info-type">Модель: </span>{" "}
					<span className="info"> Mercedes-Benz Sprinter</span>
					<br></br>
					<span className="info-type">Цвет: </span>{" "}
					<span className="info">Белый</span>
					<br></br>
					<span className="info-type">Номер: </span>{" "}
					<span className="info">3780 МР-7</span>
				</div>
			</div>
			<div className="trip-ticket-price">
				<div className="blocks">
					<div className="header">Билеты</div>
					<span className="info-type">Взрослый: </span>{" "}
					<span className="info">1</span>
					<br></br>
					<span className="info-type">Льготный: </span>{" "}
					<span className="info">1</span>
				</div>
				<div className="blocks">
					<div className="header">
						Оплата
					</div>
					<div className="price">64 Br</div>
				</div>
			</div>
			<button type="button" className="cancel-trip">Отменить поездку</button>
			<button type="button" className="change-trip">Изменить данные</button>
		</div>
	);
};

export default FutureTrip;
