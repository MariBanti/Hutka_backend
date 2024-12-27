import React, { useState } from "react";
import ModalError from "../ModalError";
import { useNavigate, useLocation } from "react-router-dom";

import imgButtonNext from "../style/img/button-next.png";

const RegistrationCode = () => {
	const navigate = useNavigate();
	const [code, setCode] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
    const location = useLocation();
    const data = location.state?.data

	const handleNavToInfo = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
		setErrorMessage("");
		setModalVisible(false);

		if (!code) {
			setErrorMessage("Вы ничего не ввели");
			setModalVisible(true);
			return;
		}

		console.log("Регистрация по коду:", code);
		navigate("/enter/registration-info", {state:{data}});
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<div className="registration">
			<h1>Регистрация</h1>
			<p>Код выслан на +375(хх)ххх-хх-хх</p>
			<input
				type="number"
				placeholder="Введите код из SMS"
				style={{ borderColor: !code && isSubmitted ? "red" : "" }}
				value={code}
				onChange={e => setCode(e.target.value)}
			></input>
			<div className="next">
				<p id="get-new-code">Получить новый код можно через 1мин</p>
				<button type="button" onClick={handleNavToInfo} className="button-next">
					Далее<img src={imgButtonNext} alt="next"></img>
				</button>
			</div>
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

export default RegistrationCode;
