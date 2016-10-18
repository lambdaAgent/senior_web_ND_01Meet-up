import React  from "react";
import $ from "jquery"

class StarRating extends React.Component {
	constructor(props){
		super(props);
		this.state={redStar: 0, selected: 0}
	}
	click(value){
		this.setState({selected: value, redStar: value});
	}
	hover(value){
		if(this.state.selected > 0){
			//disable hover
			return undefined;
		}
		this.setState({redStar: value})
	}
	blur(){
		if(this.state.selected <= 0)
			this.setState({redStar:0})
	}
	render(){
		const stars = [1,2,3,4,5].map(n => {
			return <OneStar key={n} value={n} 
			                className={n <= this.state.redStar ? "red" : ""}
			                mouseLeave={this.blur.bind(this)}
			                hover={this.hover.bind(this)}
			                click={this.click.bind(this)}
			                React={this}
			       />
		})
		return(
			<div className="star-rating" aria-label="selectRating">
			  <div className="star-rating__wrap" >
			    {stars}
		    	<input id="rating_value" 
		    	       value={this.state.selected} 
		    	       style={{visibility: "hidden"}}
		    	       aria-label="ratings"/>
		    	</div>
			</div>
		)
	}
}

const OneStar = (props) => {
	return(
  		<span className={"starRating_sys glyphicon glyphicon-star " + props.className }
		      tabIndex={props.value === 1 ? "0": "-1"}
		      id={"starSelected" + props.value}
		      onMouseLeave={props.mouseLeave}
		      onBlur={props.mouseLeave}
		      onClick={() => props.click(props.value)}
		      onKeyDown={(e) => {
		      	if(e.keyCode === 13 || e.keyCode === 32) {
		      		props.click(props.value);
			      	//trigger off focus and change tabIndex = -1
			      	$("[id^='starSelected']").attr("tabindex", -1);
			    }
			    var rating_value = props.React.state.redStar;
			    if(e.keyCode === 39 && rating_value < 5){
			    	props.React.setState({redStar: rating_value + 1})
			    } else if(e.keyCode === 37 && rating_value > 1){
			        props.React.setState({redStar: rating_value - 1})			    }
 		      }}
		      onMouseOver={() => props.hover(props.value)}
		      onFocus={() => props.hover(props.value)}
		      aria-label={props.value + " out of 5 stars"}></span>
	)
}



module.exports = StarRating;