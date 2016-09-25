import React from 'react';
import FormGroup from "./FormGroup";
import Navbar from "./Navbar";
import { Validation } from "../helper/helper.js";
import { browserHistory } from "react-router";
const $ = require("jquery");

class Login extends React.Component {
  
    validateRequired(e){
      e.preventDefault();
      const form = $('form')
      const submitButton = document.getElementById("btnSubmit")
      const email = document.getElementById("email")
      const password = document.getElementById("password")
      
      Validation.validateRequired($, e, ["firstname", "lastname", "email", "password"], 'registration')
      email.focus()
      password.focus()
      submitButton.focus()


      // if form is valid, submit 
      if(form[0].checkValidity()){
        //return document.getElementById("loginForm").submit();
        return browserHistory.push("/")
      }
    }
    validateEmpty(e){
      Validation.validateEmpty($, e);
    }

    validatePassword(e){
      var notEmpty = Validation.validateEmpty($, e);
      if(!notEmpty){
        return;
      }
      // var regex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

      var password = e.target.value;
      if(password.length <= 8){
        var errorMessage = "Password must be at least 8 Character"
        $("#help-password").html(errorMessage)
        $("#password").addClass("error");
      }

      if(/(?=.*[A-Z])/.test(password)  == false){
        var errorMessage = "At least one Capital letter";
        $("#help-password").html(errorMessage)
        $("#password").addClass("error");
      }  
      
    }

    validateEmail(e){
      var notEmpty = Validation.validateEmpty($, e);
      if(!notEmpty){ //if empty
        return;
      }

      var re =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if( re.test(e.target.value) == false ){
        var errorMessage = "not a valid email";
        $("#help-email").html(errorMessage)
        $("#email").addClass("error");
      }
    }



    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
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
                    <div className="form-actions">               
                		  <button id="btnSubmit" className="btn btn-primary btn-large" 
                             onClick={this.validateRequired.bind(this)}>Signup</button>
                    </div>
                  </div>
                	</form>
                </div>
            </div>
        );
    }
}

export default Login;
