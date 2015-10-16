import React from "../../../node_modules/react/react";
import apiService from '../../services/apiService';
import Sidebar from './Sidebar';
import List from './List';

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

export default Docs;