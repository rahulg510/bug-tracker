import "./App.css";
import Login from "./components/Login";
import Projects from "./components/Projects";
import SingleProject from "./components/SingleProject";
import HomePage from "./pages/HomePage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/projects/:id">
					<SingleProject />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
