import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = () => {
	const {
		loginWithRedirect,
		isAuthenticated,
		logout,
		user,
		isLoading,
	} = useAuth0();


	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isAuthenticated)
		return (
			<Wrapper>
				<h2>{user.name}</h2>
				<img src={user.picture} alt="user profile" />
				<button onClick={logout}>Logout</button>
				<hr />
			</Wrapper>
		);
	else {
		return (
			<Wrapper>
				<button onClick={loginWithRedirect}>Log in</button>
			</Wrapper>
		);
	}
};

const Wrapper = styled.section`
	button {
		position: fixed;
		padding: 10px;
	}
`;

export default Login;
