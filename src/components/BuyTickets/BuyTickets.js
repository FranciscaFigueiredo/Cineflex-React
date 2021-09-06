import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seats from "../Seats/Seats";

import "../Sessions/sessions.css"
import Button from "../shared/Button/Button";
import Footer from "../shared/Footer/Footer";
import UserData from "./UserData";

export default function BuyTickets() {
    const params = useParams();
    const id = params.idSession;

    console.log(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
        promise.then((data) => setTickets(data.data))
        .catch('error')
    }, [])
    // console.log(tickets.movie.title)
    return (
        <div className="home">
            <h2>Selecione o(s) assento(s)</h2>
            <Seats tickets={tickets} /> 
            <UserData />
            <Button text="Reservar assento(s)" />
            {/* <Footer title={tickets.movie.title} posterURL={tickets.movie.posterURL} /> */}
        </div>
    )
}