import style from "./Card.module.css"

function Card({ title, description }) {

    return (
        <div className={style.card}>
            <div className={style.card_body}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card