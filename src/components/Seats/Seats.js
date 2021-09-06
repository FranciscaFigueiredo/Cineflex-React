import { useEffect, useState } from "react";
import styled from 'styled-components';

import "./seats.css"

export default function Seats({tickets}) {
    const [seats, setSeats] = useState([]);
    console.log(tickets.seats);

    useEffect(() => {
        
    }, [])

    return (
        <>
            <div className="seats">
                 {tickets.seats.map((seat) => (<Seat key={seat.id} seat={seat.name} isAvailable={seat.isAvailable} />)) } 
            </div> 
            <SeatsFooter />
        </>
    );
}

function Seat({seat, isAvailable}) {
    console.log(seat);
    console.log(isAvailable);

    let type = "seat"
    // const [type, setType] = useState("seat");

    // if(isAvailable === true) {
    //     // setType("seat")
    //     type = "seat"
    // } else if(isAvailable === "selected") {
    //     // setType("seat selected")
    //     type = "seat selected"
    // } else {
    //     // setType("seat disable")
    //     type = "seat disable"
    // }
    return (
        <SeatStyle isAvailable={isAvailable} name={seat} >
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
                {subtitles.map((subtitle, index) => (<Seat key={index} seat={""} isAvailable={subtitle.isAvailable} />))}
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