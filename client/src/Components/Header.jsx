import React, { useContext } from 'react'
import '../App.css'
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import LoginContext from './Context/LoginContext';
import { useNavigate } from 'react-router-dom';

function Header({toggleSidebar}) {
  const [login,setLogin]=useContext(LoginContext)
  const navigate=useNavigate()
  return (
    <header className="header w-100">
      <button className="btn d-md-none text-white" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h4 className="m-0">Magnus</h4>
      <p className='mt-2' onClick={()=>{setLogin(!login);localStorage.removeItem('token');navigate('/')}} ><FiLogOut className='me-2' />Logout</p>
    </header>
  )
}

export default Header