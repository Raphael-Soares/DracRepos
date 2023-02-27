import React from "react";

import styled from "styled-components";

const Container = styled.header`
    width: 100%;

    position: relative;
    background-color: #282a36;
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: center;

    box-shadow: -2px -11px 20px 0px rgb(0 0 0 / 75%);
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

const Drac = styled(Title)`
    color: #f8f8f2;
`;

const Repos = styled(Title)`
    color: #6272a4;
`;

function Header() {
    return (
        <Container>
            <Drac>Drac</Drac>
            <Repos>Repos</Repos>
        </Container>
    );
}

export default Header;
