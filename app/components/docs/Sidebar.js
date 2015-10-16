import React from "../../../node_modules/react/react";

var Sidebar = React.createClass({

	componentDidMount () {

		console.log(this.props)
	},
	render() {
		return (
			<nav className="vertical page-nav scrollbar" id="sidebar">
				<ul>
					{this.props.order.map(function(inc){
						return (
							<li>
								<a href="#">{inc}</a>
								<ul className="subnav">
								</ul>
							</li>
						)
					})}
				</ul>
			</nav>
		)
	}
});

export default Sidebar;