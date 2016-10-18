//MOBILE ONLY

//library
import React from "react";
import SimpleLogin from "../database/simpleClientAuth";
import DB from "../database/simpleDB.js"
import $ from "jquery";
import Signup from "../components_utils/SignUpButton";

//components
import Navbar from "../components_utils/Navbar";
import {Link, browserHistory} from "react-router";
import {FlashMessage, FlashDB} from "../components_utils/FlashMessage";
import StarRating from "../components_utils/StarRating"
import FormGroup from "../components_utils/FormGroup"


class AddReviewForm extends React.Component {
	constructor(props){
		super(props);
		this.submit_if_login = this.submit_if_login.bind(this);
		this.signupWithBackHistory = this.signupWithBackHistory.bind(this)
	}
	
	submit_if_login(e){
		e.preventDefault();
		var commentText = $("#comment")[0].value;
		var ratings = $("#rating_value")[0].value;
		var username = $("#username")[0].value;
		if(commentText === ""){
			return $("#help-review").show()
		} else {
			$("#help-review").hide()
		}

		var user = {};
		user.id="1234"
		user.first_name = username.indexOf(" ") > 0 ? username.split(" ")[0] : username
		user.last_name = username.indexOf(" ") > 0 ? username.split(" ")[1] : ""
		user.coments = commentText;
		user.ratings = ratings;
		user.image="https://robohash.org/quicumquefacilis.jpg?size=50x50&set=set1"
		user.commentedAt = Date.parse(new Date());
		DB.addReview(this.props.params.restaurantId, user)
		browserHistory.goBack();
	}
	signupWithBackHistory(){
		SimpleLogin.fromAddReviewMobileToSignUp__ShowBackButton()
		browserHistory.push("/signup");
	} 
	render(){
		const props = this.props;
		return(
			<div>
		        <div className="container " style={{marginTop: 50,position:"relative"}}>
			        <Navbar showBackButton={true}
		    				RBSymbol={<Signup style={{fontSize: 15, marginTop:"3px", color:"white"}}/>}
		    				RBAria={"signup"}
		    		        RBAction={ this.signupWithBackHistory }/>
					<form onSubmit="" name="addReview">
						<p><label htmlFor="review">Ratings</label></p>
						<StarRating />
						<FormGroup label="username" style={{marginTop:0}} name="username" id="username" />
						<p><label htmlFor="comment">Comments </label></p>
						<textarea name="comment" id="comment"
						          style={{width: "100%"}} 
						          rows={8} aria-label="add comments"
						          autoFocus
						          placeholder="&nbsp; add comments"></textarea>
						<span tabIndex="0"
							style={submitButtonStyle}
							onClick={this.submit_if_login }>submit</span>
						<span id={"help-review"} className="help-block" 
				             style={{color:"red", display: "none"}}>please fill the review
				        </span>
						
						
					</form>
				</div>

				<FlashMessage />
			</div>
		)
	}
};

const submitButtonStyle = {
	right: 40, 
	bottom: 10, 
	cursor:"pointer", 
	color: "rgba(0,0,0,0.8)", 
	fontSize:20, fontWeight: "bold",
	float: "right",
};

module.exports = AddReviewForm;
