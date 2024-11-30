import style from "./LanguagesPanel.module.css"
import { useState } from "react"
import Button from "../Button/Button.jsx"
import Card from "../Card/Card.jsx"
import languages from "../../data/languages.js"

function LanguagesPanel() {
    const [currentId, setCurrentId] = useState(null);

    function toggle(id) {
        setCurrentId(currentId === id ? null : id);
    }
    const selectedLanguage = languages.find(language => language.id === currentId);

    return (
        <div>
            <ul className={style.languages_list}>
                {languages.map(language => (
                    <li key={language.id}><Button title={language.title} onClick={() => toggle(language.id)} isActive={currentId === language.id} /></li>
                ))}
            </ul>
            {
                selectedLanguage && (<Card title={selectedLanguage.title} description={selectedLanguage.description} />)
            }
        </div >
    )
}

export default LanguagesPanel