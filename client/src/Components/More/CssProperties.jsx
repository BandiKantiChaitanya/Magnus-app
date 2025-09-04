import React, { useState } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function CssProperites() {
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
                <span className='badge bg-secondary' >Default</span>
                <span className='badge bg-primary' >Primary</span>
                <span className='badge bg-success' >Success</span>
                <span className='badge bg-info' >Info</span>
                <span className='badge bg-warning' >Warning</span>
                <span className='badge bg-danger' >Danger</span>
            </>
        ),
        tab3:(
             <>
                <button className='btn btn-secondary' >Default</button>
                <button className='btn btn-primary' >Primary</button>
                <button className='btn btn-success' >Success</button>
                <button className='btn btn-info' >Info</button>
                <button className='btn btn-warning' >Warning</button>
                <button className='btn btn-danger' >Danger</button>
            </>
        ),
        tab4:(
            <div className='w-100'>
            <div class="alert alert-dismissible text-white bg-success fade show " role="alert"><strong>Success!</strong> Indicates a successful or positive action.
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div class="alert alert-dismissible text-white bg-info fade show " role="alert"><strong>Info!</strong> Indicates a neutral informative change or action
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div class="alert alert-dismissible text-white bg-warning fade show " role="alert"><strong>Warning!</strong> Indicates a warning that might need attention.
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div class="alert alert-dismissible text-white bg-danger fade show " role="alert"><strong>Danger!</strong> Indicates a dangerous or potentially negative action.
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </div>
        ),
        tab5:(
            <div className='w-100' >
            <div className="progress mb-4" style={{height:'20px'}}  >
                <div className="progress-bar bg-success" style={{width:'45%'}}></div>
            </div>

            <div className="progress mb-4" style={{height:'20px'}}  >
                <div className="progress-bar bg-info" style={{width:'20%'}}></div>
            </div>

            <div className="progress mb-4" style={{height:'20px'}}  >
                <div className="progress-bar bg-warning" style={{width:'60%'}}></div>
            </div>

            <div className="progress mb-4" style={{height:'20px'}}  >
                <div className="progress-bar bg-danger" style={{width:'90%'}}></div>
            </div>
            </div>
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
                <button className={`btn custom-tab ${activeTab==='tab1'?'active-tab':''}`} onClick={()=>{setActiveTab('tab1')}}  >Links</button>
                <button className={`btn custom-tab ${activeTab==='tab2'?'active-tab':''}`} onClick={()=>{setActiveTab('tab2')}}  >Labels</button>
                <button className={`btn custom-tab ${activeTab==='tab3'?'active-tab':''}`} onClick={()=>{setActiveTab('tab3')}}  >Buttons</button>
                <button className={`btn custom-tab ${activeTab==='tab4'?'active-tab':''}`} onClick={()=>{setActiveTab('tab4')}}  >Alerts</button>
                <button className={`btn custom-tab ${activeTab==='tab5'?'active-tab':''}`} onClick={()=>{setActiveTab('tab5')}}  >Progress Bars</button>
            
            </div>
            <div className="tab-content d-flex justify-content-center gap-5 " style={{padding:'40px', border: '1px solid #ccc' }}>
                {tabContent[activeTab]}
            </div>
        </div>
    </div>
  )
}

export default CssProperites