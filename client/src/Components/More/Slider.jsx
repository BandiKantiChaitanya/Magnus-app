import React, { useState,useRef,useEffect    } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Slider() {
    const [count,setCount]=useState(3)
    const [showTooltip, setShowTooltip] = useState(false)
    const rangeRef = useRef(null)

    useEffect(() => {
    const range = rangeRef.current;
    if (range) {
        const min = Number(range.min);
        const max = Number(range.max);
        const percent = ((count - min) / (max - min)) * 100;
        range.style.setProperty('--percent', `${percent}%`);
    }
    }, []);

    const getTooltipPosition = () => {
    const range = rangeRef.current;
    if (!range) return 0;

    const min = Number(range.min);
    const max = Number(range.max);
    const percent = (count - min) / (max - min);

    const sliderWidth = range.offsetWidth;
    const thumbWidth = 25;

    
    const position = percent * (sliderWidth - thumbWidth) + (thumbWidth / 2);

    return position+25;
    };




  return (
    <div className="tabs">
        <div className="heading">
        <h1>Slider</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>Slider</span>
        </div>
      </div>
      <div className="bg-white">
        <div className="d-flex tab-buttons" style={{gap:'10px'}}>
            <button className='btn custom-tab active-tab' >Slider</button>
        </div>
       <div className=" slider-wrapper" style={{padding:'40px', border: '1px solid #ccc' }}>
           <input className='slider' type="range" name="" id="" min='1' max='100' ref={rangeRef} value={count} onChange={(e)=>{const val = Number(e.target.value);
    setCount(val);
    const percent = ((val - 1) / 99) * 100;
    rangeRef.current.style.setProperty('--percent', `${percent}%`);}} onMouseEnter={()=>{setShowTooltip(true)}}  onMouseLeave={() => setShowTooltip(false)}  onMouseMove={() => setShowTooltip(true)} />
            {showTooltip && (
                <div className="slider-tooltip" style={{ left: `${getTooltipPosition()}px` }}>
                    {count}
                    <div className="slider-tooltip-arrow" />
                </div>
            )}
            <p>Current Slider Value: {count}</p>
        </div>
      </div>
    </div>
  )
}

export default Slider