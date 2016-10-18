import React from 'react';
import { Validation } from "../helper/helper.js";
import SimpleLogin  from "../database/simpleClientAuth";
const $ = require("jquery");
import {FlashDB, FlashMessage} from "../components_utils/FlashMessage";

//Components
import { browserHistory } from "react-router";
import FormGroup from "../components_utils/FormGroup";
import Navbar from "../components_utils/Navbar";


class Login extends React.Component {
    componentWillUnmount() {
      SimpleLogin.clearFromAddReviewToSignup();     
    }
    validateEmpty(e){
      //trigger validation for required empty fields
      Validation.validateEmpty($, e);
    }

    validateRequired(e){
      //when submit button is pressed, try to validate all inputs
      e.preventDefault();
      const form = $('form')
      const submitButton = document.getElementById("btnSubmit")
      const email = document.getElementById("email")
      const password = document.getElementById("password")
      const inputsToBeValidated = ["firstname", "lastname", "email", "password"]
      
      //validating required inputs
      Validation.validateRequired($, e, inputsToBeValidated, 'registration')
      
      //each of the fields below has validation's function when offFocus is triggered
      email.focus();  
      password.focus(); //offFocus from email, to trigger email's validation
      submitButton.focus(); //offFocus from password, to trigger password's validation

      // if form is valid, submit 
      if(form[0].checkValidity()){
        const loginUser = getValueOf(["firstname", "lastname", "email"])
        if(!loginUser) {
          return FlashDB.addAlert("user cannot be found")
        }
        SimpleLogin.set(loginUser);
        return browserHistory.goBack();
      }
    }

    validatePassword(e){
      const notEmpty = Validation.validateEmpty($, e);
      if(!notEmpty){
        return;
      }
      // var regex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

      var password = e.target.value;
      var errorMessage = ""
      if(password.length <= 8){
        errorMessage = "Password must be at least 8 Character"
        $("#help-password").html(errorMessage)
        $("#password").addClass("error");
      }

      if(/(?=.*[A-Z])/.test(password)  === false){
        errorMessage = "At least one Capital letter";
        $("#help-password").html(errorMessage)
        $("#password").addClass("error");
      }  
      
    }


    validateEmail(e){
      const notEmpty = Validation.validateEmpty($, e);
      if(!notEmpty){ //if empty
        return;
      }

      const re =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if( re.test(e.target.value) === false ){
        const errorMessage = "not a valid email";
        $("#help-email").html(errorMessage)
        $("#email").addClass("error");
      }
    }



    render() {
      console.log("browserHistory", browserHistory)
        const query = window.location.href.split("?")[1];
        return(
            <div>
                <Navbar showBackButton={SimpleLogin.showBackButton()}/>
                <div className="container login">
                	<form id="loginForm" name="registration" method="POST" action="/" 
                        style={{maxWidth: "400px", margin: "0 auto"}}>
                  <div className="">
                		    <FormGroup label="firstname"
                                   required={true} 
                                   autocomplete="fname"
                                   autofocus={true}
                                   offFocus={this.validateEmpty.bind(this)}/>
                        <FormGroup label="lastname"
                                   required={true} 
                                   autocomplete="lname"
                                   offFocus={this.validateEmpty.bind(this)}/>                                   
                        <FormGroup label="email" type="email"
                                   autocomplete="email"
                                   offFocus={this.validateEmail.bind(this)}
                                   required={true} />                                   
                        <FormGroup label="password" type="password"
                                   required={true}
                                   autocomplete="password"
                                   offFocus={this.validatePassword.bind(this)}
                                   pattern="^(?=.*[A-Z])[a-zA-Z0-9]{8,}$"/>
                        <br />
                        <h4>Biography: </h4>
                        <FormGroup label="Employer" />
                        <FormGroup label="Job Title" 
                                   id="jobTitle" 
                                   for="jobTitle"
                                   autocomplete="organization-title"/>
                        <FormGroup label="Birthday" 
                                   type="date"
                                   autocomplete="bday" />
                          
                        <br />
                        {/* Submit Button */}
                        <div className="form-actions">               
                    		  <button id="btnSubmit" className="btn btn-primary btn-large" 
                                 onClick={this.validateRequired.bind(this)}>Signup</button>
                        </div>
                  </div>
                	</form>
                </div>

                <FlashMessage />
            </div>
        );
    }
}



export default Login;


function getValueOf(arr){
  var result = {};
  arr.map(field => {
     var value = document.getElementById(field).value
     if (!value) return result = undefined;
     if (field === "firstname"){
        result["first_name"] = value
     } else if(field === "lastname"){
        result["last_name"] = value
     } else {
        result[field] = value;
    }
  });
  return  Object.keys(result).length > 0 ? result : undefined;
}