import React, { useState } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import PopupModal from './PopupModal'

function Popup() {

    const [data,setData]=useState('')
    if(data){
        setTimeout(()=>{
            setData('')
        },3000)
    }

  return (
    <div className='tabs popup' >
        <div className="heading">
        <h1>Popup</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>Popup</span>
        </div>
      </div>
      <div className="bg-white">
            <div className="d-flex tab-buttons" style={{gap:'10px'}}>
               <button className='btn custom-tab active-tab' >Popups</button>
            </div>
            <div className="tab-content" style={{padding:'40px', border: '1px solid #ccc' }}>
                <div className="row mb-5">
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{window.open('https://www.google.com','','height=250,width=250')}} >Popup One</button>
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{window.open('https://www.tutorialspoint.com/','','left=250,height=250,width=250')}}>Popup Two</button>
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{window.open('https://www.tutorialsteacher.com/','','left=500,height=250,width=250')}}>Popup Three</button>
                </div>
                <div className="row mb-5">
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{window.open('https://www.javatpoint.com/java-tutorial','','left=750,height=250,width=250')}} >Popup Duplicate</button>
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{window.open('https://magnus.jalatechnologies.com/Account/Login','')}} >Duplicate Tab</button>
                    <button className=" btn buttons col col-md-2 ms-4" data-bs-toggle="modal" data-bs-target="#popupModal">In Window Popup</button>
                </div>
                <div className="row">
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{window.alert('This is an alert Box!')}} >Alert Box</button>
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{window.confirm('Confirm Message Box')}} >Confirm Box</button>
                    <button className=" btn buttons col col-md-2 ms-4" onClick={()=>{const name=prompt('Enter Your Name:','John Doe');if(name)setData(name)}} >Prompt Box</button>
                </div>
                {data && (
                <p className='text-danger text-center fs-4'>{data}</p>
            )}
            </div>
        </div>
        <PopupModal/>
    </div>
  )
}

export default Popup