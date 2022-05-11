import React, {useState} from "react";

export const CatsGames = () => {

    const style = {
        border: '1px solid red',
        borderRadius: "50%",
        width: '250px',
        height: '250px',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 34
    }

    const [use, setUse] = useState(style);

    const cats = () =>{
        setUse({...use, backgroundColor: 'yellow'})
    }

    return (
        <div>
            <div style={use} onClick={cats}>Meow
            </div>
        </div>
    )
}