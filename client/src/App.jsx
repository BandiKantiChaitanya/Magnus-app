import React, { useContext } from 'react'
import Header from './Components/Header'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { Navigate } from 'react-router-dom'
import './App.css'
import { IoIosArrowDown,IoIosArrowBack  } from "react-icons/io";
import { useState } from 'react'
import EmpCreate from './Components/EmpCreate'
import { FaUserSecret } from "react-icons/fa";
import { AiFillDashboard  } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaThList } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { MdPersonSearch } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa";
import toastr from 'toastr'
import EmpSearch from './Components/EmpSearch'
import EmpUpdate from './Components/EmpUpdate'
import Footer from './Components/Footer'
import MultipleTabs from './Components/More/MultipleTabs'
import Menu from './Components/More/Menu'
import AutoComplete from './Components/More/AutoComplete'
import CollapsibleContent from './Components/More/CollapsibleContent'
import Image from './Components/More/Image'
import Slider from './Components/More/Slider'
import Tooltip from './Components/More/Tooltip'
import Popup from './Components/More/Popup'
import Links from './Components/More/Links'
import NotFound from './Components/More/NotFound'
import CssProperites from './Components/More/CssProperties'
import IFrames from './Components/More/IFrames'
import Login from './Login'
import LoginContext from './Components/Context/LoginContext'
import Error from './Components/More/Error'
import ForgotPassword from './ForgotPassword'


function App() {
  const [openMenus, setOpenMenus] = useState({})
  const toggleMenu = (menu) => {
  setOpenMenus(prev => {
    const isOpen = prev[menu];
    return isOpen ? {} : { [menu]: true };
  });
};
toastr.options={
  closeButton:true,
  positionClass: 'toast-top-right',
  // timeOut:0
}

const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [login]=useContext(LoginContext)




  return (
   <div>
    {/* {errorRoutes} */}
    {!login?(
      <>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path='/Home/BrokenLinks' element={<NotFound />} />
      <Route path="/ErrorHandler/RedirectPermanently" element={<NotFound />} />
      <Route path="/ErrorHandler/NotFound" element={<NotFound />} />
      <Route path="/ErrorHandler/InternalServerError" element={<Error />} />
      <Route path='/Account/ForgotPassword' element={<ForgotPassword/>}  />
    </Routes>
      </>
    ):(
       <div >
      <Header toggleSidebar={toggleSidebar} />

      {sidebarOpen && window.innerWidth <= 991 && (
        <div className="sidebar-overlay" onClick={toggleSidebar}/>
      )}
      {/* side bar */}
      <div className="d-flex app-wrapper ">

      <nav id='sidebar'  className={`sidebar ${sidebarOpen ? 'open' : ''}`} >
        <div className='user'>
          <img src="https://magnus.jalatechnologies.com/Content/img/user-profile.png" alt="User Profile"  className='userImage' />
          <div className="userInfo">
            <h5>Guest User</h5>
            <p><FaUserSecret className="me-1 user-icon" /> User</p>
          </div>
        </div>
        <ul className='nav flex-column' >
          <li className="nav-item" onClick={() => toggleMenu('home')}>
            <NavLink to="/Home/Index" className='nav-link' onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }}  ><AiFillDashboard  className='me-2 fs-5' />Home</NavLink>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => toggleMenu('emp')} style={{ cursor: 'pointer' }}>
              <IoIosPeople className='me-2 fs-5' />
              Employee {openMenus['emp'] ? <IoIosArrowBack className='sideicon' /> : <IoIosArrowDown className='sideicon'  />}
              </div>
              {
                openMenus['emp']&&(
                  <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <NavLink to="/Employee/Create" className='nav-link' onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <TbEdit className='me-2 fs-5' /> Create</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Employee/Search" className='nav-link' onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }}  > <MdPersonSearch className='me-2 fs-5' /> Search</NavLink>
                </li>
              </ul>
              
                )
              }
            
          </li>
          <li className="nav-item">
          <div className="nav-link" onClick={() => toggleMenu('more')} style={{ cursor: 'pointer' }}>
            <FaThList className='me-2 fs-5' />
            More {openMenus['more'] ? <IoIosArrowBack className='sideicon2' /> : <IoIosArrowDown className='sideicon2' />}
          </div>
          {openMenus['more'] && (
            <ul className="nav flex-column ms-3 moreMenu">
              <li className="nav-item">
                <NavLink to='/Home/Tabs' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' /> Multiple Tabs</NavLink>
              </li>
              <li>
                <NavLink to='/Home/Menu' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' /> Menu</NavLink>
              </li>
              <li>
                <NavLink to='/Home/AutoComplete' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' /> Auto Complete</NavLink>
              </li>
              <li>
                <NavLink to='/Home/Collapse' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' /> Collapsible Content</NavLink>
              </li>
              <li>
                <NavLink to='/Home/UploadImage' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' /> Image</NavLink>
              </li>
              <li>
                <NavLink to='/Home/Slider' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' /> Slider</NavLink>
              </li>
              <li>
                <NavLink to='/Home/Tooltip' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' />Tooltip</NavLink>
              </li>
               <li>
                <NavLink to='/Home/Popup' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' />Popup</NavLink>
              </li>
              <li>
                <NavLink to='/Home/Links' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' />Links</NavLink>
              </li>
               <li>
                <NavLink to='/Home/CssProperties' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' />Css Properties</NavLink>
              </li>
               <li>
                <NavLink to='/Home/iFrame' className="nav-link" onClick={() => { if (window.innerWidth <= 991) toggleSidebar(); }} > <FaRegHandPointRight className='me-2 fs-5' />IFrames</NavLink>
              </li>
            </ul>
          )}
        </li>
        </ul>

        
      </nav>
      
         <main className="flex-grow-1 p-4 main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/Home/Index" replace />} />
            {/* <Route path='/'  element={<Login/>} /> */}
            <Route path="/Home/Index" element={<Home />} />
            <Route path="/Employee/Create" element={<EmpCreate />} />
            <Route path='/Employee/Search' element={<EmpSearch/>}/>
            <Route path='/Employee/Edit/:id'  element={<EmpUpdate/>} />
            {/* <Route path='/Employee/Edit/:id'  element={<EmpUpdate/>} /> */}

            {/* more */}
            <Route path='/Home/Tabs' element={<MultipleTabs/>} />
            <Route path='/Home/Menu'  element={<Menu/>}/>
            <Route path='/Home/AutoComplete' element={<AutoComplete/>}  />
            <Route path='/Home/Collapse' element={<CollapsibleContent/>}  />
            <Route path='/Home/UploadImage' element={<Image/>}  />
            <Route path='/Home/Slider' element={<Slider/>} />
            <Route path='/Home/Tooltip' element={<Tooltip/>} />
            <Route path='/Home/Popup' element={<Popup/>} />
            <Route path='/Home/Links' element={<Links/>} />
            <Route path='/Home/CssProperties' element={<CssProperites/>} />
            <Route path='/Home/iFrame' element={<IFrames/>} />
          </Routes>
        </main>
      </div>
        <Footer/>
    </div>
    )}
    
   </div>
  )
}

export default App