import React, {useState} from "react";
import styled from "styled-components";

const CreateProject = () => {
    const [name, setName] = useState("");
    return <Wrapper>
        <form>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </form>
    </Wrapper>
}

const Wrapper = styled.div``;

export default CreateProject;