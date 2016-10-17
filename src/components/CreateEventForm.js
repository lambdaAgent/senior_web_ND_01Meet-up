import React, { Component } from 'react';
import Navbar from "./Navbar";
import FormGroup from "./FormGroup";
import {Validation} from "../helper/helper"
import moment from "moment";
import EventList  from "../events/eventList.js";
import {browserHistory} from "react-router";
import {Message, EventType, GuestList} from "./ExtraInputsForEvents";
const $ = require("jquery");


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        guests: [{firstName: "", lastName:""}],
        startDate: false,
        endDate: false
      }
  }

  addGuest(e){
    //press to add guests' firstname and lastname
    e.preventDefault();
    const newGuests = this.state.guests;
    newGuests.push({firstName: "", lastName: ""});
    this.setState({guests: newGuests});
    $("#help-guestList").hide();
  }

  removeGuest(idx){
    //press to remove guests' firstname and lastname
    const newGuests = this.state.guests;
    
    if(newGuests.length <= 1) return undefined;

    newGuests.splice(idx, 1);
    this.setState({guests: newGuests})
  }

  validateEmpty(e){

    Validation.validateEmpty($, e);    
    //custom validation for guest's lastname
  }

  validateRequired(e){
    e.preventDefault();

    //validating required inputs
    const arr = [ "eventName", "eventHost", "eventLocation", 
                  "eventStartTime", "eventEndTime"
                ];
    Validation.validateRequired($, e, arr, 'event');

    //validating guests, function's body is in helper below 
    validateGuestList();
 
    const form = $("form[name='event']")[0]
    if( !form.checkValidity() || !this.state.startDate || !this.state.endDate ){
      //if form is not valid or startDate and endDate is invalid, break
      return undefined;
    }

    //else if form is valid,  submitting
    const dates = ["eventStartTime", "eventEndTime"]
    const texts = ["eventName","eventType", "eventHost", "eventLocation", "eventMessage"]
    addEvent(dates, texts);
  }

  validateStartDate(e){
    var notEmpty = Validation.validateEmpty($, e);
    if(!notEmpty) return undefined;
    
    //convert startDate and startTime from input to unix timestamp
    const startTime = convertDateAndTime("eventStartTime");
    const currentTime = moment().valueOf() //to unix timestamp
    if( startTime < currentTime){
      //startDate is invalid
      const errorMessage = "Event cannot start in the past";
      $("#help-eventStartTime").html(errorMessage);
      this.setState({startDate: false})
    } else {
      //validate startDate
      this.setState({startDate: true})
    }
  }

  validateEndDate(e){
    var notEmpty = Validation.validateEmpty($, e);
    if(!notEmpty) return undefined;
    
    //convert date and time from input to unix timestamp
    const startTime = convertDateAndTime("eventStartTime");
    const endTime = convertDateAndTime("eventEndTime");
    
    if(endTime <= startTime){
      const errorMessage = "Event should end later than start date ";
      $("#help-eventEndTime").html(errorMessage);
      this.setState({endDate: false})
    } else {
      //validate endDate
      this.setState({endDate: true})
    }
  }

   render() {
      return(
          <div>
              <Navbar />
              <div className="container">
                <form name="event" method="POST" action="/" 
                      style={{maxWidth: "700px", margin: "0 auto"}}>
                <div className="">
                      <FormGroup label="Event Name" id="eventName"
                                 required={true} 
                                 autocomplete="on"
                                 offFocus={this.validateEmpty.bind(this)}
                                 autofocus={true}/>
                      <EventType />

                      <FormGroup label="Event Host" id="eventHost"
                                 autocomplete="name"
                                 offFocus={this.validateEmpty.bind(this)}
                                 required={true} />
                      <FormGroup label="Event Location" id="eventLocation"
                                 autocomplete="address"
                                 offFocus={this.validateEmpty.bind(this)}
                                 required={true} />
                      
                      {/*Start date and start time*/}
                      <FormGroup label="Event Start Time" id="eventStartTime"
                                 type="datetime-local" 
                                 offFocus={this.validateStartDate.bind(this)}
                                 required={true} />
                      
                      {/*end Date and end Time*/}
                      <FormGroup label="Event End Time" id="eventEndTime"
                                 type="datetime-local" 
                                 offFocus={this.validateEndDate.bind(this)}
                                 required={true} />

                      <GuestList guests={this.state.guests}
                                 validate={this.validateEmpty.bind(this)}
                                 addGuest={this.addGuest.bind(this)}
                                 remove={(idx) => this.removeGuest.call(this, idx)}
                                 />
                      <Message />
                  <div className="form-actions">               
                    <button className="btn btn-primary btn-large" 
                           onClick={this.validateRequired.bind(this)}>
                           Submit
                    </button>
                  </div>
                </div>
                </form>
              </div>
          </div>
      );
    }
}

// ----------------
//     HELPER
// ----------------


function validateGuestList(){
  if( $("#guestFirstName0")[0].value === "" || $("#guestLastName0")[0].value === "" ){
      $("#help-guestList").show()
    } else {
      $("#help-guestList").hide()
    }
}

function addGuestList(){
  const guest = $("#guestListParent li");
  const guests_arr = []
  const guestLength = guest.length
  for(var i=0; i < guestLength; i++){
    const guestFN = "#guestFirstName" + i;
    const guestLN = "#guestLastName" + i;
    const _guest = {
      firstName: $(guestFN)[0].value,
      lastName: $(guestLN)[0].value
    }
    guests_arr.push(_guest)
  }

  return guests_arr;
}

function convertDateAndTime(timeId){
  // const date = "#eventStartDate"
  // const time = "#eventStartTime"
  const time = "#" + timeId;
  const timevalue = $(time)[0].value
  const timestring = timevalue
  const timestamp = moment(timestring, "YYYY-MM-Do h:mm a").valueOf();

  return timestamp;
}

function addEvent(dateArr, textsArr){
  var Event = {}
  Event.id = document.getElementById(textsArr[1]).value + (Math.floor(Math.random() * 1000) + 1)
  Event.name = document.getElementById(textsArr[0]).value
  Event.type = document.getElementById(textsArr[1]).value
  Event.author = document.getElementById(textsArr[2]).value
  Event.host = document.getElementById(textsArr[2]).value
  Event.location = document.getElementById(textsArr[3]).value
  Event.startDateAndTime = convertDateAndTime(dateArr[0])
  Event.endDateAndTime = convertDateAndTime(dateArr[1])
  Event.GuestList = addGuestList();
  Event.message = document.getElementById(textsArr[4]).value;

  EventList.push(Event)
  browserHistory.push("/")
}


export default App;
