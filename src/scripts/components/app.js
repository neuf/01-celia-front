/*******
* REACT IMPORTS
******/
import React, { Component } from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from '../utils/AnimatedSwitch';


/*******
* CONFIG IMPORTS
******/
import routes from "../config/routes";
import api from "../config/api";
import store from '../config/store';

/*******
* STORE IMPORTS
******/
import { getProjectsSuccess } from '../actions/projectActions';
import { connect } from 'react-redux';

/*******
* COMPONENTS IMPORTS
******/
import Header from "../components/01_layouts/Header"


/*******
* COMPONENT
******/
class App extends Component {

	/**
	 * @constructor
	 */
	constructor (props) {
		super(props);
		this.state = {
			datasAreFetched: false
		};
	}


	/**
	 * @method
	 * @name componentDidMount
	 */
	componentDidMount () {

	// API CALL
	api.getProjects()
		.then((response) => {
			/* Dispatch to store */
			store.dispatch(getProjectsSuccess(response));
			/* Set to disable change loading state */
			this.setState({ datasAreFetched: true })
			console.log(response);
		})
	}


	renderRoutes () {
		return routes.map((r, i) => {
			return <Route exact={r.exact} path={r.path} component={r.component} key={i}/>
		});
	}	


	renderView () {
		if (!this.state.datasAreFetched) {
			return (
				<p>Please wait we load datas</p>
			)
		} else {
			const renderRoutes = this.renderRoutes();			
			return (
				<div>
					<Header></Header>
					<Route
						render={({ location }) => (
							<TransitionGroup component="main">
								<AnimatedSwitch key={location.key} location={location}>
									{renderRoutes}
								</AnimatedSwitch>
							</TransitionGroup>
						)}
					/>
				</div>
			)
		}
	}


	/**
	 * @method
	 * @name render
	 */
	render() {
		return this.renderView();
	}
}


export default App;
