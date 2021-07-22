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
} from "../actions";

const ProjectsReducer = (state, action) => {
	if (action.type === GET_PROJECTS_BEGIN) {
		return {
			...state,
			projectsLoading: true,
		};
	}

	if (action.type === GET_PROJECTS_SUCCESS) {
		return {
			...state,
			projectsLoading: false,
			allProjects: [...action.payload],
		};
	}

	if (action.type === GET_PROJECTS_ERROR) {
		return {
			...state,
			projectsLoading: false,
			projectsError: true,
		};
	}

	if (action.type === GET_CURRENT_PROJECT_BEGIN) {
		return {
			...state,
            currentProjectLoading: true,
            currentProjectError: false
		};
	}

	if (action.type === GET_CURRENT_PROJECT_SUCCESS) {
		return {
			...state,
			currentProjectLoading: false,
			currectProjectError: false,
			currentProject: action.payload,
		};
	}

	if (action.type === GET_CURRENT_PROJECT_ERROR) {
		return {
			...state,
			currentProjectLoading: false,
			currectProjectError: true,
		};
	}

	Error(`No matching ${action} action type`);
};

export default ProjectsReducer;
