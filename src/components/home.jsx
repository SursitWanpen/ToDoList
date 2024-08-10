import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import './home.css';
import Items from './Items'
import { message } from 'antd';

const Home = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('Todos') ||"[]");
    
    if (storedLists) {
      setTodos(storedLists);
    }
  }, []);

  function toggleCheckbox (id)  {
    const updatedLists = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(updatedLists);
    localStorage.setItem('Todos', JSON.stringify(updatedLists));
  };


  function Delete (id) {
    const updatedLists = todos.filter(todo => todo.id !== id);
    setTodos(updatedLists);
    localStorage.setItem('Todos', JSON.stringify(updatedLists));
    message.success(' successfully ')
};


  return (
    <div>
      <Navbar />
      <div className="containerHome">
        <h1>TodoList</h1>
        <div className="addtask">
          <div className="">
            <h3> My task </h3>
            <p>You have {todos.filter(todo => todo.checked).length} tasks left!</p>
          </div>
          <div className="button_Add">
            <Link to="/add"><button> ADD TASK</button></Link>
          </div>
        </div>
        <div className="arae-task">
          {todos.map((todos) => {
            return <Items
              key={todos.id}
              {...todos}
              toggleCheckbox={toggleCheckbox}
              Delete={Delete}
            />
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
