import React, { useState, useEffect } from 'react';
import "../styles/Todolist.css";
import "../styles/MediaQueries.css";

const Todolist = () => {
  const defaultItems = [
    { text: "re-watch lecture video", checked: false },
    { text: "complete slideshow for presentation tomorrow at 9am", checked: false },
    { text: "pay utility bill", checked: true }
  ];

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("todoItems");
    return savedItems ? JSON.parse(savedItems) : defaultItems;
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const addNewItem = () => {
    if (!inputValue.trim()) {
      alert("Please add a task first!");
      return;
    }

    setItems([...items, {text: inputValue, checked: false}]);
    setInputValue("");
  };

  const deleteItem = (index) => {
    const deleteItems = items.filter((item, i) => i !== index);
    setItems(deleteItems);
  }

  const toggleChecked = (index) => {
    const checkedItems = items.map((item, i) => {
      if (i === index) {
        return {...item, checked: !item.checked};
      }
      return item;
    });
    setItems(checkedItems);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNewItem();
    }
  };

  const resetToDefault = () => {
    setItems(defaultItems);
    localStorage.removeItem("todoItems");
  };

    return (
      <div>
        <main className="todolist">
        <h1 className="todo-title">My To Do List</h1>
        <div id="toDoDiv" className="todolist-container">
            <input type="text" id="toDoInput" placeholder="add your tasks here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown}/>
            <span className="todolist-add" onClick={addNewItem}>Add</span>
            <span className="todolist-reset" onClick={resetToDefault}>Reset</span>
        </div>

        <ul id="toDoUL" className="todolist-list">
           {items.map((item, index) => (
            <li key={index} className={item.checked ? "checked" : ""}>
              <span onClick={() => toggleChecked(index)}>{item.text}</span>
              <span className="delete" onClick={() => deleteItem(index)}>&times;</span>
  </li>
))}
        </ul>
        </main>    
      </div>
    )
  }
  
  export default Todolist;