import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Navbar';
    }
    render() {
        return(
        	<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a href="/" className="navbar-brand">Event Creator</a>
					</div>
					<div className="navbar-collapes">
						<ul className="nav navbar-nav">
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="">Sign up</a></li>
							<li><a href="/login">Login</a></li>
						</ul>
					</div>
				</div>
			</nav>
        )
    }
}

export default Navbar;
