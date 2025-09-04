import React, { useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'

function Menu() {
    const [activeTab,setActiveTab]=useState('tab1')

    const menu=['Testing','Java','.Net','Data Base']
    const [menuOption,setMenuOption]=useState('')

    const subMenu={
        Testing:['Selenium','Manual Testing','Unit Testing','DB Testing'],
        Java:['Adv Java','Core Java','Spring','Hibernate'],
        '.Net':['C#','ASP.NET','ADO.NET','MVC'],
        'Data Base':['SQL','My Sql','Oracle','H2']
    }
    const [menus,setMenus]=useState([])
    const [subMenuOption,setSubMenuOption]=useState('')
    const tabContent={
        tab1:(
            <div className='d-flex align-items-start menu' >
            <div className='d-flex flex-column justify-content-start w-25' >
                {
                    menu.map((m,i)=>(
                        <button key={i} className={`bt `} onClick={()=>setMenuOption(m)}   >{m}</button>
                    ))
                }
            </div>
            {
                menuOption&&<p className='ms-3 mt-0' >You have Selected {menuOption} Menu Option.</p>
            }
            </div>
        ),
        tab2:(
           <div className="menu d-flex align-items-start">
            <div className="d-flex flex-column justify-content-start w-25 " style={{ position: 'relative' }}  >
                {
                menu.map((m,i)=>(
                    <div key={i}  className="w-100" style={{ position: 'relative' }}  onMouseLeave={() => setMenus('')} >
                    <button  onMouseEnter={()=>{setMenus(m)}}  className="w-100"  >{m}</button>
                    
            {
                menus===m && subMenu[m]?.length>0 &&(
                    <div className='d-flex flex-column justify-content-end ' 
                style={{
                  position: 'absolute',
                  width:'150px',
                  top: `${i}px`,
                  left: '100%',
                  fontSize:'16px',
                  zIndex: 18,}}>
                {subMenu[menus]?.map((s,i)=>(
                    <button className='p-2' key={i} onClick={()=>{setSubMenuOption(s);setMenus('')}} >{s}</button>
                ))}
                </div>
                )
            }
            </div>
            ))
            }
            </div>
            
            {
            subMenuOption && <p className='ms-3' >You have Selected {subMenuOption} Menu Option.</p>
            }
           </div>
        )
    }
  return (
    <div className='tabs' >
        <div className="heading">
        <h1>Menu</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>Menu</span>
        </div>
      </div>
      <div className="bg-white">
            <div className="d-flex tab-buttons" style={{gap:'10px'}}>
                <button className={`btn custom-tab ${activeTab==='tab1'?'active-tab':''}`} onClick={()=>{setActiveTab('tab1')}}  >Single Menus</button>
                <button className={`btn custom-tab ${activeTab==='tab2'?'active-tab':''}`} onClick={()=>{setActiveTab('tab2')}}  >Sub Menus</button>
            </div>
            <div className="tab-content" style={{padding:'40px', border: '1px solid #ccc' }}>
                {tabContent[activeTab]}
            </div>
        </div>
    </div>
  )
}

export default Menu