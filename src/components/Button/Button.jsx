import style from "./Button.module.css"

function Button({ title }) {

    return (
        <button className={style.button}>{title}</button>
    )
}

export default Button