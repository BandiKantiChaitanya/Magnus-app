import React from 'react'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
    const navigate=useNavigate()
  return (
    <div className='pt-5' style={{minHeight:'100vh',backgroundColor:'#ecf0f5'}} >
            <h3 className='text-center'>Jala Academy</h3>
           <div className="container login mx-auto w-25 mb-">
            <form  method="post">
                <div className="mb-4 text-center mt-0">
                <h4>Forgot Password</h4>
                </div>
                <div className='mb-4' >
                    <label className='form-label' >Email</label>
                    <div className="input-icon">
                    <input className='form-control'  type="email" name="email"  /><MdEmail  className='icon' />
                    </div>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                    <p className='text-primary' style={{cursor:'pointer'}} onClick={()=>{navigate('/')}} >Back</p>
                    <button className='btn btn-submit' type='button'>Get Password</button>
                </div>
            </form>
           </div>
        </div>
  )
}

export default ForgotPassword