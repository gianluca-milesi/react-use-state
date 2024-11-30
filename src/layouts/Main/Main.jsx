import style from "./Main.module.css"
import LanguagesPanel from "../../components/LanguagesPanel/LanguagesPanel.jsx"

function Main() {

    return (
        <main>
            <section className={style.languages_panel}>
                <div className="container">
                    <LanguagesPanel />
                </div>
            </section>
        </main>
    )
}

export default Main