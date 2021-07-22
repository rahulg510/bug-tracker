import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
	const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
	return (
		<Wrapper>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					{isAuthenticated ? (
						<div>
							<li>
								<Link to="/dashboard">Dashboard</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/bugs">Bugs</Link>
							</li>
							<li>
								<button onClick={logout}>Logout</button>
							</li>
						</div>
					) : (
						<li>
							<button onClick={loginWithRedirect}>
								Login/Sign up
							</button>
						</li>
					)}
				</ul>
			</nav>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

export default Navbar;
