export default function UserData() {

    // campoCPF.addEventListener('focusout', () => {
    //     $valorDoCPF = event.target.value;
    //     $campoCPF.value = $valorDoCPF.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
    //   })
    return (
        <div className="data">
            <h3>Nome do comprador:</h3>
            <input type="text" placeholder="Digite seu nome..."></input>
            <h3>CPF do comprador:</h3>
            <input type="number" placeholder="Digite seu CPF..." maxLength="14"></input>
        </div>
    )
}