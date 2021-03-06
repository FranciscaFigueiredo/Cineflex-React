import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Session from "./Session";

import "./sessions.css"

export default function Sessions() {
    const params = useParams();
    const id = params.idMovie;

    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`)
        promise.then((data) => setSessions(data.data))
        .catch('error')
    }, [])
    
    return (
        <div className="home">
            <h2>Selecione o horário</h2>
            {sessions ?
                <Session session={sessions} />
                : ""
            }
            {sessions ?
                <Footer movie={id} title={sessions.title} posterURL={sessions.posterURL} />
                : ""
            }
        </div>
    );
}