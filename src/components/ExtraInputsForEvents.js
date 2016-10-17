import React from "react";
import FormGroup from "./FormGroup";
const $ = require("jquery");

/*
  There are 3 Main Components here:
  1. EventType 
  2. GuestList
  3. Message
*/
const EventType = (props) => {
  //props.onchange: function()
  return(
    <div className="form-group">
        <label htmlFor="eventType">Event Type</label>
        {/*<input name="eventType" className="form-control" id="eventType" list="eventType" placeholder="Event Type"/> */}
        <select name="eventType" id="eventType" className="selectpicker form-control" data-live-search="true" defaultValue="Party">
            <option value="Party">Party</option>
            <option value="Meeting">Meeting</option>
            <option value="Conference Talk">Conference Talk</option>
            <option value="Sports Game">Sports Game</option>
            <option value="Others">Others</option>
        </select>
    </div>
  )
}


const Message = (props) => (
  <div className="form-group">
    <label htmlFor="eventMessage">Message (optional): </label>
    <textarea className="form-control" name="eventMessage" id="eventMessage" placeholder="messages"></textarea>
  </div>
)



const FirstAndLast = (props) => {
  function validate(e){
    const value = e.target.value;
    const id = "#"+e.target.id;
    if(value === ""){
      $(id).addClass("error")
      $(id).attr("placeholder", "Please fill the form")
    } else{
      $(id).removeClass("error");
    }
  }
  //props.validate: function()
  //props.index: number
  //props.remove: function()
  return(
    <li className="row" style={{maxWidth: "700px", listStyleType: "none"}}>
       <FormGroup placeholder="first name"
              ariaLabel="first name"
              className="form-control" id={"guestFirstName"+props.index }
              style={{width: "45%", display: "inline-block"}}
              helpStyle={{display: "none"}}
              required={true}
              autoComplete="fname"
              id={"guestFirstName" + props.index}
              offFocus={ (e) => validate(e) }/>
        <FormGroup placeholder="last name"
              ariaLabel="last name"
              className="form-control" id={"guestLastName"+props.index }
              style={{width: "45%", display: "inline-block"}}
              helpStyle={{display: "none"}}
              required={true}
              autoComplete="lname"
              id={"guestLastName" + props.index}
              offFocus={ (e) => validate(e) }/>   
         <button className="btn btn-danger" 
                  style={{padding: "3px 6px", marginLeft: "10px", display: "inline-block"}}
                  onClick={ (e) => {
                    e.preventDefault();
                    props.remove(props.index)
                  }}
                  >X</button> 
    </li>
  )
}

const GuestList = (props) => {
  //props.guests: Array
  //props.validate: function()
  //props.addGuest: function()
  //props.remove: function()
  const guests = (props.guests.length <= 0) ? "" : 
                  props.guests.map((g,index) => (
                    <FirstAndLast key={index} index={index}
                                  validate={props.validate} 
                                  remove={props.remove}
                                  />
                  ))

  return(
    <div className="form-group">
      <label>Guest List</label>
      <div className="btn-group">
        <button className="btn btn-primary" 
                style={{padding: "5px 8px", marginLeft: "10px"}}
                onClick={ props.addGuest }
                >+</button>
      </div>
      <span id={"help-guestList"} className="help-block" style={{display: 'none', color:"red"}}>
        provide at least one guest
      </span>
      <ol id="guestListParent" style={{paddingTop: 10}}>
        {guests}
      </ol>
    </div>
  )

}


module.exports = {
  Message, EventType, GuestList
}