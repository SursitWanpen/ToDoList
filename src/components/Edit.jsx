import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import moment from 'moment';
import './Add_Edit.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';

function Edit() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [descrip, setDescrip] = useState("");
    const [date, setDate] = useState("");
    const { id } = useParams();  
    const navigate = useNavigate(); 

    useEffect(() => {
        const storedLists = JSON.parse(localStorage.getItem('Todos') || "[]");
        if (storedLists) {
            setTodos(storedLists);
        }
    }, []);

    useEffect(() => {
        if (id) {
            const taskToEdit = todos.find(todo => todo.id === parseInt(id));
            if (taskToEdit) {
                setTitle(taskToEdit.title);
                setDescrip(taskToEdit.descrip);
                setDate(taskToEdit.date);
            }
        }
    }, [id, todos]);

    const submit = () => {
        if (title !== "" && descrip !== "" && date !== "") {
            const updatedTodos = todos.map(todo =>
                todo.id === parseInt(id)  ? { ...todo, title, descrip, date } : todo
              );
            setTodos(updatedTodos);
            localStorage.setItem('Todos', JSON.stringify(updatedTodos));
            message.success('successfully');
            navigate('/home'); 
        } else {
            message.error('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="containeradd">
                <div className="navbar">
                    <h1>Edit Task</h1>
                    <Link to="/home"><button>Backward</button></Link>
                </div>
                <div className="Form">
                    <div className="form-input">
                        <label htmlFor="">Title</label>
                        <input
                            className={title ? "invalid" : "valid"}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor="">Description</label>
                        <input
                            className={descrip ? "invalid" : "valid"}
                            type="text"
                            value={descrip}
                            onChange={(e) => setDescrip(e.target.value)}
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor="">Due</label>
                        <input
                            className={date ? "invalid" : "valid"}
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={moment().format('YYYY-MM-DD')}
                        />
                    </div>
                    <button onClick={submit}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default Edit;
