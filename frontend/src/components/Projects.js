import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CreateProject from "./CreateProject";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";
import {Link} from "react-router-dom";

export const Projects = () => {
	const { getAccessTokenSilently } = useAuth0();
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetchProjects();
	},[]);

	const fetchProjects = async () => {
		const token = await getAccessTokenSilently();
		try {
			const res = await axios.get(
				process.env.REACT_APP_BASE_URL + "projects",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setProjects(res.data);
		} catch (err) {
			return <ErrorPage />;
		}
	};
	return (
		<Wrapper>
			<CreateProject />
			<ul>
				{projects.map((project) => {
					return <Link to={`/projects/${project._id}`} key={project._id}>{project.name}<br></br></Link>
				})}
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default Projects;
