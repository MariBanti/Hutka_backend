import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ModalError from './ModalError';
import axios from 'axios';

const BookingForm = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setErrorMessage('');
        setModalVisible(false);

        if (!from || !to || !date || !passengers) {
            setErrorMessage('Пожалуйста, заполните все поля.');
            setModalVisible(true);
            return;
        }

        try {
            const flights = await findFlights({ from, to, date, passengers });

            if (flights && flights.length > 0) {
                navigate('/trips', { state: { flights } });
            } else {
                setErrorMessage('Рейсы не найдены');
                setModalVisible(true);
            }
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
        }
    };


    const bookingData = {
        from,
        to,
        date,
        passengers
    };

    console.log("Данные для поиска рейс:", bookingData);

    const findFlights = async ({ from, to, date, passengers }) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/trips/`+from+'/'+to+'/'+date+'/'+passengers, {
                from,
                to,
                date,
                passengers,
            });

            return response.data;
        } catch (error) {
            console.error('Ошибка при поиске рейсов:', error);
            setErrorMessage('Произошла ошибка при поиске рейсов. Попробуйте еще раз.');
            setModalVisible(true);
            return null;
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <form className="booking-bar" onSubmit={handleSubmit}>
                <div>
                    <select
                        className="select_from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        style={{borderColor: isSubmitted && !from ? 'red' : ''}}
                    >
                        <option value="">Откуда</option>
                        <option value="Минск">Минск</option>
                        <option value="Гродно">Гродно</option>
                        <option value="Брест">Брест</option>
                        <option value="Могилев">Могилев</option>
                        <option value="Гомель">Гомель</option>
                        <option value="Солигорск">Солигорск</option>
                        <option value="Мозырь">Мозырь</option>
                        <option value="Орша">Орша</option>
                        <option value="Барановичи">Барановичи</option>
                    </select>
                </div>
                <div>
                    <select
                        className="select_to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        style={{borderColor: isSubmitted && !to ? 'red' : ''}}
                    >
                        <option value="">Куда</option>
                        <option value="Минск">Минск</option>
                        <option value="Гродно">Гродно</option>
                        <option value="Брест">Брест</option>
                        <option value="Могилев">Могилев</option>
                        <option value="Гомель">Гомель</option>
                        <option value="Солигорск">Солигорск</option>
                        <option value="Мозырь">Мозырь</option>
                        <option value="Орша">Орша</option>
                        <option value="Барановичи">Барановичи</option>
                    </select>
                </div>
                <div>
                    <input
                        type="date"
                        className="select_date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{borderColor: isSubmitted && !date ? 'red' : ''}}
                    />
                </div>
                <div>
                    <select
                        id="select_pas"
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        style={{borderColor: isSubmitted && !passengers ? 'red' : ''}}
                    >
                        <option value="">Пассажиры</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit" className="search-button" id="search-button">Поиск</button>
            </form>
            {modalVisible && <ModalError message={errorMessage} onClose={closeModal}/>}
        </div>
    );
};

export default BookingForm;
