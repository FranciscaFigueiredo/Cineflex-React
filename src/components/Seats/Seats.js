import { useEffect, useState } from "react";
import "./seats.css"

export default function Seats({tickets}) {
    const [seats, setSeats] = useState([]);
    console.log(tickets);

    useEffect(() => {
        // setDays(props.session.days);
    }, [])

    return (
        <div className="seats">
            {tickets.seats.map((seat) => (<Seat key={seat.id} seat={seat} />)) } 
        </div>
    );
}

function Seat({seat}) {
    // console.log(seat);
    if(seat.isAvailable === true)
    return (
        <button className="seat" >
            {seat.name}
        </button>
    )
}