    import React, { useState ,useEffect } from 'react'
    import Navbar from './navbar';
    import moment from 'moment';
    import './Add_Edit.css'
    import { Link } from 'react-router-dom';
    import { message } from 'antd';

    function AddTask() {

        const [todos, setTodos] = useState([])
        const [title, setTitle] = useState("")
        const [descrip, setDescrip] = useState("")
        const [date, setDate] = useState("")

        useEffect(() => {
            const storedLists = JSON.parse(localStorage.getItem('Todos') || "[]");
            if (storedLists) {
                setTodos(storedLists);
            }
        }, []);


        const submit = () => {
            if (title !== "" && descrip !== "" && date !== "") {
                const newTask = {
                    id: todos.length + 1,
                    title,
                    descrip,
                    date,
                    checked: true
                };
                message.success(' successfully ')
                setTodos([...todos, newTask]);
                setTitle("");
                setDescrip("");
                setDate("");
            } else {
                message.error(' กรุณากรอกข้อมูลให้ครบถ้วน ')
            }
        };
        
     

        useEffect(() => {
            if (todos.length > 0) {
                localStorage.setItem('Todos', JSON.stringify(todos));
            }
        }, [todos]);


        return (
            <div>
                <Navbar />
                <div className="containeradd">
                    <div className="navbar">
                        <h1> Add Task</h1>
                        <Link to="/home"><button > Backward </button></Link>
                    </div>
                    <div className="Form">
                        <div className="form-input">
                            <label htmlFor=""> Title </label>
                            <input
                                className={title ? "invalid" : "valid"}
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}

                            />
                        </div>

                        <div className="form-input">
                            <label htmlFor=""> Description </label>
                            <input
                                className={descrip? "invalid" : "valid"}
                                type="text"
                                value={descrip}
                                onChange={(e) => setDescrip(e.target.value)}
                            />
                        </div>

                        <div className="form-input">
                            <label htmlFor=""> Due </label>
                            <input
                                className={date ? "invalid" : "valid"}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                min={moment().format('YYYY-MM-DD')}
                            />
                        </div>
                        <button onClick={submit}>ADD TASK</button>
                    </div>
                </div>
            </div>
        )
    }

    export default AddTask