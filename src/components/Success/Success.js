import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../shared/Button/Button";
import Footer from "../shared/Footer/Footer";

export default function Success({ dados }) {

    const { ids, tickets } = dados;

    const { movie , day, name } = tickets;
    
    console.log(dados)
    function acao() {
        console.log("entrou")
    }
    return (
        <div className="home">
            <Title>Pedido feito com sucesso!</Title>
            <Filme>
                <H2><strong>Filme e sessão</strong></H2>
                <H2>{movie.title}</H2>
                <H2>{day.weekday} {name} </H2>
            </Filme>
            <Filme>
                <H2><strong>Ingressos   </strong></H2>
                {ids.map((seat) => <H2>Assento {seat}</H2> )}
            </Filme>
            <Filme>
                <H2><strong>Comprador</strong></H2>
                <H2>Nome: {dados.name}</H2>
                <H2>CPF: {dados.cpf}</H2>
            </Filme>
            <br/>
            <br/>

            <Link to="/" >
                <Button text="Voltar pra Home" acao={acao} />
            </Link>
        </div>
    );
}

const Filme = styled.div`
    margin-top: 35px;
`

const Title = styled.h2`
    color: #247A6B;
`

const H2 = styled.h2`
    color: #293845;
    text-align: left;
    line-height: 20px;

    strong {
        line-height: 25px;
    }
`