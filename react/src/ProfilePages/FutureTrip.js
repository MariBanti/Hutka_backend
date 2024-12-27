import React from "react";
import { useLocation } from "react-router";

const FutureTrip = () => {
    const location = useLocation();
    const {
        surname,
        name,
        middleName,
        phone,
        adultTickets,
        benefitTickets,
        price,
        flightData = {},
    } = location.state || {};

    return (
        <div className="future-trip">
            <div className="trip-date-direction">
                <p>24.10.2024</p>
                <p>{`${flightData.departureCity || "Не указано"} - ${flightData.arrivalCity || "Не указано"}`}</p>
            </div>
            <hr />
            <div className="trip-time-num">
                <div className="blocks">
                    <div className="header">Отправление</div>
                    <div className="time">{flightData.departureTime || "Не указано"}</div>
                    <div className="city">{flightData.departureCity || "Не указано"}</div>
                    <div className="stop">{flightData.departureStation || "Не указано"}</div>
                </div>
                <div className="blocks">
                    <div className="header">Прибытие</div>
                    <div className="time">{flightData.arrivalTime || "Не указано"}</div>
                    <div className="city">{flightData.arrivalCity || "Не указано"}</div>
                    <div className="stop">{flightData.arrivalStation || "Не указано"}</div>
                </div>
                <div className="blocks">
                    <div className="header">Время в пути</div>
                    <div className="num">{flightData.travelTime || "Не указано"}</div>
                </div>
            </div>
            <div className="trip-passenger-car-info">
                <div className="blocks">
                    <div className="header">Пассажир</div>
                    <span className="info-type">Фамилия: </span>{" "}
                    <span className="info">{surname || "Не указано"}</span>
                    <br />
                    <span className="info-type">Имя: </span>{" "}
                    <span className="info">{name || "Не указано"}</span>
                    <br />
                    <span className="info-type">Отчество: </span>{" "}
                    <span className="info">{middleName || "Не указано"}</span>
                    <br />
                    <span className="info-type">Номер: </span>{" "}
                    <span className="info">{phone || "Не указано"}</span>
                    <br />
                </div>
                <div className="blocks">
                    <div className="header">Машина</div>
                    <span className="info-type">Модель: </span>{" "}
                    <span className="info">{flightData.busModel || "Не указано"}</span>
                    <br />
                    <span className="info-type">Цвет: </span>{" "}
                    <span className="info">{flightData.busColor || "Не указано"}</span>
                    <br />
                    <span className="info-type">Номер: </span>{" "}
                    <span className="info">{flightData.busNumber || "Не указано"}</span>
                </div>
            </div>
            <div className="trip-ticket-price">
                <div className="blocks">
                    <div className="header">Билеты</div>
                    <span className="info-type">Взрослый: </span>{" "}
                    <span className="info">{adultTickets || 0}</span>
                    <br />
                    <span className="info-type">Льготный: </span>{" "}
                    <span className="info">{benefitTickets || 0}</span>
                </div>
                <div className="blocks">
                    <div className="header">Оплата</div>
                    <div className="price">{price || 0} Br</div>
                </div>
            </div>
        </div>
    );
};

export default FutureTrip;
