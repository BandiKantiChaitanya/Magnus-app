import React,{useState} from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { Link } from 'react-router-dom'



function MultipleTabs() {

   const [activeTab, setActiveTab] = useState('tab1');
   const [formData,setFormData]=useState({
    input1:'',input2:'',
    input3:'',input4:'',
    input5:'',input6:'',
   })

   function handleChange(e){
    const {name,value}=e.target
    setFormData(prev=>({
      ...prev,
      [name]:value
    }))
   }
  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <div>
               <p>Congratulations, You are in the best place to learn the technologies for JOB. Please strictly follow the plan for the first 45 days to see the unbelievable results.</p>
               <p>You must UNLEARN to LEARN new things every day as technologies are changing faster than ever and Because the old rules will no longer apply...and so your old knowledge is. It's time for us to think beyond.</p>
               <p>It's not just learning technologies, Also You learn how to use your knowledge and experience to get a job in less than 100 days.</p>
               <div className="d-flex gap-3">
                <input type="text" name="input1"  value={formData.input1} onChange={handleChange} />
               <input type="text" name="input2" value={formData.input2} onChange={handleChange} />
               </div>
            </div>;
      case 'tab2':
        return <div>
          <p>Unlearning is the process of realizing that something which we learned earlier is incorrect, ineffective, or obsolete, admitting it and deciding to erase such bad conditioning and 
            misconceptions from our mind for good. It is the process of exploring what we have stored in our system and deleting all the unnecessary data. It is the process of saying bye to an old, 
            obsolete, and outdated paradigm and embracing a new paradigm and willingly undergoing a paradigm shift.</p>
            <p>Unfortunately, we are controlled by myths which do not allow us to open our eyes to reality</p>
            <div className="d-flex gap-3">
                <input type="text" name="input3"  value={formData.input3} onChange={handleChange} />
               <input type="text" name="input4" value={formData.input4} onChange={handleChange} />
               </div>
        </div>;
      case 'tab3':
        return <div>
          <p>The first step towards becoming an “unlearned” is not just to have a thirst for knowledge but to question our knowledge. Discussing our knowledge with those who are competent
             in a particular field, being challenged constantly, and being ready to be proved wrong will help us understand whether what we have learned is still relevant or obsolete.
              It is also important to question one’s belief system and check whether we are treating myths as scientific facts.</p>
              <p>The next important step is to take steps to develop creative and critical thinking.</p>
               <div className="d-flex gap-3">
                <input type="text" name="input5"  value={formData.input5} onChange={handleChange} />
               <input type="text" name="input6" value={formData.input6} onChange={handleChange} />
               </div>
        </div>;
      default:
        return null;
    }
  }
  
   
  return (
    
    <div className='moreHeadings tabs' >
      <div className="heading">
        <h1>Tabs</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>Tabs</span>
        </div>
      </div>
     <div className='bg-white'>
       <div className='d-flex tab-buttons  ' style={{gap:'10px'}} >
          <button className={`btn custom-tab ${activeTab==='tab1'?'active-tab':''} `} onClick={() => setActiveTab('tab1')}  >Plan to succced</button>
          <button className={`btn custom-tab ${activeTab==='tab2'?'active-tab':''} `} onClick={() => setActiveTab('tab2')}  >UnLearning</button>
          <button className={`btn custom-tab ${activeTab==='tab3'?'active-tab':''} `} onClick={() => setActiveTab('tab3')} >Ways of Learning</button>
      </div>
      <div className='tab-content' style={{padding:'40px', border: '1px solid #ccc' }}>
        {renderContent()}
      </div>
     </div>

    </div>
  )
}

export default MultipleTabs