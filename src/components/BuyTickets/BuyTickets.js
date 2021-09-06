import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seats from "../Seats/Seats";

import "../Sessions/sessions.css"
import Button from "../shared/Button/Button";
import Footer from "../shared/Footer/Footer";
import UserData from "./UserData";

export default function BuyTickets() {
    const params = useParams();
    const id = params.idSession;
    const [list, setList] = useState([]);
    const {dados, setDados} = useState({
        ids: [36, 46],
        name: "fran",
        cpf: "995115161316161"
    });
    const [ids, setIds] = useState([]);

    // let ids = []
    let text = "";
    let name = "";
    let cpf = "";
    const [tickets, setTickets] = useState([]);

    console.log(dados)
    useEffect(() => {
        // setDados({ids,
        //     name,
        //     cpf
        // })
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
        promise.then((data) => (setTickets(data.data), (text = `${tickets.day} - ${tickets.name}`)))
        .catch('error')
    }, [])

    console.log(text)
    function fazerCompra() {
        const prom = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", {
            ids: [18, 19],
            name: "fran",
            cpf: "995115161316161"
        })
        prom.then("enviou")
    }

    console.log(tickets.movie)    
    return (
        <div className="home">
            <h2>Selecione o(s) assento(s)</h2>
            <Seats tickets={tickets} />   
            <UserData />
            <Link to="/sucesso" >
                <Button text="Reservar assento(s)" acao={fazerCompra} />
            </Link>
            <Footer title={tickets.movie.title} posterURL={tickets.movie.posterURL} session={text} />
        </div>
    )
}