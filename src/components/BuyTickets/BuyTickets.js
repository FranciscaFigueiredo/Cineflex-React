import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Seats from "../Seats/Seats";

import "../Sessions/sessions.css"
import Button from "../shared/Button/Button";
import Footer from "../shared/Footer/Footer";
import UserData from "./UserData";

export default function BuyTickets({ dados, setDados }) {
    const params = useParams();
    const history = useHistory();

    const id = params.idSession;
    const [list, setList] = useState([]);
    const [ids, setIds] = useState([]);
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");

    // let ids = []
    let text = "";
    let body = {}
    
    const [tickets, setTickets] = useState([]);
    console.log({
        ids,
        name,
        cpf
    })  
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
        promise.then((data) => setTickets(data.data))
        .catch('error')
    }, [])

    if (tickets.day) {
        console.log(tickets.day.weekday)
        text = `${tickets.day.weekday} - ${tickets.name}`
        console.log(tickets)
    }
    console.log(text)
    

    function fazerCompra() {
        if(name && cpf && ids.length > 0) {
            setDados({
                ids,
                name,
                cpf,
                tickets
            })
        }
        console.log({name, cpf, ids, dados})
        if(dados) {
            const prom = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", {
                ids,
                name,
                cpf,
                tickets
            })
            prom.then(history.push("/sucesso")).catch((err) => console.error)
        }
    }

    console.log(tickets.id)    
    return (
        <div className="home">
            <h2>Selecione o(s) assento(s)</h2>
            {/* {tickets ? 
                <Seats tickets={tickets} ids={ids} setIds={setIds} />
                : ""
            }    */}
            <div className="seats">
                {tickets.seats ? 
                    <Seats key={tickets.seats.id} tickets={tickets} ids={ids} setIds={setIds} seat={tickets.seats.name} isAvailable={tickets.seats.isAvailable} ids={ids} setIds={setIds} click={true} list={list} setList={setList} />
                    : ""
                }
            </div>

            {/* <SeatsFooter /> */}

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

// function Seat({seat, isAvailable, click, list, setList, ids, setIds}) {
//     console.log(seat);
//     console.log(list);

//     console.log(isAvailable);
    
//     const [selected, setSelected] = useState(true);

//     if (isAvailable === false) {
//         click = false;
//     }
    
//     useEffect(() => {
//         setSelected(isAvailable);
        
//     }, [])

//     function selectSeats(seat) {
//         console.log(seat);
//         if (!(ids.find((seats) => (seats === seat))) || ids === []) {
//             // setList([...list, seat]);
//             setIds([...ids, seat])
//             setSelected("selected");
//         } else {
//             console.log("ELSE")
//             setIds(ids.filter((seats) => (seats !== seat)));
//             setSelected(true)
//             // console.log(list);
//         }
//         console.log(seat);
//     }
    
//     return (
//         <SeatStyle isAvailable={selected} name={seat} onClick={() => selectSeats(seat)} disabled={click === false ? true : ""} >
//             {seat}
//         </SeatStyle>
//     )
// }

// function SeatsFooter() {
//     const subtitles = [
//         {
//             name: "Selecionado", 
//             isAvailable: "selected"
//         }, 
//         {
//             name: "Disponível", 
//             isAvailable: true
//         }, 
//         {
//             name: "Indisponível", 
//             isAvailable: false
//         }
//     ]
//     return (
//         <>
//             <div className="subtitles">
//                 {subtitles.map((subtitle, index) => (<Seat key={index} seat={""} isAvailable={subtitle.isAvailable} click={false} />))}
//             </div>
//             <div className="subtitles">
//                 {subtitles.map((subtitle) => (<h5>{subtitle.name}</h5>))}
//             </div>
//         </>
//     )
// }

// const SeatStyle = styled.button`
//     width: ${(props) => (props.name === "") ? "10vw" : "5vw"};
//     height: ${(props) => (props.name === "") ? "10vw" : "7vw"};
//     flex: ${(props) => (props.name === "") ? "" : "1 0 8%"};

//     margin: ${(props) => (props.name === "") ? "10px 0 0" : "3px"};

//     background-color: ${(props) => props.isAvailable === true ? "#c3cfd9" : props.isAvailable === "selected" ? "#8dd7cf" : "#fbe192"};
//     border-radius: 50%;
//     border: none;
// `