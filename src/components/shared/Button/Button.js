import "./button.css"
export default function Button({text}) {
    return (
        <div className="button">
            <button>{text}</button>
        </div>
    )
}