import React, { useState } from "react";
import { useNavigate } from "react-router";
import ModalError from "./ModalError";

import imgArrowLeft from "./style/img/Arrow left.png";
import imgPlus from "./style/img/Plus circle.png";
import imgMinus from "./style/img/Minus circle.png";

const RegistretionForm = () => {
	const navigate = useNavigate();

	const [surname, setSurname] = useState("");
	const [name, setName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [phone, setPhone] = useState("");
	const [adultTickets, setAdultTickets] = useState(0);
	const [benefitTickets, setBenefitTickets] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setErrorMessage("");
		setIsSubmitted(true);
		setModalVisible(false);

		if (!surname || !name || !phone) {
			setErrorMessage(
				"Все поля, помеченные *, обязательно должны быть заполнены"
			);
			setModalVisible(true);
			return;
		}

		if (adultTickets === 0 && benefitTickets === 0) {
			setErrorMessage("Пожалуйста, выберите хотя бы один билет.");
			setModalVisible(true);
			return;
		}

		const price = adultTickets * 10 + benefitTickets * 5;

		const registrationData = {
			surname,
			name,
			middleName,
			phone,
			adultTickets,
			benefitTickets,
			price,
		};

		console.log("Данные для бронирования:", registrationData);

		navigate("/confirmedbook");
	};

	return (
		<div className="registration-form">
			<div className="return">
				<button className="returnBackToMainPage" onClick={() => navigate("/")}>
					<img src={imgArrowLeft} alt="назад" />
					Вернуться назад
				</button>
			</div>

			<div className="registrationInfo">
				<div className="registrationFlight">
					<div className="time">
						<div className="departure-time">12:30</div>
						<hr />
						<div className="travel-time">90мин</div>
						<hr />
						<div className="arrival-time">14:00</div>
					</div>
					<div className="trip-towns">
						<div className="departure">
							<div className="city">Минск</div>
							<div className="station">Центральный автовокзал</div>
						</div>
						<div className="arrival">
							<div className="city">Гродно</div>
							<div className="station">Автовокзал</div>
						</div>
					</div>
				</div>

				<div className="busInfo">
					<div className="labelForInfo">Информация о машине</div>
					<div className="busModel">
						Модель: Mercedez-Benz Sprinter
						<br />
						Цвет: Белый
						<br />
						Номер: 3780 MP-7
					</div>
				</div>
			</div>

			<div className="clientInfo">
				<form className="clientContactInfo" onSubmit={handleSubmit}>
					<div>Контактная информация</div>
					<label htmlFor="inputSurname">Фамилия*</label>
					<input
						type="text"
						id="registrationInputSurname"
						placeholder="Фамилия"
						value={surname}
						onChange={e => setSurname(e.target.value)}
						required
						style={{ borderColor: isSubmitted && !surname ? "red" : "" }}
					/>
					<label htmlFor="inputName">Имя*</label>
					<input
						type="text"
						id="registrationInputName"
						placeholder="Имя"
						value={name}
						onChange={e => setName(e.target.value)}
						required
						style={{ borderColor: isSubmitted && !name ? "red" : "" }}
					/>
					<label htmlFor="inputMiddleName">Отчество</label>
					<input
						type="text"
						id="registrationInputMiddleName"
						placeholder="Отчество"
						value={middleName}
						onChange={e => setMiddleName(e.target.value)}
					/>
					<label htmlFor="inputPhone">Телефон*</label>
					<input
						type="tel"
						id="registrationInputPhone"
						placeholder="+375(___)___-__-__"
						value={phone}
						onChange={e => setPhone(e.target.value)}
						required
						pattern="\+375\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
						style={{ borderColor: isSubmitted && !phone ? "red" : "" }}
					/>
				</form>

				<div className="ticketType">
					<div className="ticketText">Тип билета*</div>
					<div className="adult">
						<button
							type="button"
							onClick={() => setAdultTickets(Math.max(adultTickets - 1, 0))}
						>
							<img src={imgMinus} alt="минус" />
						</button>
						<input
							type="number"
							value={adultTickets}
							min={0}
							readOnly
							style={{
								borderColor:
									isSubmitted && !(adultTickets + benefitTickets) > 0
										? "red"
										: "",
							}}
						/>
						<label htmlFor="adultTicket">Взрослый</label>
						<button
							type="button"
							onClick={() => setAdultTickets(adultTickets + 1)}
						>
							<img src={imgPlus} alt="плюс" />
						</button>
					</div>
					<div className="benefit">
						<button
							type="button"
							onClick={() => setBenefitTickets(Math.max(benefitTickets - 1, 0))}
						>
							<img src={imgMinus} alt="минус" />
						</button>
						<input
							type="number"
							value={benefitTickets}
							min={0}
							readOnly
							style={{
								borderColor:
									isSubmitted && !(adultTickets + benefitTickets) > 0
										? "red"
										: "",
							}}
						/>
						<label htmlFor="benefitTicket">Льготный</label>
						<button
							type="button"
							onClick={() => setBenefitTickets(benefitTickets + 1)}
						>
							<img src={imgPlus} alt="плюс" />
						</button>
					</div>
					<div className="textAboutbenefit">
						Льготный билет распространяется на детей до 7 лет, ветеранов и
						инвалидов 1 группы. При посадке необходимо предъявить подтверждающий
						документ.
					</div>
					<div className="resultPrice">
						Итого: {0 + adultTickets * 10 + benefitTickets * 5} Br
					</div>
					<div className="buttonsForBookOrBuy">
						<button type="button" className="bookButton" onClick={handleSubmit}>
							Забронировать
						</button>
						<button type="button" className="buyButton">
							Оплатить
						</button>
					</div>
				</div>
			</div>

			{modalVisible && (
				<ModalError
					message={errorMessage}
					onClose={() => setModalVisible(false)}
				/>
			)}
		</div>
	);
};

export default RegistretionForm;
