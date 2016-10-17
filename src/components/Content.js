import React from 'react';
import { Link } from 'react-router';
import Navbar from "./Navbar";
import EventList from "../events/eventList.js";
const $ = require("jquery");
import {browserHistory} from 'react-router';


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: EventList.getAll()
        }
    }

    deleteEvent(eventId){
        const eventList = this.state.events;
        const newEvent = eventList.filter(e => e.id !== eventId)
        EventList.replace(newEvent)
        this.setState({events: EventList.getAll()}) 
    }
    render() {
        const self = this;
        const Loop = this.state.events.map((event, index) => {
            return(
                //List component is below
                <List key={index} number={index+1} name={event.name} type={event.type} 
                      author={event.author}
                      click={ ()=> browserHistory.push("/event/" + event.id)}
                      mouseOver={ () => $(".event").removeClass("event")}
                      mouseLeave={ () => $("table > tbody tr").addClass("event")}
                      delete={ self.deleteEvent.bind(this, event.id) }/>
            )
        })
        return(
            <div>
                <Navbar />
            	<div className="container">
            		<Link className="btn btn-large btn-primary" to="createEvent">Add Event</Link>
                    <div className="panel panel-default" style={{marginTop:30}}>
                       <table className="table">
                            <thead>
                                <tr> 
                                    <th>#</th> <th>Event Name</th> <th>Event Type</th> 
                                    <th>Event Author</th> <th>Actions</th>
                                </tr> 
                            </thead> 
                            <tbody> 
                                  {Loop}                           
                            </tbody> 
                        </table>
                    </div>
            	</div>
            </div>
        )
    }
}


const List = (props) => (
    //props.mouseOver
    //props.mouseLeave
    //props.name
    //props.type
    //props.author
    <tr className="event">
        <th id="noHover" scope="row" 
            onMouseOver={props.mouseOver} 
            onMouseLeave={props.mouseLeave}>
            {props.number} 
        </th> 
        <td onClick={props.click}>{props.name}</td> 
        <td onClick={props.click}>{props.type}</td> 
        <td onClick={props.click}>{props.author}</td> 
        <th id="noHover" 
            onMouseOver={props.mouseOver} 
            onMouseLeave={props.mouseLeave}>
            <button onClick={props.delete}>delete</button> 
        </th>
    </tr> 
)


export default Content;


