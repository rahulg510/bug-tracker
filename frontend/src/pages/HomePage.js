import React, {useState} from "react";
import styled from "styled-components";

const HomePage = () => {
    const [name, setName] = useState("");
    return <Wrapper>
        <h2>Home Page</h2>
    </Wrapper>
}

const Wrapper = styled.div``;

export default HomePage;