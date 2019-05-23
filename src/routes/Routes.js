import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Starsign from "../components/Starsign";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/starsign/:sign" component={Starsign} />
				{/* <Route component={NotFound} /> */}
			</Switch>
		);
	}
}

export default Routes;
