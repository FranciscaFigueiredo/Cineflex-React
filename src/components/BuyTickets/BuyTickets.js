import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../Sessions/sessions.css"
import Footer from "../shared/Footer/Footer";

export default function BuyTickets() {
    const params = useParams();
    const id = params.idSession;

    console.log(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
        promise.then((data) => setSeats(data.data))
        .catch('error')
    }, [])
    console.log(seats)
    return (
        <div className="home">
            <h2>Selecione o(s) assento(s)</h2>

            {/* <Session session={sessions} /> */}
            <Footer title={seats.movie.title} posterURL={seats.movie.posterURL} />
        </div>
    )
}