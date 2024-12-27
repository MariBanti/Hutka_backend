import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import imgUtka from './style/img/utka.png'
import imgHelpCircle from './style/img/Help circle.png'
import imgPhone from './style/img/Phone.png'
import imgStar from './style/img/Star.png'
import imgAvatar from './style/img/Generic avatar.png'


const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/profile/profile-info'); 
    };

    const handleReturn = () =>{
        navigate('/');
    }

    const handleNavToEnter = () =>{
        navigate('/enter/enter-or-registration');
    }
    
    return (
        <header>
            <img className="utka_logo" src={imgUtka} alt="Logo" width="70px" />
            <div className="logo"><button type='button' onClick={handleReturn}>Хутка!</button></div>
            <nav>
                <div>
                    <img src={imgHelpCircle} height="30px" alt="Помощь" />
                    <a href="#Help">Помощь</a>
                </div>
                <div>
                    <img src={imgPhone} height="30px" alt="Контакты" />
                    <a href="#Contacts">Контакты</a>
                </div>
                <div>
                    <img src={imgStar} height="30px" alt="Акции" />
                    <Link to="/#main-page-sales">Акции</Link>
                </div>
            </nav>
             <button className='avatar' type='button' onClick={handleNavigation}><img src={imgAvatar} height="50px" alt="Аватар" /></button> 
            <button className="registration-button" onClick={handleNavToEnter}>Вход</button>
        </header>
    );
};

export default Header;