import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CreateProject from "./CreateProject";
import { Link } from "react-router-dom";
import { useProjectsContext } from "../context/ProjectsContext";

export const Projects = () => {
	const {
		allProjects,
		allProjectsLoading,
		fetchProjects,
	} = useProjectsContext();

	useEffect(() => {
		fetchProjects();
	}, []);

	if (allProjectsLoading) {
		return (
			<div>
				<h3>loading...</h3>
			</div>
		);
	} else {
		return (
			<Wrapper>
				<CreateProject />
				<ul>
					{allProjects.map((project) => {
						return (
							<Link
								to={`/projects/${project._id}`}
								key={project._id}
							>
								{project.name}
								<br></br>
							</Link>
						);
					})}
				</ul>
			</Wrapper>
		);
	}
};

const Wrapper = styled.div``;

export default Projects;
