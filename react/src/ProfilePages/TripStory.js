import React from "react";

import Sections from './Sections'
import FutureTrip from "./FutureTrip";
import PastTrip from "./PastTrip";

const TripStory = () =>{
	return(
		<div className="profile-pages">
			< Sections/>
			<div className="trip-story">
				<h2>История поездок</h2>
				<h3>Предстоящие поездки</h3>
				<FutureTrip/>
				<h3>Совершенные поездки</h3>
				<PastTrip/>
				<PastTrip/>
			</div>
		</div>
	);
}

export default TripStory