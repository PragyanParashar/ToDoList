import React, { useState } from 'react'
import { ToDo } from './ToDo';



export const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemsEvent = (event) => {
    setInputList(event.target.value);
  };


  const listOfEvent = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];

    });
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("ok")

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) =>{
        return index !== id ;
      });
    });

  };

  return (
    <>
      <div className='main-box'>
        <div className="inner-box">
          <br/>
          <h1>To Do List</h1>
          <br/>
          <input type="text" placeholder="Add a item... " value={inputList} onChange={itemsEvent}/>
          <button onClick={listOfEvent}>+</button>


          <ol>
            
            {items.map((itemdisplay, index) => {
             return <ToDo 
             key={index}  
             id={index} 
             text={itemdisplay}
             onSelect={deleteItem}
             />;
            } )}

          </ol>




        </div>
      </div>
    </>
  )
}
