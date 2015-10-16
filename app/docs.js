import React from "../node_modules/react/react";
import Header from "./components/header/header";
import apiService from './services/apiService';

var Docs = React.createClass({

	getInitialState (){
		return {
			includes : {},
			order : [],
			stylePages : []
		}
	},
	
	componentDidMount () {

		this.api = new apiService();
		this.api.request('/api/includes.json')
			.end(function(err, response){

				console.log(response.body);

			    this.setState({
			    	includes : response.body.includes,
					order : response.body.includesOrder,
					stylePages : response.body.stylepages
			    });

			}.bind(this));

	},
	render (){
		return (
			<div id="docs-wrapper">
				<Sidebar order={this.state.order} includes={this.state.includes}/>
				<List order={this.state.order} includes={this.state.includes}/>
			</div>
		)
	}

});

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

var List = React.createClass({

	render() {
		return (
			<div className="scrollbar" id="docs">
				List
			</div>
		)
	}
});


React.render(
 	<Docs/>,
    document.getElementById('documentation')
);
