import React from "../node_modules/react/react";
import Header from "./components/header/header";
import apiService from './services/apiService';

var Docs = React.createClass({

	getInitialState (){
		return {
			data : {}
		}
	},
	
	componentDidMount () {

		this.api = new apiService();
		this.api.request('/api/includes.json')
			.end(function(err, response){

				console.log(response.body);

			    this.setState({
			    	data : response.body,
			    });

			}.bind(this));

	},
	render (){
		return (
			<div className="centre">
				<h1 className="text-centre">Derpy</h1>
			</div>
		)
	}

});


React.render(
 	<Docs/>,
    document.getElementById('docs-wrapper')
);
