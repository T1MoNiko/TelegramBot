import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { LanContext } from "../App"
import { useSwipeable } from "react-swipeable";
import styles from "../styles/zodiacInfo.module.scss"

const ZodiacInfo = () => {
    const [info, setInfo] = useState(null)
    const { zodiac } = useParams()
    const { lan, zodiacs } = useContext(LanContext)
    const navigate = useNavigate()

    const handlers = useSwipeable({
        onSwipedRight: () => navigate("/"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const getData = async () => {
        const {data} = await axios.post("https://poker247tech.ru/get_horoscope/", {
            "sign": zodiac,
            "language": lan === "ru" ? "original" : "translate",
            "period": "today"
        })  

        setInfo(data)
    }

    useEffect(() => {
        getData()
    }, [])

    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.BackButton.onClick(() => {
        navigate("/")
    });
        

    return ( 
        <div {...handlers} className={styles.container}>
            <div>
                <h1 style={{textAlign: "center"}}>
                    {lan === "ru" ? 
                            zodiacs.find(item => item?.zodiacEn.toLowerCase() === info?.sign.toLowerCase())?.zodiacRu 
                            : info?.sign}
                </h1>
                <p>{info?.horoscope}</p>
            </div>
        </div>
     );
}
 
export default ZodiacInfo;