import React, { useState } from "react";
import { useNavigate } from "react-router";
import ModalError from "../ModalError";

import imgButtonNext from "../style/img/button-next.png";

const RegistrationPassword = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [passwordCopy, setPasswordCopy] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleNavToProfile = e => {
		e.preventDefault();
		setIsSubmitted(true);
		setErrorMessage("");
		setModalVisible(false);

		if (!password) {
			setErrorMessage("Пожалуйста, придумайте и введите пароль");
			setModalVisible(true);
			return;
		}

		if (!passwordCopy) {
			setErrorMessage("Пожалуйста, повторите пароль");
			setModalVisible(true);
			return;
		}

		if (!(passwordCopy === password)) {
			setErrorMessage("Вы неверно повторили пароль");
			setModalVisible(true);
			return;
		}

		navigate("/profile/profile-info");
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<div className="registration">
			<h1>Регистрация</h1>
			<p>Введите пароль</p>
			<input
				type="password"
				style={{ borderColor: !password && isSubmitted ? "red" : "" }}
				value={password}
				onChange={e => setPassword(e.target.value)}
			></input>
			<p>Повторите пароль</p>
			<input
				type="password"
				style={{ borderColor: !passwordCopy && isSubmitted ? "red" : "" }}
				value={passwordCopy}
				onChange={e => setPasswordCopy(e.target.value)}
			></input>
			<button
				type="button"
				className="button-next"
				onClick={handleNavToProfile}
			>
				Далее<img src={imgButtonNext} alt="next"></img>
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

export default RegistrationPassword;
