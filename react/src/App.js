import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import Flights from "./Flights";
import RegistrationForm from "./RegistrationForm";
import ConfirmedBook from "./ConfirmedBook";
import Profile from "./Profile"
import Enter from "./Enter";

const App = () => {
	return (
		<div>
			<Router>
			<Header />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/trips" element={<Flights />} />
					<Route path="/booking" element={<RegistrationForm />} />
					<Route path="/confirmedbook" element={<ConfirmedBook />} />
					<Route path="/profile/*" element={<Profile/>}/>
					<Route path="/enter/*" element={<Enter/>}/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
