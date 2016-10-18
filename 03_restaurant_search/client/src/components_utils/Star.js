import React from "react"

const Star = (props) => {
	const number = Number(props.ratings).toFixed(1)
	return (
		<label className={"glyphicon glyphicon-star no-hover " + props.className }
		       aria-label="ratings"
		       style={props.style}
		       >
		       <span className="ratingNumber_VD">{number}</span>
		</label>
	)
}

Star.props = {
	ratings: React.PropTypes.string.isRequired
}

module.exports = Star