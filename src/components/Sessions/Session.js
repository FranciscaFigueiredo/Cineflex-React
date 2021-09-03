export default function Session(props) {
    console.log(props)
    const days = props.session.days;
    console.log(days)

    return (
        <div className="sessions">
            {props.session.days.map((day) => (<Days day={day} />))}
        </div>
    );
}

function Days(day) {
    console.log(day.day)
    return (
        <div className="session" >
            <h3>{day.day.weekday} - {day.day.date} </h3>
            {day.day.showtimes.map((showtime) => (<Button showtime={showtime} />))}
        </div>
    )
}

function Button(showtime) {
    console.log(showtime.showtime)
    return (
        <button>{showtime.showtime.name}</button>
    )
}