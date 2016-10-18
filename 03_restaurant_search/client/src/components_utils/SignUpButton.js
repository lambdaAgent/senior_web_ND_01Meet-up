import React from "react"
import { Link,browserHistory } from 'react-router';
import SimpleLogin from "../database/simpleClientAuth";


        

const Signup = (props) => {
	const aria_signup = SimpleLogin.isAuthenticated() ? "link to logout" :"link to signup";
	const link_signup = SimpleLogin.isAuthenticated() ? "/" : "/signup"
	const signup_content = SimpleLogin.isAuthenticated() ? "logout" : "signup"
	const signup_click = SimpleLogin.isAuthenticated() ? () => { 
		SimpleLogin.clear(); browserHistory.push("/") 
	} : () => {}
	return(
		<Link to={link_signup} 
		      onClick={signup_click}
		      aria-label={aria_signup}
		      tabIndex={0}
		      style={props.style}
		      >
		      {signup_content}
		</Link>
	)
}

Signup.props = {
	link: React.PropTypes.string.isRequired,
	click: React.PropTypes.func.isRequired,
	aria: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired
}


module.exports = Signup;