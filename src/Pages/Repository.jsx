import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Repository({ user }) {
    const { name } = useParams();
    const [repo, setRepo] = useState({});

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${user}/${name}`).then((res) => {
            setRepo(res.data);
        });
    }, [name, user]);

    return <div>{repo && repo.name}</div>;
}

export default Repository;
