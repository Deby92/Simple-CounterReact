import React from "react";
import PropTypes from "prop-types";

export const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="fa fa-clock"></i>
			</div>
			<div className="four">
				{props.fourthNumber}
			</div>
			<div className="three">
				{props.thirdNumber}
			</div>
			<div  className="two">
				{props.secondNumber}
			</div>
			<div className="one">
				{props.firstNumber}
			</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
