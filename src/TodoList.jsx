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
          
          <h4>Note :</h4>
          <h5 className="deleteNote">1. Single click the delete icon to cut what you write</h5>
          <h5 className="deleteNote">2. Double click the delete icon to uncut</h5>

          <br/>
              <h1>Todo List</h1>
          <br/>
          <h5 className="todoNote">For adding a ToDo type something in text box  then click + symbol to add</h5>
          <br/>
          
            <hr/>
          <br/>
          <input type="text" value={item}
           placeholder="Type here ..."
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
        <h4 style={{textAlign:"center"}}><a href="https://aboutmohanpatel.netlify.app/" target="_blanck">About Mohan</a></h4>

        <br /> <br /> <br />
          </div>

      </div>  
    </>
)
}

export default TodoList;
