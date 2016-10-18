
import React from "react";
import {browserHistory, Link} from "react-router";

import Star from "./Star";

const RestaurantList = (props) => {
	const restaurant = props.restaurant;
	return (
		<li className="row"
            style={comment_mobile} 
            onClick={() => browserHistory.push("/restaurant/" + restaurant.id)}
            onKeyPress={(e) => {
                if(e.keyPress === 13) browserHistory.push("/restaurant/" + restaurant.id)
            }}
            >
        <Link to={"/restaurant/" + restaurant.id} style={{color: 'inherit'}}>
           <img src={restaurant.image} 
		   	    alt={restaurant.name}
                className="desktop"
		        style={Object.assign({}, imageMedia, {display: props.width > 720  ? "inline-block" : "none",})} />          
    		<article style={commentPanel} >
                <div> 
        			<h2 style={{marginBottom: "0px", marginTop:0}}
        				tabIndex="-1"
        			    > {restaurant.name}
        			</h2>
        			<span className="label" 
                          style={{fontSize:13, 
                            backgroundColor: "black"}} >{restaurant.category}</span>        		
                </div>
                <div style={{top:0 , right: 0, position: "absolute"}}>
                	<Star className="starRating_VD desktop"
			  	          ratings={restaurant.ratings} />
                </div>
            	{/* change this to open*/}
    			<div >
                    <p style={{marginBottom:0}}>open:</p>
                    <p style={{margin:0}}>weekday: {restaurant.weekday}</p>
                    <p style={{margin:0}}>weekend: {restaurant.weekend}</p>
                    <p style={{fontWeight: "bold", marginTop: 5}}> Address: {restaurant.address}</p>
                </div>
    		</article>
        </Link>
		<hr style={{border: "1px solid rgba(0,0,0,0.4)", width:"100%", padding:0}}/>
	</li>
	)
}

module.exports = RestaurantList

const comment_mobile = {width: "100%", listStyleType: "none", position: "relative", margin:"0 auto", width:"95%"}
const imageMedia = { borderRadius: "30px", float: "left", 
                     width:"20%",border:"1px solid rgba(0,0,0,0.3)"};
const commentPanel = { marginLeft:"10px", width: "77%", maxWidth: "80%", display: "inline-block", marginBottom: "-20px"};
