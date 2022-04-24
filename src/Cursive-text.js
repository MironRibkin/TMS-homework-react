import React, {useState} from "react";

export const ItalicText = (props) => {
    const [done, setDone] = useState(props.done);
    const toggleCheckbox = () => {
        setDone(prev => !prev)
    }

    const style = {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        height: '90%',
        fontsize: '60px',
        fontWeight: '600',
        cursor: 'pointer',
        margin: '20px',
    }

    return (
        <div style={style} onClick={toggleCheckbox}>
            <h1 className='text' style={{fontFamily: done ? 'none' : 'Noto Sans Old Italic, sans-serif'}}>
                {props.text}
            </h1>
        </div>
    )
}