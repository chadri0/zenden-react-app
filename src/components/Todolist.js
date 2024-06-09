import React from 'react';

const Todolist = () => {
    return (
      <div>
        <main className="todolist">
        <h1 className="todo-title">My To Do List</h1>
        <div id="toDoDiv" className="todolist-container">
            <input type="text" id="toDoInput" placeholder="add your tasks here"/>
            <span className="todolist-add">Add</span>
        </div>

        <ul id="toDoUL" className="todolist-list">
            <li>re-watch lecture video</li>
            <li>complete slideshow for presentation tomorrow at 9am</li>
            <li className="checked">pay utility bill</li>
        </ul>
        </main>    
      </div>
    )
  }
  
  export default Todolist;