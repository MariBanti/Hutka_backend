import React, {useState} from "react";
import { useNavigate } from "react-router";
import ModalError from "../ModalError";

import imgButtonNext from "../style/img/button-next.png"

const RegistrationInfo = () =>{
	const navigate = useNavigate();
	const [surname, setSurname] = useState('');
	const [name, setName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [modalVisible, setModalVisible] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);


	const handleNavToPassword = (e) =>{
		e.preventDefault();
		setIsSubmitted(true);
		setModalVisible(false);
		setErrorMessage('');

		if(!name || !surname){
			setErrorMessage('Пожалуйста, заполните поля, помеченные *');
			setModalVisible(true);
			return;
		}
		navigate('/enter/registration-password');
	}

	// const registrationInfo ={
	// 	surname,
	// 	name,
	// 	middleName
	// }

	const closeModal = () => {
		setModalVisible(false);
	};

	return(
		<div className="registration">
			<h1>Регистрация</h1>
			<p>Введите информацию о себе</p>
			<input type="text" placeholder="Фамилия*" style={{ borderColor: !surname && isSubmitted ? "red" : "" }}
				value={surname}
				onChange={e => setSurname(e.target.value)}></input>
			<input type="text" placeholder="Имя*" style={{ borderColor: !name && isSubmitted ? "red" : "" }}
				value={name}
				onChange={e => setName(e.target.value)}></input>
			<input type="text" placeholder="Отчество"
				value={middleName}
				onChange={e => setMiddleName(e.target.value)}></input>
			<button type="button" onClick={handleNavToPassword} className="button-next">Далее<img src={imgButtonNext} alt="next"></img></button>

			{modalVisible && (
				<div className="modal">
					<div className="modal-content">
						<ModalError message={errorMessage} onClose={closeModal} />
					</div>
				</div>
			)}
		</div>
	);
}

export default RegistrationInfo