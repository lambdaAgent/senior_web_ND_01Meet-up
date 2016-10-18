import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state={showDropdown: false}
    }
    toggleDropdown(e){
    	e.preventDefault();
    	this.setState({showDropdown: !this.showDropdown})
    }
    render() {
        return(
        	<div>
        		<icon className="glyphicon glyphicon-th-list" onClick={this.toggleDropdown.bind(this)}></icon>

				<dropdown aria-role="dropdown menu">
					<ul style={{width: "100%"}}>
						<Cell content={filter} />
					</ul>
				</dropdown>        		
        	</div>
        )
    }
}


const Cell=(props) => {

	return(
		<li style={{border: "1px solid black"}}>
			{props.content}		

		</li>
	)
}

export default DropDown;
