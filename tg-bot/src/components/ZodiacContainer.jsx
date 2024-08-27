import { useContext, useEffect } from "react";
import ZodiacBlock from "./ZodiacBlock";
import styles from "../styles/zodiacContainer.module.scss"
import { LanContext } from "../App";

const ZodiacContainer = () => {
    const { zodiacs, lan, setLan } = useContext(LanContext)
    
    const onChangeHandler = (e) => {
        setLan(e.target.value)
        console.log(lan)
    }

    useEffect(() => {
        if (window.Telegram.WebApp.BackButton.isVisible) {
            window.Telegram.WebApp.BackButton.hide()
        }
    }) 

    return (
        <main>  
            <select value={lan} className={styles.lanBox} onChange={onChangeHandler}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
            <div className={styles.zodiacContainer}>
                
                {
                    zodiacs.map((item, i) => (
                        <ZodiacBlock 
                            key={i} 
                            title={lan === "ru" ? item.zodiacRu : item.zodiacEn} 
                            search={item.zodiacEn} 
                            period={lan === "ru" ? item.periodRu : item.periodEn}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default ZodiacContainer;