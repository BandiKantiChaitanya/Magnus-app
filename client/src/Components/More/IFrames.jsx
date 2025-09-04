import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'

function IFrames() {
  return (
    <div className='tabs' >
        <div className="heading">
        <h1>iFrames</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>iFrames</span>
        </div>
      </div>
      <div className="bg-white">
            <div className="d-flex tab-buttons" style={{gap:'10px'}}>
                <button className='btn custom-tab active-tab' >IFrames</button>  
            </div>
            <div className="tab-content d-flex flex-column align-items-center justify-content-center" style={{padding:'40px', border: '1px solid #ccc' }}>
               <div style={{marginBottom:'100px'}} >
                <h3 className='text-center' >Frame One</h3>
                <iframe src="http://localhost:5173/"   style={{height:'315px',width:'760px' }}  ></iframe>
               </div>
               <div style={{marginBottom:'200px'}} >
                <h3 className='text-center' >Frame Two</h3>
                <iframe src="https://www.youtube.com/embed/MBKgWORXkYk?si=uuwXOKpo3oYy6MyT"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  style={{height:'315px',width:'560px' }} allowFullScreen ></iframe>
               </div>
            </div>
        </div>
    </div>
  )
}

export default IFrames