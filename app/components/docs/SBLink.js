import React from "../../../node_modules/react/react";

var SBLink = React.createClass({

	render() {
		return (
			<li>
				<a href="#">{this.props.ord}</a>
				<ul className="subnav">
				</ul>
			</li>
		)
	}
});

export default SBLink;