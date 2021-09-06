import { useState } from "react"

export default function UserData() {
    const [cpf, setCpf] = useState("")
    if(cpf.length === 3 || cpf.length === 7) {
        setCpf(cpf + ".");
    } else if (cpf.length === 11) {
        setCpf(cpf + "-");
    }
    // campoCPF.addEventListener('focusout', () => {
    //     $valorDoCPF = event.target.value;
    //     $campoCPF.value = $valorDoCPF.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
    //   })
    return (
        <div className="data">
            <h3>Nome do comprador:</h3>
            <input type="text" placeholder="Digite seu nome..." required></input>
            <h3>CPF do comprador:</h3>
            <input type="text" placeholder="Digite seu CPF..." required maxLength="14" value={cpf} onChange={(event) => (setCpf(event.target.value)
            )} />
        </div>
    )
}
// isNaN(cpf[cpf.length-1]