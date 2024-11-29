import style from "./Card.module.css"

function Card() {

    return (
        <div className={style.card}>
            <div className={style.card_body}>
                <h3>Title</h3>
                <p>description</p>
            </div>
        </div>
    )
}

export default Card