import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import List from './List';

const TodoList = () => {

    // for storing item state
    const [item, setItem] = useState("");

    // an array
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
      setItem(event.target.value);
    } 

    const addItem = () => {
        
      // edge case for empty todo
        if(item === "")
        return;

        // using spread operator and callback function
        setNewItem((prevValue) => {
            return [...prevValue, item];
        })

        setItem("");
    }


return (
    <>
      <div className="main-div">
      
      
          <div className="center-div">
          <h1 className='text-center mt-3 text-danger'>Welcome Dost 😄</h1>
          
          <h5>Note :  1. Single click the delete button to cut what you write</h5>
          <h5>      2. Double click the delete button to uncut</h5>

          <br/>
              <h1>Todo List</h1>
          <br/>
          <input type="text" value={item}
           placeholder="Add an item"
              onChange={itemEvent}
          />
          
          <Button className="newBtn"
          onClick={addItem}
          ><Add/></Button>
           
        <br/>
        <ol>

            {newItem.map((val, index) => {
                
          return  <List key={index} text={val}/>;
            })}
        </ol>
        <br/>
        <br/>
        <br/>
        <h5><a href="https://mohan0078.github.io/" target="_blanck">About Mohan</a></h5>
          </div>

      </div>  
    </>
)
}

export default TodoList;
