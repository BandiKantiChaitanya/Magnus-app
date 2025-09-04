import React,{useEffect, useState} from 'react'
import '../App.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { AiFillDashboard  } from "react-icons/ai";
import {useForm} from 'react-hook-form'
import toastr from 'toastr'
function EmpUpdate() {
      const {id}=useParams() 
      const {register,handleSubmit,formState:{errors},watch,reset}=useForm()
      const naviagte=useNavigate()
    
      const [isOtherCity, setIsOtherCity] = useState(false);
      const country=watch('country')
      const countries=['Bangladesh','Canada','China','France','India','Japan','Nepal','Sri Lanka','UK','USA']
      const cities = {
      Bangladesh: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur', 'Comilla'],
      Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City'],
      China: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Hangzhou', 'Wuhan', 'Nanjing'],
      France: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Bordeaux'],
      India: ['Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Kolkata', 'Chennai', 'Pune', 'Ahmedabad'],
      Japan: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo', 'Hiroshima', 'Fukuoka'],
      Nepal: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Biratnagar', 'Birgunj', 'Dharan', 'Butwal', 'Hetauda'],
      'Sri Lanka': ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Batticaloa', 'Anuradhapura', 'Ratnapura'],
      UK: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Sheffield', 'Bristol', 'Glasgow'],
      USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego']
      }
    
      const skills=['AWS','DevOps','Full Stack Developer','Middleware','QA-Automation','Web Services']

      const city = watch('city')

      useEffect(() => {
        if (country && city) {
            const cityList = cities[country] || [];
            if (!cityList.includes(city)) {
            setIsOtherCity(true); 
            } else {
            setIsOtherCity(false);
            }
        }
        }, [city, country]);

      const BASE_URL=import.meta.env.VITE_API_BASE_URL
      const token=localStorage.getItem('token')
      useEffect(()=>{
        fetch(`${BASE_URL}/getEmp/${id}`,{
          headers:{
            'Content-type':'application/JSON',
            'Authorization':`Bearer ${token}`
          },
          credentials:'include'
        })
        .then(res=>res.json())
        .then(response=>{
            if(response.data){
                const emp = response.data;

                const formattedDate=new Date(emp.dob).toISOString().split('T')[0]
                reset({...emp,dob:formattedDate})
            }
        })
        .catch(err=>console.log('Error Occured',err))
      },[])

      async function onSubmit(data){
        try {
            const response=fetch(`${BASE_URL}/editEmp/${id}`,{
                method:'PUT',
                credentials:'include',
                headers:{
                    'Authorization':`Bearer ${token}`,
                    'Content-Type':'application/JSON'
                },
                body:JSON.stringify(data)
            })
            if((await response).status===200){
                toastr.success('Success','Employee Details Updated Successfully')
                setTimeout(() => {
                    naviagte('/Employee/Search')
                }, 1000);
            }
        } catch (error) {
            toastr.error('Error!', 'Employee could not update')
        }
      }

      function handleCancel(){
        naviagte('/Employee/Search')
      }

  return (
    <div className='emp' >
      <div className="heading">
        <div className='title'>
          <h1>Employee</h1>
          <small>Edit</small>
        </div>
        <div className='breadcrum'>
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span  >Employee</span> &gt;
          <span>Edit</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Employee Details</h1>
          <div className="row mt-4">
            
            <div className='col-12 col-md-4'>
            <label className='form-label fw-semibold'>First Name</label>
            <input className='form-control' type="text" name="firstName" placeholder='First Name' {...register('firstName',{required:'First Name is Required'})} />
            {errors.firstName && <p>{errors.firstName.message}</p> }
            </div>

            <div className='col-12 col-md-4 '>
            <label className='form-label  fw-semibold'>Last Name</label>
            <input className='form-control' type="text" name="lastName" placeholder='Last Name' {...register('lastName',{required:'Last Name is Required'})} />
            {errors.lastName && <p>{errors.lastName.message}</p> }
            </div>

            <div className='col-12 col-md-4'>
            <label className='form-label  fw-semibold'>Email</label>
            <input className='form-control' type="email" name="email" placeholder='Email id'
             {...register('email',{required:'Email is Required',pattern:{value: /^\S+@\S+\.\S+$/i,message: 'Invalid email format',}})} />
            {errors.email && <p>{errors.email.message}</p> }
            </div>

          </div>
          <div className="row mt-4">

            <div className='col-12 col-md-4'>
            <label className='form-label  fw-semibold'>Mobile Number</label>
            <input className='form-control' type="number" name="mobile" placeholder='Mobile Number' {...register('mobile',{required:'Mobile No is Required'})} />
            {errors.mobile && <p>{errors.mobile.message}</p> }
            </div>

            <div className='col-12 col-md-4'>
            <label className='form-label  fw-semibold'>Date of Birth</label>
            <input className='form-control' type="date" name="dob" placeholder='DOB' {...register('dob',{required:'DOB is Required'})} />
            {errors.dob && <p>{errors.dob.message}</p> }
            </div>

            <div className="col-12 col-md-4 mt-4 pt-3">
              <label  className="form-label fw-semibold me-2 ">Gender:</label>

              <div className="form-check form-check-inline">
              <input type="radio" name="gender" value='male' className='form-check-input' {...register('gender', { required: 'Gender is required' })} />
              <label className='ms-1 me-3' >Male</label>
              </div>

              <div className="form-check form-check-inline">
              <input type="radio" name="gender" value='female' className='form-check-input'  {...register('gender')} />
              <label className='ms-1 me-3' >Female</label>
              </div>
              {errors.gender && <p>{errors.gender.message}</p> }
            </div>

          </div>

          <div className="row mt-4">

            <div className="col-12 ">
              <label  className="form-label fw-semibold">Address</label>
              <textarea className="form-control" rows="4" name='address'  placeholder="Enter address" {...register('address',{required:'Address is required'})}></textarea>
              {errors.address && <p>{errors.address.message}</p>  }
            </div>
          </div>

          <div className="row mt-4">

            <div className="col-12 col-md-4">
              <label className='form-label fw-semibold'>Country</label>
              <select name="country" className='form-select'
              {...register('country',{required:'Country is Required'})}
              >
                <option value="">--Select--</option>
                {
                  countries.map((c,i)=>(
                    <option value={c} key={i} >{c}</option>
                  ))
                }
              </select>
              {errors.country && <p>{errors.country.message}</p>  }
            </div>

            <div className='col-12 col-md-4'>
                <label className='form-label fw-semibold'>City</label>
                {
                  isOtherCity?(
                    <>
                    <input type="text" name='city' className='form-control' placeholder='Enter City' {...register('city',{required:'City is Required'})} />
                    </>
                  ):(
                    <select name="city" className='form-select' disabled={!country} 
                style={{cursor:!country?'not-allowed':'auto'}}
                 {...register('city',{required:'City is Required'})}>
                  <option value="">--Select--</option>
                  {
                    cities[country]?.map((c,i)=>(
                      <option value={c} key={i}>{c}</option>
                    ))
                  }
                </select>
                  )
                }
                {errors.city && <p>{errors.city.message}</p>  }
            </div>

            <div className="col-12 col-md-4 mt-4 pt-2 ">
              <input type="checkbox" className='form-check-input me-2 ' name="othercity" checked={isOtherCity}  onChange={(e) => setIsOtherCity(e.target.checked)} />
              <label className='form-check-label'>Other City</label>
            </div>

          </div>

          <label className='form-label fw-semibold mt-4 fs-5' >Skills</label>
          <hr  />

          <div className="row">
            {
              skills.map((skill,i)=>(
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                  <input type="checkbox" value={skill} className='form-check-input me-2' {...register('skills')} />
                  <label className='form-check-label' >{skill}</label>
                </div>
              ))
            }
          </div>
          
          <div className='ops'>
            <button type='submit' className='btn btn-success me-2'>Update</button>
            <button type='button' onClick={handleCancel} className='btn btn-danger' >Cancel</button>
          </div>
          
      </form>
    </div>
  )
}

export default EmpUpdate