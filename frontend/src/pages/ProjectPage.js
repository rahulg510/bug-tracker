import React, {useEffect} from "react";
import {useProjectsContext} from "../context/ProjectsContext";

const ProjectPage = () => {
    const {fetchCurrentProject, currectProject} = useProjectsContext();

    useEffect(()=>{
        fetchCurrentProject()
    }, [])
	return <h2>ProjectPage</h2>;
};

export default ProjectPage;
