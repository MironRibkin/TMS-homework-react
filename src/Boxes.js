import React from "react";
import './Boxes.css'

export const Box = (props) => {
    const style = {
        margin: '20px',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '900',
        color: '#fff'
    }
    return (
        <div className={props.className} style={style}>
            {props.label}
        </div>
    )
}