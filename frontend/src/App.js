import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Projects from "./components/Projects";
import SingleProject from "./components/SingleProject";
import HomePage from "./pages/HomePage";
import AuthWrapper from "./utils/AuthWrapper";
import PrivateRoute from "./pages/PrivateRoute";
import DashboardPage from "./pages/DashboardPage";

function App() {
	return (
		<AuthWrapper>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/dashboard">
						<DashboardPage />
					</Route>
					<PrivateRoute exact path="/projects">
						<Projects />
					</PrivateRoute>
					<PrivateRoute exact path="/projects/:id">
						<SingleProject />
					</PrivateRoute>
				</Switch>
			</Router>
		</AuthWrapper>
	);
}

export default App;
