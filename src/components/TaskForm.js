import React from "react";
import '../styleSheets/TaskForm.css';

function TaskForm(props) {
    return (
        <form className='task-form'>
            <input
                className='task-input'
                type='text'
                placeholder='Nueva tarea'
                name='texto'
            />
            <button className='task-button'>
                Agregar tarea
            </button>
        </form>
    )
}

export default TaskForm;