import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Repository from "./Pages/Repository";

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
        <Router>
            <Container>
                <Header />

                <Row>
                    <Sidebar repos={repos.map((repo) => ({ id: repo.id, name: repo.name }))} />
                    <div>
                        <Routes>
                            <Route path="/:name" element={<Repository user={"Raphael-Soares"} />} />
                            <Route path="/" element={<div>Home</div>}></Route>
                        </Routes>
                    </div>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
