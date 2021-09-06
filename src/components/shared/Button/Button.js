import "./button.css"
export default function Button({text, acao}) {
    return (
        <div className="button" onClick={() => acao()}>
            <button>{text}</button>
        </div>
        
    )
}