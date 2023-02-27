import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    background-color: #282a36;
`;

const Title = styled.h1`
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
`;

const Description = styled.p`
    color: #ffffff;
    font-size: 20px;
    margin: 20px;
`;

function Repository({ user }) {
    const { name } = useParams();
    const [repo, setRepo] = useState({});

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${user}/${name}`).then((res) => {
            setRepo(res.data);
        });
    }, [name, user]);

    return (
        repo && (
            <Container>
                <Title>{repo.full_name}</Title>
                <Description>{repo.description}</Description>
            </Container>
        )
    );
}

export default Repository;
