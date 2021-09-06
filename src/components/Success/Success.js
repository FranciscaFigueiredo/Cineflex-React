import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../shared/Button/Button";
import Footer from "../shared/Footer/Footer";

export default function Success() {
    function acao() {
        console.log("entrou")
    }
    return (
        <div className="home">
            <Title>Pedido feito com sucesso!</Title>
            <Filme>
                <H2><strong>Filme e sessão</strong></H2>
                <H2>Filme escolhido</H2>
                <H2>Data escolhida</H2>
            </Filme>
            <Filme>
                <H2><strong>Ingressos   </strong></H2>
                <H2>Assento escolhido</H2>
                <H2>Assento escolhido</H2>
            </Filme>
            <Filme>
                <H2><strong>Comprador</strong></H2>
                <H2>Nome pessoa</H2>
                <H2>CPF pessoa</H2>
            </Filme>

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