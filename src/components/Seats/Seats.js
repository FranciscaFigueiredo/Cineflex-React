import { useEffect, useState } from "react";
import styled from 'styled-components';
import { setList } from "../BuyTickets/BuyTickets";

import "./seats.css"

export default function Seats({tickets}) {
    const [seats, setSeats] = useState([]);
    console.log(tickets.seats);

    const [list, setList] = useState([]);
    
    useEffect(() => {
        setList([]);
        setSeats(tickets.seats);
    }, [])

    return (
        <>
            <div className="seats">
                 {tickets.seats.map((seat) => (<Seat key={seat.id} seat={seat.name} isAvailable={seat.isAvailable} click={true} list={list} setList={setList} /> ))}
            </div> 
            <SeatsFooter />
        </>
    );
}

function Seat({seat, isAvailable, click, list, setList}) {
    console.log(seat);
    console.log(list);

    console.log(isAvailable);
    
    const [selected, setSelected] = useState(true);

    if (isAvailable === false) {
        click = false;
    }
    
    useEffect(() => {
        setSelected(isAvailable);
    }, [])

    function selectSeats(seat) {
        console.log(seat);
        if (!(list.find((seats) => (seats === seat))) || list === []) {
            setList([...list, seat]);
            setSelected("selected");
        } else {
            console.log("ELSE")
            setList(list.filter((seats) => (seats !== seat)));
            setSelected(true)
            console.log(list);
        }
        console.log(seat);
    }
    
    return (
        <SeatStyle isAvailable={selected} name={seat} onClick={() => selectSeats(seat)} disabled={click === false ? true : ""} >
            {seat}
        </SeatStyle>
    )
}

function SeatsFooter() {
    const subtitles = [
        {
            name: "Selecionado", 
            isAvailable: "selected"
        }, 
        {
            name: "Disponível", 
            isAvailable: true
        }, 
        {
            name: "Indisponível", 
            isAvailable: false
        }
    ]
    return (
        <>
            <div className="subtitles">
                {subtitles.map((subtitle, index) => (<Seat key={index} seat={""} isAvailable={subtitle.isAvailable} click={false} />))}
            </div>
            <div className="subtitles">
                {subtitles.map((subtitle) => (<h5>{subtitle.name}</h5>))}
            </div>
        </>
    )
}

const SeatStyle = styled.button`
    width: ${(props) => (props.name === "") ? "10vw" : "5vw"};
    height: ${(props) => (props.name === "") ? "10vw" : "7vw"};
    flex: ${(props) => (props.name === "") ? "" : "1 0 8%"};

    margin: ${(props) => (props.name === "") ? "10px 0 0" : "3px"};

    background-color: ${(props) => props.isAvailable === true ? "#c3cfd9" : props.isAvailable === "selected" ? "#8dd7cf" : "#fbe192"};
    border-radius: 50%;
    border: none;
`