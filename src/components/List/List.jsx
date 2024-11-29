import style from "./List.module.css"
import Button from "../Button/Button.jsx"
import languages from "../../data/languages.js"

function List() {

    return (
        <ul className={style.languages_list}>
            {languages.map(language => (
                <li key={language.id}><Button title={language.title} /></li>
            ))}

        </ul>
    )
}

export default List