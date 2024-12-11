import React, { useState } from "react";
import { useNavigate } from "react-router";
import ModalError from "../ModalError";

const EnterOrRegistration = () => {
	const navigate = useNavigate();
	const [phone, setPhone] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleNavToCode = (e) => {
		e.preventDefault();
		setErrorMessage("");
		setIsSubmitted(true);
		setModalVisible(false);

		if (!phone) {
			setErrorMessage("Пожалуйста, введите номер телефона.");
			setModalVisible(true);
			return;
		}

		console.log("Регистрация или вход по номеру:", phone);
		navigate("/enter/registration-code");
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<div className="enter-or-registration">
			<h1>Вход или регистрация</h1>
			<label htmlFor="reg-phone-number">Введите номер телефона</label>
			<input
				type="tel" 
				id="reg-phone-number"
				placeholder="+375(xx)xxx-xx-xx"
				style={{ borderColor: isSubmitted && !phone ? "red" : "" }}
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<button type="button" className="button" onClick={handleNavToCode}>
				Войти
			</button>
			<button type="button" className="button" onClick={handleNavToCode}>
				Зарегистироваться
			</button>

			{modalVisible && (
				<div className="modal">
					<div className="modal-content">
						<ModalError message={errorMessage} onClose={closeModal} />
					</div>
				</div>
			)}
		</div>
	);
};

export default EnterOrRegistration;