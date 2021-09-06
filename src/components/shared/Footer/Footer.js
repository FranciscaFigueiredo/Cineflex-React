import styled from "styled-components";
import "./footer.css"

export default function Footer({ title, posterURL, session }) {
    return (
        <footer>
            <div className="movie">
                <img src={posterURL} alt=""/>
            </div>
            <Text>
                <h1>{title}</h1>
                <h1>{session}</h1>
            </Text>
            
        </footer>
    );
}

const Text = styled.div`
    height: 100px;
`