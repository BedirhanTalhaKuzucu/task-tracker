import React from 'react';
import "./Header.css";

function Header( {openCloseInput, displayInput} ) {

  return (

    <div className='header'>
        
        <h2>Task Tracker</h2>
        <button className='open-close-bar' onClick={openCloseInput} style={{backgroundColor: displayInput ? "red" : "purple"  }}>
            {displayInput ? "Close Add Task Bar" : "Open Add Task Bar"}
        </button>
    </div>
        
    
  )
}

export default Header