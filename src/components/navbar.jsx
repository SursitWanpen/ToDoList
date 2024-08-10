import React, { useEffect } from 'react'
import { CenterData } from '../context/DataContext';
import './navbar.css';
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; 

function Navbar() {
    const { userEmail ,setUserEmail} = CenterData(); 
    const navigate = useNavigate(); 

    useEffect(()=>{
        if(!userEmail){
            navigate('/')
        }
    },[userEmail])

    function Logout() {
        setUserEmail(null); 
        navigate('/'); 
    }

  return (
    <div className="containernav" >
        <div className="UserName">
            <h2> {userEmail} </h2>
        </div>
        <div className="Loguot">
            <h2>Logout </h2>
            <i style={{cursor:"pointer"}} onClick={Logout}><IoIosLogOut /></i>
        </div>
    </div>
  )
}

export default Navbar