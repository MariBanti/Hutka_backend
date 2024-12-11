import React from "react";
import { Routes, Route } from "react-router-dom";

import EnterOrRegistration from "./EnterPages/EnterOrRegistration";
import RegistrationCode from "./EnterPages/RegistrationCode";
import RegistrationInfo from "./EnterPages/RegistartionInfo";
import RegistrationPassword from "./EnterPages/RegistrationPassword";

const Enter = () =>{
	return(
			<div className="enter">
				<Routes>
					<Route path="enter-or-registration" element={<EnterOrRegistration/>}/>
					<Route path="registration-code" element={<RegistrationCode/>}/>
					<Route path="registration-info" element={<RegistrationInfo/>}/>
					<Route path="registration-password" element={<RegistrationPassword/>}/>
 				</Routes>
			</div>
	);
}

export default Enter