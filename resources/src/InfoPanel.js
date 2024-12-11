import React from 'react';

import imgWallet from './style/img/wallet-money.png'
import imgCar from './style/img/car.png'
import imgFlash from './style/img/flash.png'

const InfoPanel = () => {
    return (
        <section className="panel">
            <div>
                <img src={imgWallet} alt="wallet" />
                <h3><b>Поездки по низкой цене</b></h3>
                <p>
                    Система акций и скидок, позволяет ездить дешевле. За каждую поездку
                    начисляются бонусы, которыми можно расплатиться.
                </p>
            </div>
            <div>
                <img src={imgCar} alt="car" />
                <h3>Современный автопарк</h3>
                <p>
                    В наличии 32 новых микроавтобуса, обеспечивающих комфортную поездку.
                </p>
            </div>
            <div>
                <img src={imgFlash} alt="flash" />
                <h3>В дорогу за пару кликов!</h3>
                <p>
                    Забронировать поездку получится за несколько минут, а мы всегда
                    предложим самые удобные варианты.
                </p>
            </div>
        </section>
    );
};

export default InfoPanel;