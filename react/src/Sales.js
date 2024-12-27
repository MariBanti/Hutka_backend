import React from "react";

import imgPercent from "./style/img/Percent.png";
import imgHeart from "./style/img/Heart.png";
import imgGift from "./style/img/Gift.png";

const Sales = () =>{
	return (<section className="sales">
		<h1>
			<b>Акции</b>
		</h1>
		<div className="sale">
			<div>
				<h4>Праздник повсюду</h4>
				<p>
					В честь приближающихся праздников весь декабрь действует скидка 5%
					на любую поездку!
				</p>
			</div>
			<img src={imgPercent} alt="percent"></img>
		</div>
		<div className="sale">
			<div>
				<h4>Десять поездок</h4>
				<p>
					На каждую 10-ую поездку наши клиенты получают скидку
					50%.Оставайтесь с нами!
				</p>
			</div>
			<img src={imgHeart} alt="heart"></img>
		</div>
		<div className="sale">
			<div>
				<h4>Ваш день</h4>
				<p>
					Если поездка выпадает на ваш день рождения или последующие 7 дней,
					то вы получаете скидку 50%
				</p>
			</div>
			<img src={imgGift} alt="gift"></img>
		</div>
	</section>
	);
}

export default Sales
