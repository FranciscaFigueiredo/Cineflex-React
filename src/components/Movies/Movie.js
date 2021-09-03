import { Link } from "react-router-dom";

export default function Movie({ id, title, posterURL, overview, releaseDate }) {
    return (
        <Link to={`/sessoes/${id}`} className="movie">
            <img src={posterURL} alt=""/>
        </Link> 
    );
}