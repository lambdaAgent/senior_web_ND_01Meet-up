import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Content';
    }
    render() {
        return(
        	<div className="body container">
        		Hello
        	</div>
        )
    }
}

export default Content;
