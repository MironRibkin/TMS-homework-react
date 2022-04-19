import React from "react";

export function Counter() {
    const [count, setCount] = React.useState(1);
    const onMinusClick = () => {
        setCount(count - 1);
    }
    const onPlusClick = () => {
        setCount(count + 1);
    }
    const counterButtonStyle = {
        width: '50px',
        height: '50px',
        fontSize: '30px',
        backgroundColor: '#583144',
        margin: '5px'

    }
    const textCounterStyle = {
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }


    return (
        <div style={textCounterStyle}>
            <button onClick={onPlusClick} style={counterButtonStyle}>+</button>
             {count}
            <button onClick={onMinusClick} style={counterButtonStyle}>-</button>
        </div>
    );
}
