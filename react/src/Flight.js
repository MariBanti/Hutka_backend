import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Flight = ({ flId }) => {
    const navigate = useNavigate();
    const [flightData, setFlightData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchFlightData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/trip/`+flId);
                setFlightData(response.data);
            } catch (err) {
                console.error("Ошибка загрузки данных рейса:", err);
                setError("Не удалось загрузить информацию о рейсе.");
            } finally {
                setLoading(false);
            }
        };

        fetchFlightData();
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flight-card">
            <div className="flight-info">
                <div className="time">
                    <div className="departure-time">{flightData.departureTime}</div>
                    <hr />
                    <div className="travel-time">{flightData.travelTime}</div>
                    <hr />
                    <div className="arrival-time">{flightData.arrivalTime}</div>
                </div>
                <div className="trip-towns">
                    <div className="departure">
                        <div className="city">{flightData.departureCity}</div>
                        <div className="station">{flightData.departureStation}</div>
                    </div>
                    <div className="arrival">
                        <div className="city">{flightData.arrivalCity}</div>
                        <div className="station">{flightData.arrivalStation}</div>
                    </div>
                </div>
                <div className="other-info">
                    <div className="bus-info">
                        <div className="bus-model">
                            Машина: {flightData.busModel}, {flightData.busNumber}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flight-price">
                <div className="price">{flightData.price} Br</div>
                <button
                    className="order-button"
                    onClick={() =>
                        navigate('/booking', {
                            state: {
                                departureTime: flightData.departureTime,
                                travelTime: flightData.travelTime,
                                arrivalTime: flightData.arrivalTime,
                                departureCity: flightData.departureCity,
                                departureStation: flightData.departureStation,
                                arrivalCity: flightData.arrivalCity,
                                arrivalStation: flightData.arrivalStation,
                                busModel: flightData.busModel,
                                busColor: flightData.busColor || "Белый",
                                busNumber: flightData.busNumber,
                            },
                        })
                    }
                >
                    Заказать
                </button>
            </div>
        </div>
    );
};

export default Flight;
