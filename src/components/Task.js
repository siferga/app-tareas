import React from 'react';
import '../styleSheets/Task.css';
import { FaWindowClose } from 'react-icons/fa';


function Task({ text }) {
  return (
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='task-container-icons'>
       <FaWindowClose className='task-icon'/>
      </div>
    </div>
  );    
}

export default Task;