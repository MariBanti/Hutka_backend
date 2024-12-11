import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalError from './ModalError'; 

const BookingForm = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setErrorMessage('');
        setModalVisible(false); 

        if (!from || !to || !date || !passengers) {
            setErrorMessage('Пожалуйста, заполните все поля.');
            setModalVisible(true); 
            return;
        }

        const flights = findFlights({ from, to, date, passengers });
        
        if (flights) {
            navigate('/trips', { state: { flights } });
        } else {
            console.warn('Рейсы не найдены');
        }
    };

    const bookingData = {
        from,
        to,
        date,
        passengers
    };

    console.log("Данные для поиска рейс:", bookingData);

    const findFlights = ({ from, to, date, passengers }) => {
        return from && to && date && passengers ? ['Рейс 1', 'Рейс 2'] : null;
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
                        style={{ borderColor: isSubmitted && !from ? 'red' : '' }}
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
                        style={{ borderColor: isSubmitted && !to ? 'red' : '' }}
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
                        style={{ borderColor: isSubmitted && !date ? 'red' : '' }} 
                    />
                </div>
                <div>
                    <select 
                        id="select_pas" 
                        value={passengers} 
                        onChange={(e) => setPassengers(e.target.value)} 
                        style={{ borderColor: isSubmitted && !passengers ? 'red' : '' }}
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
            {modalVisible && <ModalError message={errorMessage} onClose={closeModal} />}
        </div>
    );
};

export default BookingForm;