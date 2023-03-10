import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: calc(20em + 8px);
    flex: 1;
    background-color: #44475a;

    overflow-y: scroll;
    color: #ffffff;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 8px;
        background: #44475a;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #282a36;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #282a36;
    }
    &::-webkit-scrollbar-thumb:active {
        background: #282a36;
    }
`;

const ItemContainer = styled.button`
    all: unset;
    cursor: pointer;
    color: #d0d3e3;

    padding: 20px 25px;
    margin: 5px;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        opacity: 0.5;
    }
`;

function Sidebar({ repos }) {
    const Navigate = useNavigate();

    return (
        <Container>
            {repos &&
                repos.map((repo) => (
                    <ItemContainer key={repo.id} onClick={() => Navigate(repo.name)}>
                        {repo.name}
                    </ItemContainer>
                ))}
        </Container>
    );
}

export default Sidebar;
