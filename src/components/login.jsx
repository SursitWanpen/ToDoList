import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css';
import { FaUserAlt,FaLock ,FaLockOpen  } from "react-icons/fa";
import { CenterData } from '../context/DataContext';


function Login() {
  const {setUserEmail} = CenterData();
  const [cheackPass, setCheakPass] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [showpass , setShowpass]=useState(true)
  const navigate = useNavigate();   
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        const data = await response.json();
        setCheakPass(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  const handleLogin = () => {
    const loginUser = cheackPass.find(user => user.email === email && user.Password === password);
    if (loginUser) {
      setUserEmail(loginUser.name)
      navigate('/home');
    } else {
      const User_err = cheackPass.find(user => user.email === email);
      if(!email || !password){
        setError("กรุณากรอกข้อมูลให้ครบถ้วน !!! ")
      }else if(! User_err){
        setError("Wrong Email ")
      }
      else if( User_err.Password !== password){
        setError("Wrong Password ")
      }
      // Genevieve72@yahoo.com (email)
      // 8y1mAyshbF6iLBH (password)
    }
  };
 

  return (
    <div>
      <div className="container">
        <div className="form">
          <h1>LOGIN</h1>
          {error && <div className="error">{error}</div>}
          <div className="input-pass">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className='i-con'><FaUserAlt /></i>
          </div>

          <div className="input-pass">
            <label htmlFor="password">Password</label>
            <input
              className='password'
              type={showpass ?"password" : "text"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
            />
            <i className='i-con'  onClick={()=>setShowpass(!showpass)} style={{cursor:"pointer"}}>{showpass ?<FaLock/> : <FaLockOpen />} </i>
          </div>
          <button onClick={handleLogin}>Login</button>

        </div>
      </div>
    </div>
  );
}

export default Login;
