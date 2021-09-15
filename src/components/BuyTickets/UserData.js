import { useEffect, useState } from "react"

export default function UserData({ dados, setDados }) {
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        setDados({
            name,
            cpf
        })
    })

    if(cpf.length === 3 || cpf.length === 7) {
        setCpf(cpf + ".");
    } else if (cpf.length === 11) {
        setCpf(cpf + "-");
    }
    return (
        <div className="data">
            <h3>Nome do comprador:</h3>
            <input type="text" placeholder="Digite seu nome..." required value={name} onChange={(event) => (setName(event.target.value))}></input>
            <h3>CPF do comprador:</h3>
            <input type="text" placeholder="Digite seu CPF..." required maxLength="14" value={cpf} onChange={(event) => (setCpf(event.target.value))} />
        </div>
    )
}
