import React from 'react';
import "./Header.css";

function Header( {childToParent} ) {

  return (

    <div className='header'>
        
        <h2>Task Tracker</h2>
        <button className='open-close-bar' onClick={childToParent}>
            Close Add Task Bar
        </button>
    </div>
        
    
  )
}

export default Header