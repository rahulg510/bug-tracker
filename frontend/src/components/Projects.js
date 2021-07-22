import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CreateProject from "./CreateProject";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";
import {Link} from "react-router-dom";
import {useProjectsContext} from "../context/ProjectsContext";

export const Projects = () => {
	const {currentProject, allProjects} = useProjectsContext();
	
	return (
		<Wrapper>
			<CreateProject />
			<ul>
				{allProjects.map((project) => {
					return <Link to={`/projects/${project._id}`} key={project._id}>{project.name}<br></br></Link>
				})}
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default Projects;
