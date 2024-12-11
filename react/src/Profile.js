import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileInfo from "./ProfilePages/ProfileInfo.js"
import TripStory from "./ProfilePages/TripStory.js"
import Properties from "./ProfilePages/Properties.js"
import Exit from "./ProfilePages/Exit.js"

const Profile = () =>{
	return(
			<div className="profile">
				<Routes>
					<Route path="profile-info" element={<ProfileInfo/>}/>
					<Route path="trip-story" element={<TripStory/>}/> 
					<Route path="properties" element={<Properties/>}/>
					<Route path="exit" element={<Exit/>}/> 
 				</Routes>
			</div>
	);
}

export default Profile
