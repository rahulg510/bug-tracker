import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
	const { isAuthenticated } = useAuth0();

	return (
		<Route
			{...rest}
			render={() => (isAuthenticated ? children : <Redirect to="/" />)}
		></Route>
	);
};

export default PrivateRoute;
