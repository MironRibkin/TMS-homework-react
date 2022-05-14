import React, {useState} from "react";

export const CatsGames = () => {

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

    const wrapperStyle = {
        width: '1000px',
        height: '1000px',
        border: '1px solid black',
        position: 'relative',
    }


    const [btnStyle, setBtnStyle] = useState(defaultBtnStyle);

    const random = {
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            top: Math.floor(Math.random() * 850),
            left: Math.floor(Math.random() * 850)
        }


    const handleClick = () => {
        setBtnStyle({...btnStyle, backgroundColor: random.color, top: random.top, left: random.left})
    }

    return (
        <div style={wrapperStyle}>
            <div style={btnStyle} onClick={handleClick}>Meow
            </div>
        </div>
    )
}