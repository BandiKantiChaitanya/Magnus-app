import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillDashboard,AiOutlineUserDelete  } from 'react-icons/ai'
import { FaMale,FaFemale } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import Swal from 'sweetalert2'
import '../App.css'

function EmpSearch() {
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const [loading,setLoading]=useState(true)
    const BASE_URL=import.meta.env.VITE_API_BASE_URL
    const token=localStorage.getItem('token')

    const [page,setPage]=useState(1)
    const [totalPages, setTotalPages] = useState(1);

    const [limit,setLimit]=useState(3)

    useEffect(()=>{
        fetchEmployee(page,limit)
        },[page,limit])
    function fetchEmployee(page,limit){
        fetch(`${BASE_URL}/allemp?page=${page}&limit=${limit},`,{
            method:'GET',
            headers:{
                'Content-Type':'application/JSON',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(res=>res.json())
        .then(response=>{
            setData(response.data)
            setLoading(!loading)
            setTotalPages(response.totalPages)
        })
        .catch(err=>console.log('Error Occured',err))
    }

    function handleUpdate(id){
        navigate(`/Employee/Edit/${id}`)
    }
    function handleDelete(id){
        Swal.fire({
            title:'',
            text:'Are you sure you want to Delete?',
            icon:'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
        }).then((del)=>{
            if(del.isConfirmed){
                fetch(`${BASE_URL}/delEmp/${id}`,{
                    method:'DELETE',
                    credentials:'include',
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                })
                .then((res)=>{
                    if(res.ok){
                        fetchEmployee()
                        Swal.fire({
                            icon:'success',
                            title:'Deleted',
                            timer:1500,
                            showConfirmButton: false,
                        })
                    }else{
                        Swal('Error in Deleting',{
                            icon:'error'
                        })
                    }
                })
                .catch(err=>console.log("Error Occured",err))
            }
        })
    }


    // pagination

    const [pageInput,setPageInput]=useState(page.toString())

    useEffect(() => {
    setPageInput(page.toString())
    }, [page]);

    function onPageInput(e){
        const val=e.target.value

        if(val===''){
            setPageInput('')
            return 
        }

        if(/^\d+$/.test(val)){
            setPageInput(val)
        }
    }

    function onPageBlur(){
        const val=Number(pageInput)
        if(val>=1 && val<=totalPages){
            setPage(val)
        }else{
            setPageInput(page.toString())
        }
    }

    // sorting
    const [sortConfig,setSortConfig]=useState({
        key:null,
        direction:null
    })

    function handleSort(key){
        setSortConfig(prev=>{
            if(prev.key===key){
                return{
                    key,
                    direction:prev.direction==='asc'?'desc':'asc'
                }
            }
            return {key,direction:'asc'}
        })
    }

    function parseDate(dateStr) {
        const d = new Date(dateStr)
        const day = String(d.getDate()).padStart(2, '0')
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const year = d.getFullYear()
        return `${day}/${month}/${year}`
    }

    const sortedData=useMemo(()=>{
        if(!sortConfig.key) return data

        return [...data].sort((a,b)=>{
            let valA = a[sortConfig.key]
            let valB = b[sortConfig.key]

             if (sortConfig.key === 'dob') { 
                valA = valA ? parseDate(valA) : 0
                valB = valB ? parseDate(valB) : 0
            } else {
                valA = valA?.toString().toLowerCase() || ''
                valB = valB?.toString().toLowerCase() || ''
                }

            if (sortConfig.direction === 'asc') {
                return valA > valB ? 1 : valA < valB ? -1 : 0;
            } else {
                return valA < valB ? 1 : valA > valB ? -1 : 0;
            }
        })
    },[data,sortConfig])

    function renderSortIcon(key){
        if(sortConfig.key!==key) return <i className="bi bi-arrow-down-up ms-1"></i>;

        return sortConfig.direction==='asc'?(
            <i className="bi bi-sort-down-alt ms-1"></i>
        ):(
            <i className="bi bi-sort-up-alt ms-1 descending-icon"></i>
            
        )
        
    }

    // search by name and mobile
    const [searchData,setSearchData]=useState({
        name:'',
        mobile:''
    })

    function onChangeSearch(e){
        const {name,value}=e.target
        setSearchData(prev=>({
            ...prev,
            [name]:value
        }))
        // setSearchData({...searchData,[name]:value})
    }

    async function handleSearch(e){
        e.preventDefault()
        const name=searchData.name.trim()
        // const name=searchData.name.replace(/\s+/g, '')
        const mobile=searchData.mobile
        if(name&& mobile){
           const response=await fetch(`${BASE_URL}/searchEmp?name=${name}&mobile=${mobile}`,{
                method:'GET',
                credentials:'include',
                headers:{
                    'Authorization':`Bearer ${token}`,
                    'Content-Type':'application/JSON'
                }
            })
            setData((await response.json()).data)
        }else if(name){
            const response=await fetch(`${BASE_URL}/searchEmp?name=${name}`,{
                method:'GET',
                credentials:'include',
                headers:{
                    'Authorization':`Bearer ${token}`,
                    'Content-Type':'application/JSON'
                }
            })
            setData((await response.json()).data)
        }else if(mobile){
            const response=await fetch(`${BASE_URL}/searchEmp?mobile=${mobile}`,{
                method:'GET',
                credentials:'include',
                headers:{
                    'Authorization':`Bearer ${token}`,
                    'Content-Type':'application/JSON'
                }
            })
            setData((await response.json()).data)
        }
    }

    function handleCancel(){
        fetchEmployee()
        setSearchData({
            name:'',
            mobile:''
        })
    }


    

  return (
    <div className='emps' >
        <div className="emp">
            <div className="heading">
            <div className="title">
                <h1>Employee</h1>
                <small>Search</small>
            </div>
            <div className="breadcrum">
                <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
                <span  >Employee</span> &gt;
                <span>Search</span>
            </div>
        </div>
        </div>
        <div className="content">
            <div className="d-flex justify-content-between">
            <h1>Search Employee</h1>
                <button className='btn btn-primary '><Link to='/Employee/Create' style={{textDecoration:'none',color:'white'}} >Add Employee</Link></button>
            </div>
            <hr />
            <form onSubmit={handleSearch}>
                <div className="row"  >
                <div className="col-12 col-md-4">
                    <label className='form-label' >Name</label>
                    <input type="text" name="name" value={searchData.name} onChange={onChangeSearch} className='form-control' placeholder='Employee Name' />
                </div>
                
                <div className="col-12 col-md-4">
                    <label className='form-label' >Mobile No</label>
                    <input type="number" name="mobile" value={searchData.mobile} onChange={onChangeSearch}  className='form-control' placeholder='Mobile No' />
                </div>

                <div className="col-12 col-md-4 mt-4 p-2 d-flex  ">
                   <div>
                     <button className='btn btn-success me-2' type='submit'  >Search</button>
                    <button className='btn btn-danger me-2' type='button' onClick={handleCancel} >Cancel</button>
                   </div>
                    <div>
                    <label className='me-1'>Limit:</label>
                    <input type="number" name="limit" min={0} onChange={(e)=>{setLimit(e.target.value)}} value={limit} className='mt-1' style={{width:'40px'}} />    
                    </div>
                </div>
            </div>
            </form>
            
            <div className='table-responsive mt-4' >
                <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    <th onClick={()=>handleSort('firstName')} >
                        <div className='d-flex align-items-center' >
                            First Name{renderSortIcon('firstName')}
                        </div>
                    </th>
                    <th onClick={()=>handleSort('lastName')} >
                        <div className="d-flex align-items-center">
                            Last Name {renderSortIcon('lastName')}    
                        </div>
                    </th>
                    <th onClick={()=>handleSort('mobile')} > 
                        <div className="d-flex align-items-center">
                            Mobile No {renderSortIcon('mobile')}
                        </div>
                    </th>
                    <th  className="text-center align-middle" >
                        <div className="d-flex align-items-center">
                            Email id
                        </div>
                    </th>
                    <th  className="text-center align-middle" >
                        <div className="d-flex align-items-center">
                            Gender
                        </div>
                    </th>
                    <th onClick={()=>handleSort('dob')} >
                         <div className="d-flex align-items-center">
                            Birth Date {renderSortIcon('dob')}
                         </div>
                    </th>
                    <th onClick={()=>handleSort('country')}  className="text-center align-middle"  > 
                        <div className="d-flex align-items-center">
                            Country {renderSortIcon('country')}
                        </div>
                    </th>
                    <th onClick={()=>handleSort('city')} className="text-center align-middle"  > 
                            City {renderSortIcon('city')}
                    </th> 
                    <th  className="text-center align-middle" >Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        sortedData?.length===0 &&(
                            <tr>
                                <td colSpan='9' className='text-center text-muted' >
                                    No matching records found
                                </td>
                            </tr>
                        )
                    }
                    
                    {
                        sortedData.length>0 && sortedData.map(emp=>(
                            <tr key={emp._id} >
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.mobile}</td>
                                <td>{emp.email}</td>
                                <td className='text-center text-primary fs-4'  >
                                    {emp.gender === 'male' ? <FaMale /> : <FaFemale />}
                                </td>
                                <td>
                                    {(() => {
                                        const d = new Date(emp.dob);
                                        const day = String(d.getDate()).padStart(2, '0');
                                        const month = String(d.getMonth() + 1).padStart(2, '0');
                                        const year = d.getFullYear();
                                        return `${day}/${month}/${year}`;
                                    })()}
                                </td>
                                <td>{emp.country}</td>
                                <td>{emp.city}</td>
                                <td className='d-flex justify-content-between'>
                                    <button className='btn btn-success' onClick={()=>handleUpdate(emp._id)} ><LiaUserEditSolid /></button>
                                    <button className='btn btn-danger'  onClick={()=>handleDelete(emp._id)} ><AiOutlineUserDelete /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>

            <div className='buttons'  >
                <button className='btn btn-outline-primary text-dark' onClick={() => setPage(1)} disabled={page === 1}>First</button>
                <button className='btn btn-outline-primary text-dark' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <input type="text" className='pagination-input'  min={1} max={totalPages} value={pageInput} onChange={onPageInput} onBlur={onPageBlur} onKeyDown={(e)=>{
                    if(e.key=='Enter'){
                        e.target.blur()
                    }
                }}    />
                <span className='page-info' >of {totalPages} pages</span>
                <button className='btn btn-outline-primary text-dark' onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
                <button className='btn btn-outline-primary text-dark' onClick={() => setPage(totalPages)} disabled={page === totalPages}>Last</button>
                {/* <button onClick={prevPage} disabled={page<=1} >Prev</button> */}
                
                {/* <button onClick={nextPage} disabled={page>=totalPages-1} >Next</button> */}
            </div>

        </div>
    </div>
  )
}

export default EmpSearch