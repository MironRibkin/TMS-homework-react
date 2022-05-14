import React, {useState} from "react";
import './style.css';

const defaultBtnStyle = {
    border: '1px solid red',
    borderRadius: "50%",
    width: '150px',
    height: '150px',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 34,
    position: 'absolute',
    boxSizing: 'border-box',
    cursor: 'pointer',
    top: 0,
    left: 0,
}

const randomMove = (value) => Math.floor(Math.random() * value)

const CatsGames = () => {
    const [btnStyle, setBtnStyle] = useState(defaultBtnStyle);

    const random = {
        backgroundColor: '#' + randomMove(16777215).toString(16),
        top: randomMove(850),
        left: randomMove(850)
    }

    const handleClick = () => {
        setBtnStyle({...btnStyle, ...random})
    }

    return (
        <div className="CatsGames">
            <div style={btnStyle} onClick={handleClick}>
                Meow
            </div>
        </div>
    )
}

export default CatsGames;