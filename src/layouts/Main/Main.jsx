import style from "./Main.module.css"
import List from "../../components/List/List.jsx"
import Card from "../../components/Card/Card.jsx"
import languages from "../../data/languages.js"

function Main() {

    return (
        <>
            <main>
                <div className="container">
                    <List />
                </div>
                <section className={style.cards}>
                    {languages.map(language => (
                        <Card key={language.id} title={language.title} description={language.description} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Main