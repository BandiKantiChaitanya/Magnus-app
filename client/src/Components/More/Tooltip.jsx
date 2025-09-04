import React,{useState} from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Tooltip() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isClicked,setIsclicked]=useState(false)
  const [text,setText]=useState('You have not clicked this Button yet.Please click me and check the tooltip.')

  function handleBtn(){
    setText('Thank you for being here!')
    setIsclicked(true)
  }
    return (
    <div className='tabs tooltp'>
        <div className="heading">
        <h1>Tooltip</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>Tooltip</span>
        </div>
      </div>
      <div className="bg-white">
       <div className="d-flex tab-buttons" style={{gap:'10px'}}>
            <button className='btn custom-tab active-tab' >Tooltip</button>
        </div>
        <div className="tab-content " style={{padding:'40px', border: '1px solid #ccc' }}>
                <button className={`btn btn-primary ${isClicked ? 'clicked-btn' : ''}`} onClick={handleBtn} onMouseEnter={()=>{setShowTooltip(true)}} onMouseLeave={()=>{setShowTooltip(false)}} >Check the Tooltip before you Click.</button>
            {showTooltip &&(
                <div className="tooltip2">{text}
                <div className="tooltip2-arrow"/>
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Tooltip