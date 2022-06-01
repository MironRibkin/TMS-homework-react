import React, {useState} from "react";
import styles from './CatsGames.module.css';

const randomMove = (value) => Math.floor(Math.random() * value)
const getRandomPosition = () => {
    return {
        backgroundColor: '#' + randomMove(16777215).toString(16),
        top: randomMove(800),
        left: randomMove(800),
    }
}
const CatsGames = () => {
    const [btnStyle, setBtnStyle] = useState(() => getRandomPosition());


    const handleClick = () => {
        setBtnStyle(getRandomPosition());
    }

    return (
        <div className={styles.CatsGames}>
            <div className={styles.defaultBtnStyle} style={btnStyle} onClick={handleClick}>
                Meow
            </div>
        </div>
    )
}

export default CatsGames;