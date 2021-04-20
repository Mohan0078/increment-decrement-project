import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';
import CircleTimer from './CircleTimer';

const Card = () => {

  const [counter,setCounter] = useState(0);
  
  // for changing the counter
  const incCounter = (event) => {

   // let btnName = event.target.name;
 
    setCounter(counter+1);
  }

  const decCounter = (event) => {

    // let btnName = event.target.name;
  
     setCounter(counter-1);

     if(counter == 0)
     {
       setCounter(0);
       alert("can't make negative...");
     }
   }

  return (
     
    <>

          <div className="main-div">
          <div className="center-div">
              

              <CircleTimer/>
              
              <h1>Hello {counter}</h1>
              <div className="btn-div">
              <Tooltip title="Add">
              <Button onClick={incCounter}  className="btn-green"><AddIcon /></Button>
              </Tooltip>

              <Tooltip title="Delete">
              <Button onClick={decCounter}  className="btn-red"><RemoveIcon/></Button>
              </Tooltip>
    
             <br/>
             <div style={ {backgroundColor:'#fff',color:'#000'} }  >
              

              <Clock />
              </div>
              </div>
          </div>
          </div>

          
    </>
  );
};

export default Card;