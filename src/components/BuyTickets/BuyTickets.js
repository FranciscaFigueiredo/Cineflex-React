import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Seats from "../Seats/Seats";

import "../Sessions/sessions.css"
import Button from "../shared/Button/Button";
import Footer from "../shared/Footer/Footer";

export default function BuyTickets({ dados, setDados }) {
    const params = useParams();
    const history = useHistory();

    const id = params.idSession;
    const [list, setList] = useState([]);
    const [ids, setIds] = useState([]);
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");

    let text = "";
    
    const [tickets, setTickets] = useState([]);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
        promise.then((data) => setTickets(data.data))
        .catch('error')
    }, [])

    if (tickets.day) {
        text = `${tickets.day.weekday} - ${tickets.name}`
    }

    function fazerCompra() {
        if(name && cpf && ids.length > 0) {
            setDados({
                ids,
                name,
                cpf,
                tickets
            })
        
            const prom = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", {
                ids,
                name,
                cpf,
                tickets
            })
            prom.then(history.push("/sucesso")).catch((err) => console.error)
        }
    }
       
    return (
        <div className="home">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                {tickets.seats ? 
                    <Seats key={tickets.seats.id} tickets={tickets} ids={ids} setIds={setIds} seat={tickets.seats.name} isAvailable={tickets.seats.isAvailable} ids={ids} setIds={setIds} click={true} list={list} setList={setList} />
                    : ""
                }
            </div>

            <div className="data">
                <h3>Nome do comprador:</h3>
                <input type="text" placeholder="Digite seu nome..." required value={name} onChange={(event) => (setName(event.target.value))}></input>
                <h3>CPF do comprador:</h3>
                <input type="text" pattern = "[0-9]{11}" placeholder="Digite seu CPF..." required maxLength="14" value={cpf} onChange={(event) => (setCpf(event.target.value))} />
            </div>
            
            <Button text="Reservar assento(s)" acao={fazerCompra} />

            {tickets.movie ?
                <Footer title={tickets.movie.title} posterURL={tickets.movie.posterURL} session={text} />
                : ""
            }
        </div>
    )
}