import React from 'react';
import Header from './Header';
import BookingForm from './BookingForm';
import InfoPanel from './InfoPanel';

const App = () => {
    return (
        <div>
            <Header />
            <h1>Поездки по самым низким ценам!</h1>
            <BookingForm />
            <InfoPanel />
        </div>
    );
};

export default App;