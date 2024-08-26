import { Link } from "react-router-dom";
import styles from "../styles/zodiacBlock.module.scss"

const ZodiacBlock = ({ title, period, search }) => {
    return (
        <Link to={`/${search.toLowerCase()}`} style={{textDecoration: 'none', color: 'black'}}>
            <div className={styles.zodiacBox}>
                <p className={styles.title}>{title}</p>
                <div>
                    <img src={`/img/${search.toLowerCase()}.png`} alt="" />
                </div>
                <p>{period}</p>
            </div>
        </Link>
    )
}

export default ZodiacBlock;