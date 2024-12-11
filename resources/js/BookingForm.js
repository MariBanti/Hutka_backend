import React from 'react';

const BookingForm = () => {
    return (
        <form className="booking-bar">
            <div>
                <select className="select_from">
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
                <select className="select_to">
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
                <input type="date" className="select_date" />
            </div>
            <div>
                <select id="select_pas">
                    <option value="">Пассажиры</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="search-button" id="search-button">Поиск</button>
        </form>
    );
};

export default BookingForm;