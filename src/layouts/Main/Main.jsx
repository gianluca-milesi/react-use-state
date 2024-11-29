import style from "./Main.module.css"
import List from "../../components/List/List.jsx"
import Card from "../../components/Card/Card.jsx"

function Main() {

    return (
        <>
            <main>
                <div className="container">
                    <List />
                </div>
                <section className={style.cards}>
                    <Card />
                </section>
            </main>
        </>
    )
}

export default Main