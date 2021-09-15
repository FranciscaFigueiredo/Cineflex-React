import styled from "styled-components";
import "./footer.css"

export default function Footer({ title, posterURL, session }) {
    let time
    time = ""
    console.log(session)
    if(session) {
        time = <h1>{session}</h1>
    }
    return (
        <footer>
            <div className="movie">
                <img src={posterURL} alt=""/>
            </div>
            <Text time={time}>
                <h1>{title}</h1>
                {time}
            </Text>
            
        </footer>
    );
}

const Text = styled.div`
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    h1 {
        font-size: ${(props) => props.time ? "22px" : "26px"};
    }
`