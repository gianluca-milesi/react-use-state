import style from "./Button.module.css"

function Button({ title, onClick, isActive }) {

    return (
        <button className= {`${style.button} ${isActive ? style.active : ""}`} onClick={onClick}>{title}</button>
    )
}

export default Button