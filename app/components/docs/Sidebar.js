import React from "../../../node_modules/react/react";
import SBLink from './SBLink';

var Sidebar = React.createClass({

	componentDidMount () {

		console.log(this.props)
	},
	render() {
		return (
			<nav className="vertical page-nav scrollbar" id="sidebar">
				<ul>
					{this.props.order.map(function(ord){
						return <SBLink ord={ord} includes={this.props.includes}/>
					})}
				</ul>
			</nav>
		)
	}
});

export default Sidebar;