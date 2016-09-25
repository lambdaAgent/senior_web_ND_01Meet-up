import React from 'react';
import { Link } from 'react-router';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this)
        this.state = {width: 0, mobile: "none"}
    }
    updateDimensions(){
        var screenWidth = window.innerWidth;
        this.setState({width: screenWidth})
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));  
        this.updateDimensions.call(this)
    }
    render() {
    	        console.log("screen", this.state.width)

        return(
        	<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">Event Creator</Link>
						<div className="nav navbar-nav collapsed pull-right" 
						     style={{display: this.state.width <= 760 ? "inherit" : "none"
						     	,marginRight: 8}}>
							<li><Link to="/login">L</Link></li>
						</div>
					</div>
					<div className="navbar-collapes" 
					     style={{ display: this.state.width >= 760 ? "inherit" : "none" }}>
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/login">Login</Link></li>
						</ul>
					</div>
					{/* show mobile */}
				</div>
			</nav>
        )
    }
}

export default Navbar;
