import React,{useContext, useState,useEffect} from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import LoginContext from './Components/Context/LoginContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function Login() {

    const [login,setLogin]=useContext(LoginContext)
    const navigate=useNavigate()
    const [error,setError]=useState('')

    const [rememberMe, setRememberMe] = useState(false)

    const {register,handleSubmit,formState:{errors},setValue}=useForm()

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword'); 

        if (rememberedEmail) {
            setValue('email', rememberedEmail);
            setRememberMe(true);
        }
        if (rememberedPassword) {
            setValue('password', rememberedPassword);
        }
        }, []);


    const BASE_URL=import.meta.env.VITE_API_BASE_URL
    async function onSubmit(formData){
        try {
             const res=await fetch(`${BASE_URL}/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/JSON'
                },
                body:JSON.stringify(formData),
                credentials:'include'
             })
             const data=await res.json()
             if(res.status==200){
                setLogin(!login)
                const token=data.token
                // console.log(res,'hi')
                localStorage.setItem('token',token)
                navigate('/Home/Index')
                if (rememberMe) {
                    localStorage.setItem('rememberedEmail', formData.email)
                    localStorage.setItem('rememberedPassword',formData.password)
                } else {
                    localStorage.removeItem('rememberedEmail')
                    localStorage.removeItem('rememberedPassword')
                }
             } else {
                setError(data.message || 'Login failed')
            }
            //  console.log(res)
        } catch (error) {
            console.log('Error Occured',error)
        }
    }


  return (
    <div className='pt-5' style={{minHeight:'100vh',backgroundColor:'#ecf0f5'}} >
        <h3 className='text-center'>Jala Academy</h3>
            <div className="text-center">
                Use the below details to login
                <p>Email : training@jalaacademy.com</p>
                <p style={{marginTop:'-20px',marginBottom:'-20px'}} >Password : jobprogram</p>
            </div>
       <div className="container login mx-auto w-25 mb-">
         <form method="post" onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-4 text-center mt-0">
                <h4>Sign In</h4>
            </div>
            <div className='mb-4' >
                <label className='form-label' >Email</label>
                <div className="input-icon">
                    <input className='form-control'  type="email" name="email" {...register('email',{required:'Email is Required'})} /><MdEmail  className='icon' />
                </div>
                    {errors.email && <p className='text-danger' >{errors.email.message}</p> }
            </div>
            <div className='mb-4' >
                <label className="form-label">Password</label>
                <div className="input-icon">
                <input type="password" name="password" className="form-control" {...register('password',{required:'Password is Required'})} /><FaLock className='icon' />
                </div>
                {errors.password && <p className="text-danger">{errors.password.message}</p> }
            </div>
            {error.length>0 && <p className='text-danger text-center'>{error}</p>}
            <div className='mb-4 d-flex justify-content-between' >
               <div> <input type="checkbox" className='me-1 fs-2'  checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} /><label htmlFor="">Remember Me</label></div>
                <button className='btn btn-submit' type='submit' >Submit</button>
            </div>
            <div className='text-center ' >
                <p className='text-cente fs-5' >-OR-</p>
                <button className='btn mb-2 w-100 btn-forgot' type='button' onClick={()=>{navigate('/Account/ForgotPassword')}} >Forgot Password</button>
                <p className='text-center' ><a href="" className='text-decoration-none' >Admin Login</a></p>
            </div>
        </form>
       </div>
    </div>
  )
}

export default Login