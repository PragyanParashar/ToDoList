import React from 'react'

export const ToDo = (props) => {

    const deleted = () =>{

    };
  return (
    <>
    <div className='todo'>
    <li> {props.text}</li>
    <button className='delete' 
    onClick={() => {
        props.onSelect(props.id);
    }}>X</button>
    </div>
    </>
  )
}
