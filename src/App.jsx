import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 90vh;
`;

function App() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users/Raphael-Soares/repos").then((res) => {
            setRepos(res.data);
        });
    }, []);

    return (
        <Container>
            <Header />

            <Row>
                <Sidebar repos={repos.map((repo) => ({ id: repo.id, name: repo.name }))} />
                <div></div>
            </Row>
        </Container>
    );
}

export default App;
