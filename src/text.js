import React from "react";

export const Text = (props) => {
    const style = {
        fontSize: `${props.font}px`,
        color: `${props.color}`,
        textDecoration: props.underline ? 'underline' : 'none',
    }
    return (
        <div style={style}>{props.text}</div>
    )
}