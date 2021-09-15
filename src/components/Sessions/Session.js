import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Session({session}) {
    const [days, setDays] = useState([]);

    useEffect(() => {
        setDays(session.days);
    }, [])
    return (
        <div className="sessions">
            {days !== [] ?
                session.days.map((day) => (<Days day={day} movie={session.id} />))
                : ""
            }
             
        </div>
    );
}

function Days({day, movie}) {
    return (
        <div className="session" >
            <h3>{day.weekday} - {day.date} </h3>
            {day.showtimes.map((showtime) => (<Button id={day.id} showtime={showtime} movie={movie} />))}
        </div>
    )
}

function Button({id, showtime, movie}) {
    return (
        <Link to={`/assentos/${movie}`} >
            <button>{showtime.name}</button>
        </Link>
    )
}