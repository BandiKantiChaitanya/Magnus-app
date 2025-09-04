import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'
import toastr from 'toastr'

function Image() {
    const [fileName,setFileName]=useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null)

    function handleFileChange(e){
        const file = e.target.files[0]
        if(file){
            const res=file.name.split('.')[0]
            setFileName(res)
            setSelectedFile(file)
        }else{
            setFileName('')
            setSelectedFile(null)
        }
    }

    const BASE_URL=import.meta.env.VITE_API_BASE_URL
    const token=localStorage.getItem('token')

    async function handleSubmit(e){
        e.preventDefault()
        if(!selectedFile){
            toastr.error('Please Select a file', 'Error!')
        }
        else{
        const formData = new FormData()
        formData.append('image',selectedFile)
        // console.log(formData.image)
            try {
            const res=await fetch(`${BASE_URL}/update`,{
                method:'PUT',
                headers:{
                    'Authorization':`Bearer ${token}`,
                    // 'Content-Type':'Application/JSON'
                },
                credentials:'include',
                body:formData
            })
            const result=await res.json()
            if(res.status==200){
                toastr.success('Success','Image Uploaded Succesfully')
                setSelectedFile(null)
                setFileName('')
                fileInputRef.current.value = ''
                if (result.user.image && result.user.image.length > 0) {
                    setImgs(prev => [...result.user.image.reverse(), ...prev]); // show newest first
                }
                // console.log(result.user.image)
            }else{
                toastr.error('Error',`${result.message}`)
            }
        } catch (error) {
            toastr.error('Error','ERror Occured!')
            console.log('Error Occured!',error)
        }
        }
    }
    
    async function handleDel(url){
        try {
            const response=await fetch(`${BASE_URL}/del`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                     'Content-Type': 'application/json'
                },
                credentials:'include',
                body:JSON.stringify({imageUrl:url})
            })
            // const data=await response.json()
            if(response.status==200){
                toastr.success('Deleted Succesfully')
                setImgs(prev => prev.filter(img => img !== url));
            }
        } catch (error) {
            console.log('Error Occured',error)
        }
    }

    const [imgs,setImgs]=useState([])
    useEffect(()=>{
        fetch(`${BASE_URL}/images`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`
            },
            credentials:'include'
        })
        .then(res=>res.json())
        .then(data=>setImgs(data.images.reverse()))
        .catch(err=>console.log('Error Occured',err))
    },[])
    

  return (
    <div className="tabs">
        <div className="heading">
        <h1>Uploading/Downloading Image</h1>
        <div className="breadcrum">
            <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
            <span>More</span> &gt;
            <span>Menu</span>
        </div>
        </div>
        <form onSubmit={handleSubmit} >
        <div className='row' >
        <div className='col-12 col-md-5'>
            <label htmlFor="" className='form-label' >Select File :</label>
            <input type="file" onChange={handleFileChange} ref={fileInputRef}  className='form-control' accept='image/*' />
        </div>
        <div className='col-12 col-md-5' >
            <label htmlFor="" className='form-label' >File Name :</label>
            <input type="text" value={fileName} readOnly className='form-control' />
        </div>
        <div className='col-12 col-md-2 mt-4 pt-2' >
            <button className='btn btn-success' type='submit' >Upload</button>
        </div>
        </div>
        
        </form>

        <div className='mt-4' >
            <h3>List of Images:</h3>
            {imgs?.length>0 &&
                <div style={{marginTop:'50px'}} className='row' >
                    {imgs.map((img,i)=>(
                        <div className='col-md-3 mb-4' key={i}  >
                            <div className="card position-relative">
                                <button className="btn-close position-absolute" type='button' style={{ top: '5px', right: '5px', zIndex: 1 }} onClick={()=>{handleDel(img)}} ></button>
                            </div>
                            <img  className='card-img-top' src={img} key={i} />
                        </div>
                    ))}
                </div>
            }
        </div>
    </div>
  )
}

export default Image