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
} from "../utils/actions";

const ProjectsReducer = (state, action) => {
	if (action.type === GET_PROJECTS_BEGIN) {
		return {
			...state,
			allProjectsLoading: true,
			allProjectsError: false
		};
	}

	if (action.type === GET_PROJECTS_SUCCESS) {
		return {
			...state,
			allProjectsLoading: false,
			allProjectsError: false,
			allProjects: [...action.payload],
		};
	}

	if (action.type === GET_PROJECTS_ERROR) {
		return {
			...state,
			allProjectsLoading: false,
			allProjectsError: true,
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
    
    if (action.type === CREATE_NEW_PROJECT_BEGIN) {
		return {
			...state,
            updateProjectLoading: true,
            updateProjectError: false
		};
	}

	if (action.type === CREATE_NEW_PROJECT_SUCCESS) {
		return {
			...state,
			updateProjectLoading: false,
            updateProjectError: false
		};
	}

	if (action.type === CREATE_NEW_PROJECT_ERROR) {
		return {
			...state,
			updateProjectLoading: false,
            updateProjectError: true
		};
	}

	Error(`No matching ${action} action type`);
};

export default ProjectsReducer;
