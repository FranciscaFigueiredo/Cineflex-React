import "./footer.css"

export default function Footer({ title, posterURL }) {
    return (
        <footer>
            <div className="movie">
                <img src={posterURL} alt=""/>
            </div>
            <div>
                <h1>{title}</h1>
                {/* <h2></h2> */}
            </div>
            
        </footer>
    );
}