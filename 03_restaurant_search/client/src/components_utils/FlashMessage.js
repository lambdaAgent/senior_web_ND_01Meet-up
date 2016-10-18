import React from "react";
const $ = require("jquery");


var FlashDB = {
	_messages: "",
	_react: undefined,
	hasAlert(){
		return (this._messages === "" || !this._messages) ? undefined : true;
	},
	getAlert(){
		return this._messages;
	},
	addAlert(alert){
		if(!alert) return undefined;
		this._messages = alert;
		this._react.setState({show: true, flashMessage: this._messages})
	},
	initReact(React){
		this._react = React
	}
}


class FlashMessage extends React.Component {
	constructor(props){
		super(props);
		this.closeClick = this.closeClick.bind(this)
		FlashDB.initReact(this)
		this.state = {show: false, flashMessage: ""}
	}
	keyPress(e){
		e.preventDefault();
		if( (e.shiftKey && e.keyCode === 9) || e.keyCode === 9){ 
		  //shift was down when tab was pressed
		  return undefined;
		} else {
			this.props.closeClick();
		}
	}
	componentDidMount() {
	 	console.log("flash message mounted")     
	}
	componentWillUpdate(nextProps, nextState) {
	 if(nextState.show === true){
	 		document.getElementById("flashMessage").focus();
		 	var overlay = $("<div></div>");
		 	overlay.attr("id","flashOverlay");
		 	overlay.addClass("overlay_VD");
		 	overlay.html('&nbsp;')
		 	overlay.click(() => {
		 		//hide overlay
		 		//trigger click on alertClose
		 		$("#flashOverlay").remove();
		 		$("#flashButton").trigger("click");
		 	});
		 	overlay.appendTo("body")
	 	}         
	}
	closeClick(e){
		e.preventDefault();
		this.setState({show:false, flashMessage: ""})
	}
	render(){
		const props = this.props;				
		const show = {display: (this.state.show) ? "inherit" : "none"}
		return (
			<div className="alert alert-dismissible" id="flashMessage" role="alert"
				 onClick={this.closeClick} 
				 style={Object.assign({}, defaultStyle, show) }
			     >
			    
	   		  	<span style={{color: "white"}} 
	   		  	      aria-label="alert-messages"
	   		  	      onClick={this.closeClick}
	   		  	      >
	   		  	      {this.state.flashMessage} 
	   		  	 </span>
			  	<button tabIndex="0" aria-label="Close"
			  		id="flashButton"
			  		autoFocus
			  		onKeyDown={this.keyPress.bind(this)}
			  	    onClick={this.closeClick}
			  	    onBlur={this.closeClick}
			  		style={{background:"none", border:"none", color:"white", fontSize:20}}
			  	    >
			  		<span aria-hidden="true">&times;</span>
			  	</button>
			</div>
		)
	}
};
FlashMessage.props = {
	alert: React.PropTypes.string.isRequired,
	show: React.PropTypes.bool
}

const defaultStyle = {backgroundColor: "black", display: "none",
				         textAlign:"center", position:"fixed",left:0, bottom:0, width:"100%", margin:"0 auto"}

module.exports = {FlashMessage, FlashDB};