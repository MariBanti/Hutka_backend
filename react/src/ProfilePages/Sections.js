import React from "react";
import { useNavigate } from "react-router";

const Sections = () => {
	const navigate = useNavigate();

	const handleProfileInfo = () => {
		navigate("/profile/profile-info");
	};

	const handleTripStory = () => {
		navigate("/profile/trip-story");
	};

	const handleProperties = () => {
		navigate("/profile/properties");
	};

	const handleExit = () => {
		navigate("/profile/exit");
	};

	return (
		<nav className="sections">
			<button type="button" onClick={handleProfileInfo}>
				Информация
			</button>
			<button type="button" onClick={handleTripStory}>
				История поездок
			</button>
			<button type="button" onClick={handleProperties}>
				Настройки
			</button>
			<button type="button" onClick={handleExit}>
				Выйти
			</button>
		</nav>
	);
};

export default Sections;
