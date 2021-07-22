import React, { useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";
import { useProjectsContext } from "../context/ProjectsContext";

const CreateProject = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const {
		createNewProject,
		newProjectError,
		newProjectLoading,
	} = useProjectsContext();

	const newProject = async (e) => {
		e.preventDefault();
		createNewProject({name,description});
		setName("");
		setDescription("");
	};
	return (
		<Wrapper>
			<form>
				<label htmlFor="project-name">Project Name:</label>
				<input
					type="text"
					name="project-name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<label htmlFor="description">Project Description:</label>
				<input
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button type="submit" onClick={newProject}>
					Submit
				</button>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

export default CreateProject;
