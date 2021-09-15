import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Session({session}) {
    const [days, setDays] = useState([]);
    console.log(session.id)

    useEffect(() => {
        setDays(session.days);
        console.log(days)
    }, [])
    console.log(session.id)
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
    console.log(day)
    return (
        <div className="session" >
            <h3>{day.weekday} - {day.date} </h3>
            {day.showtimes.map((showtime) => (<Button id={day.id} showtime={showtime} movie={movie} />))}
        </div>
    )
}

function Button({id, showtime, movie}) {
    console.log(movie)
    return (
        <Link to={`/assentos/${movie}`} >
            <button>{showtime.name}</button>
        </Link>
    )
}