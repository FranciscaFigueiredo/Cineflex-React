export default function Movie({ title, posterURL, overview, releaseDate }) {
    return (
        <div className="movie">
            <img src={posterURL} alt=""/>
        </div>
    );
}