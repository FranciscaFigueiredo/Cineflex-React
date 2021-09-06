import { useEffect, useState } from "react";
import styled from 'styled-components';

import "./seats.css"

export default function Seats({tickets}) {
    const [seats, setSeats] = useState([]);
    console.log(tickets.seats);

    useEffect(() => {
        setSeats(tickets.seats)
    }, [])

    return (
        <>
            <div className="seats">
                 {tickets.seats.map((seat) => (<Seat key={seat.id} seat={seat.name} isAvailable={seat.isAvailable} click={true} />)) } 
            </div> 
            <SeatsFooter />
        </>
    );
}

function Seat({seat, isAvailable},click) {
    console.log(seat);
    console.log(isAvailable);
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState(true);
    console.log(selected);
    
    useEffect(() => {
        setSelected(isAvailable)
    }, [])

    let type = "seat"
    console.log(selected);
    console.log(list);
    
    function selectSeats() {
        console.log(seat);
        if (!(list.find((prod) => (prod === seat))) || list === []){
        // if (list.find((seats) => (seats.name === seat))){
            console.log(list.find((prod) => console.log(prod)))
            setList([...list, seat]);
            setSelected("selected");
        } else {
            console.log("else")
            setList(list.filter((seats) => (seats !== seat)));
            setSelected(true)
        }
        
        console.log(seat);
    }

    return (
        <SeatStyle isAvailable={selected} name={seat} onClick={selectSeats} disabled={selected === false ? true : ""} >
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