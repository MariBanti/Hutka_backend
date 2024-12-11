import React from 'react';

const Header = () => {
    return (
        <header>
            <img className="utka_logo" src="/img/utka.png" alt="Logo" width="70px" />
            <div className="logo">Хутка!</div>
            <nav>
                <div>
                    <img src="/img/Help circle.png" height="30px" alt="Помощь" />
                    <a href="#Help">Помощь</a>
                </div>
                <div>
                    <img src="/img/Phone.png" height="30px" alt="Контакты" />
                    <a href="#Contacts">Контакты</a>
                </div>
                <div>
                    <img src="/img/Star.png" height="30px" alt="Акции" />
                    <a href="#Salary">Акции</a>
                </div>
            </nav>
            <img src="/img/Generic avatar.png" height="50px" alt="Аватар" />
            <button className="registration-button">Регистрация</button>
        </header>
    );
};

export default Header;