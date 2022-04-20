import React, {useState} from "react";

export const TaskList = (props) => {
    const [done, setDone] = useState(props.done)
    const style = {
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
        fontsize: '30px',
        fontWeight: '600',
        cursor: 'pointer',
    }

    const toggleCheckbox = () => {
        setDone(prev => !prev)
    }

    return (<div style={style} onClick={toggleCheckbox}>
        <input type='checkbox' defaultChecked={done} checked={done}/>
        <span className='keys'>
            {props.number}
        </span>
        <p className='text' style={{textDecoration: done ? 'line-through' : 'none', color: done ? 'black' : 'red'}}>
            {props.text}
        </p>
    </div>)
}