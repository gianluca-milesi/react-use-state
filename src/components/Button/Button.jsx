import style from "./Button.module.css"

function Button({ title, onClick, isActive }) {

    return (
        <button className={`${style.button} ${isActive ? style.bg_gold : style.bg_azure}`} onClick={onClick}>{title}</button>
    )
}

export default Button