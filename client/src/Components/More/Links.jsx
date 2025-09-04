import React, { useState } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import {image} from '../../assets/download.jpg'
function Links() {
    const [activeTab,setActiveTab]=useState('tab1')

    // const BASE_URL=import.meta.env.VITE_API_BASE_URL

    const tabContent={
        tab1:(
            <>
                <p><a className='text-decoration-none text-danger' href="https://www.workinglinks.co.uk/" target='_blank' >Link 1</a></p>
                <p><a className='text-decoration-none text-primary' href="https://www.google.com/" target='_blank' >Link 2</a></p>
                <p><a className='text-decoration-none text-success' href="https://jalatechnologies.com/" target='_blank' >Link 3</a></p>
            </>
        ),
        tab2:(
            <>
                <p><a className='text-decoration-none text-danger' href='/Home/brokenLinks' target='_blank' >Link 1</a></p>
                <p><a className='text-decoration-none text-primary' href="/Home/brokenLinks" target='_blank' >Link 2</a></p>
                <p><a className='text-decoration-none text-success' href="/Home/brokenLinks" target='_blank' >Link 3</a></p>
            </>
        ),
        tab3:(
            <>
            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src='/assets/download.jpg' alt="instagram" style={{height:'auto',width:'100px'}} /></a>
            
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/google.png" alt="google" style={{height:'auto',width:'100px'}} /></a>

            <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="linkin" style={{borderRadius:'50%',height:'auto',width:'100px'}} /></a>

            <a href="http://www.jalatechnologies.com/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/jala.png" alt="jala" style={{height:'auto',width:'100px'}} /></a>
            </>
        ),
        tab4:(
            <>
            <p><a href="https://www.restapitutorial.com/httpstatuscodes" className='text-decoration-none text-danger' target='_blank'>201</a></p>
            <p><a href="/ErrorHandler/RedirectPermanently" target="_blank" className='text-decoration-none text-primary' >301</a></p>
            <p><a href="/ErrorHandler/NotFound" target="_blank" className='text-decoration-none text-success' >404</a></p>
            <p><a href="/ErrorHandler/InternalServerError" target='_blank' className='text-decoration-none text-warning' >500</a></p>
            </>
        )
    }
  return (
    <div className='tabs' >
        <div className="heading">
        <h1>Links</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>Links</span>
        </div>
      </div>
      <div className="bg-white">
            <div className="d-flex tab-buttons" style={{gap:'10px'}}>
                <button className={`btn custom-tab ${activeTab==='tab1'?'active-tab':''}`} onClick={()=>{setActiveTab('tab1')}}  >Working Links</button>
                <button className={`btn custom-tab ${activeTab==='tab2'?'active-tab':''}`} onClick={()=>{setActiveTab('tab2')}}  >Broken Links</button>
                <button className={`btn custom-tab ${activeTab==='tab3'?'active-tab':''}`} onClick={()=>{setActiveTab('tab3')}}  >Image Links</button>
                <button className={`btn custom-tab ${activeTab==='tab4'?'active-tab':''}`} onClick={()=>{setActiveTab('tab4')}}  >Status Codes</button>
            </div>
            <div className="tab-content d-flex justify-content-center gap-5 " style={{padding:'40px', border: '1px solid #ccc' }}>
                {tabContent[activeTab]}
            </div>
        </div>
    </div>
  )
}

export default Links