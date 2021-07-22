import React, { useReducer, useContext, useEffect } from "react";
import ProjectsReducer from "../reducers/ProjectsReducer";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import {
	GET_PROJECTS_BEGIN,
	GET_PROJECTS_SUCCESS,
	GET_PROJECTS_ERROR,
	GET_CURRENT_PROJECT_BEGIN,
	GET_CURRENT_PROJECT_SUCCESS,
	GET_CURRENT_PROJECT_ERROR,
	CREATE_NEW_PROJECT_BEGIN,
	CREATE_NEW_PROJECT_SUCCESS,
	CREATE_NEW_PROJECT_ERROR,
	UPDATE_PROJECT_BEGIN,
	UPDATE_PROJECT_SUCCESS,
	UPDATE_PROJECT_ERROR,
} from "../utils/actions";

const ProjectsContext = React.createContext();

const initialState = {
	currentProject: {},
	allProjects: [],
	allProjectsLoading: false,
	allProjectsError: false,
	currentProjectLoading: false,
	currectProjectError: false,
	updateProjectLoading: false,
	updateProjectError: false,
};

export const ProjectsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProjectsReducer, initialState);
	const { getAccessTokenSilently } = useAuth0();

	const fetchProjects = async () => {
		dispatch({ type: GET_PROJECTS_BEGIN });
		try {
			const token = await getAccessTokenSilently();
			const res = await axios.get(
				process.env.REACT_APP_BASE_URL + "projects",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data });
		} catch (err) {
			console.error(err);
			dispatch({ type: GET_PROJECTS_ERROR, payload: err });
		}
	};

	const fetchCurrentProject = async (id) => {
		try {
			dispatch({ type: GET_CURRENT_PROJECT_BEGIN });
			const token = await getAccessTokenSilently();
			const res = await axios.get(
				process.env.REACT_APP_BASE_URL + "projects/" + id,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			dispatch({ type: GET_CURRENT_PROJECT_SUCCESS, payload: res.data });
		} catch (err) {
			console.error(err);
			dispatch({ type: GET_CURRENT_PROJECT_ERROR });
		}
	};

	const createNewProject = async (projectInfo) => {
		dispatch({ type: CREATE_NEW_PROJECT_BEGIN });
		try {
			const token = await getAccessTokenSilently();
			await axios.post(
				process.env.REACT_APP_BASE_URL + "projects",
				...projectInfo,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			dispatch({ type: CREATE_NEW_PROJECT_SUCCESS });
			fetchProjects();
		} catch (err) {
			console.error(err);
			dispatch({ type: CREATE_NEW_PROJECT_ERROR });
		}
	};

	return (
		<ProjectsContext.Provider
			value={{
				...state,
				fetchProjects,
				fetchCurrentProject,
				createNewProject,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
};

export const useProjectsContext = () => {
	return useContext(ProjectsContext);
};
