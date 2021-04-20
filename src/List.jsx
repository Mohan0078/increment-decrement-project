import React, { useState } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

const List = (props) => {

    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }

    const unCutIt = () => {
        setLine(false);
    }

    return (
    <div className="todo-style">
    
    <li style={{textDecoration: line?'line-through':'none',}}>{props.text}     <span onClick={cutIt} onDoubleClick={unCutIt}>
    <DeleteIcon className="deleteIcon"/>
    </span></li>
    
    </div>
    );
}

export default List;