import React from 'react';
import FormGroup from "./FormGroup";
import Navbar from "./Navbar";
import { Validation } from "../helper/helper.js"
const $ = require("jquery");

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    validateRequired(e){
      e.preventDefault();
      Validation.validateRequired($, e, ["firstname", "lastname", "email", "password"], 'registration')
    }
    validateEmpty(e){
      Validation.validateEmpty($, e);
    }

    validatePassword(e){
      var notEmpty = this.validateEmpty.call(this, e);
      if(!notEmpty){
        return;
      }
      var regex = /^(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

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
      var notEmpty = this.validateEmpty.call(this, e);
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
                	<form name="registration" method="POST" action="/" 
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
                		  <input type="submit" className="btn btn-primary" 
                             onClick={this.validateRequired.bind(this)}/>
                    </div>
                  </div>
                	</form>
                </div>
            </div>
        );
    }
}

export default Login;
