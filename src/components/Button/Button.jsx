import style from "./Button.module.css"

function Button({ title, onClick }) {

    return (
        <button className={style.button} onClick={onClick}>{title}</button>
    )
}

export default Button