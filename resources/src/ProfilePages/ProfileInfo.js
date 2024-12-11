import React from "react";
import { useState } from "react";

import Sections from "./Sections";

const ProfileInfo = () => {
	const [profilePicture, setProfilePicture] = useState(null);

	const handleFileChange = event => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setProfilePicture(imageUrl);
		}
	};

	return (
		<div className="profile-pages">
			<Sections />
			<div className="profile-info">
				<div className="profile-info-contact">
					<h2>Профиль</h2>
					<label for="inputSurname">Фамилия*</label>
					<input
						type="text"
						id="registrationInputSurname"
						placeholder="Мардасевич"
					></input>
					<label for="inputName">Имя*</label>
					<input
						type="text"
						id="registrationInputName"
						placeholder="Егор"
					></input>
					<label for="inputMiddleName">Отчество</label>
					<input
						type="text"
						id="registrationInputMiddleName"
						placeholder="Сергеевич"
					></input>
					<label for="inputPhone">Номер телефона*</label>
					<input
						type="tel"
						id="registrationInputPhone"
						autofocus="autofocus"
						required="required"
						placeholder="+375447622722"
					></input>
					<label for="inputEmail">E-mail</label>
					<input
						type="email"
						id="registrationInputSurname"
						placeholder="egorelfbar@gmail.com"
					></input>
					<button type="button">Редактировать профиль</button>
				</div>
				<div className="profile-info-photo">
					{profilePicture && (
						<img src={profilePicture} alt="Profile Preview" id="photo" />
					)}
					<label for="files">Измененить фото профиля</label>
					<input id="files" type="file" accept="image/*" onChange={handleFileChange} />
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
