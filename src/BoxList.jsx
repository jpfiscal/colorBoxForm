import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

function BoxList() {
    const INITIAL_STATE = []
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(Boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const removeBox = (rmBoxID) => {
        console.log(`########RM_ID:${rmBoxID}`);
        setBoxes(boxes.filter(box => box.id !== rmBoxID));
    }
    return (
        <div className='BoxList'>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, width, height, color}) => <Box
                    id={id} 
                    width={width}
                    height={height}
                    color={color}
                    removeBox={removeBox}
                />)}
            </div>
        </div>
    )
}

export default BoxList