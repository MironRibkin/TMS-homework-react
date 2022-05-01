import React, {useState} from "react";

export const ItalicText = (props) => {
    const [done, setDone] = useState(props.done);
    const [toggle, setToggle] = useState(false)
    const [pos, setPos] = useState({x: 0, y: 0});
    const toggleCheckbox = () => {
        setDone(prev => !prev)
    }

    const style = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90%',
        height: '90%',
        fontSize: '30px',
        fontWeight: '600',
        margin: '20px',
    }

    const ButtonStyle = {
        width: "60px",
        height: "60px",
        fontSize: '40px',
        fontWeight: '600',
        cursor: 'pointer',
        position:'relative'
    }

    const divStyle = {
        position: 'absolute',
        padding: '10px',
        backgroundColor:'#ff00ff',
        width: 'fit-content',
        height: 'fit-content',
        fontSize:'15px',
        display: toggle ? 'block' : 'none',
        top: `${pos.y + 5}px`,
        left: `${pos.x + 2}px`
    }

    const onMouseOver = e => {
        setToggle(true);
        setPos({x:e.clientX, y: e.clientY})
    }

    const onMouseLeave = () => {
        setToggle(false)
    }

    return (
        <div style={style}>
            <button style={ButtonStyle} onClick={toggleCheckbox} onMouseOver={(e) => onMouseOver(e)} onMouseLeave={onMouseLeave}>I</button>
            <div style={divStyle}>
                Cursive
            </div>
            <h1 className='text' style={{fontFamily: done ? 'none' : 'Noto Sans Old Italic, sans-serif'}}>
                {props.text}
            </h1>
        </div>
    )
}
