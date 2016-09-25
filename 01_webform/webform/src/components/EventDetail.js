import React from 'react';
import EventList from "../events/eventList.js"
import Navbar from "./Navbar"
import moment from "moment";

const EventDetail = (props) => {
	const e = EventList.getAll().filter(e => e.id == props.params.eventId)[0];
	const startDate = moment(e.startDateAndTime).format("MMMM Do YYYY")
	const startTime = moment(e.startDateAndTime).format("h:mm:ss a")
	const endDate = moment(e.endDateAndTime).format("MMMM Do YYYY")
	const endTime = moment(e.endDateAndTime).format("h:mm:ss a");
	const guests = e.GuestList.map(g => <li>{g.firstName + " " + g.lastName}</li>)
	const message = ("message" in e) ? e.message : "";
	return(
    	<div>
    		<Navbar />
	    	<div className="container">
		    	<div className="card">
		    		<div className="card-header">
		    			<h3><strong>{e.name}</strong> {' | '} type: {e.type} </h3>
		    		</div>
			    	<div className="card-block">
					  <h4 className="card-title">host: {e.host}</h4>
					  <ul>
					  	<li className="card-text">start: <strong style={{fontSize: "18px"}}>{startDate}, {startTime}</strong></li>
					  	<li className="card-text">end: <strong style={{fontSize: "18px"}}>{endDate}, {endTime}</strong></li>
					  	<li>location: <strong style={{fontSize: "18px"}}>{e.location}</strong></li>
					  	<li> 
					  		Guests: 
					  		<ol>
					  			{guests}
					  		</ol>
					  	</li>
					  	<li>
					  	  Message:
						  <p className="card-text">	{message}  </p>
						</li>
					  </ul>
					</div>
				</div>
			</div>
		</div>
    )
}



export default EventDetail;
