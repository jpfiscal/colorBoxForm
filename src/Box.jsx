import React from "react";

const Box = ({id, width, height, color, removeBox }) => {
    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color
    };
    return (
        <>
            <div style={boxStyle}></div>
            <button onClick={() => removeBox(id)}>X</button>
        </>
            
    )
}

export default Box;