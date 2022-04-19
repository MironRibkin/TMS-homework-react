import React from "react";

export function CheckBox() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = React.useState('V')

    const onChangeState = () => {
        state === 'V' ? setState('X') : setState('V');
    }
    const checkBoxStyle = {
        width: '50px',
        height: '50px',
        margin: '20px',
        fontSize: '30px'
    }

    return (
        <button onClick={onChangeState} style={checkBoxStyle}>
            {state}
        </button>
    )
}