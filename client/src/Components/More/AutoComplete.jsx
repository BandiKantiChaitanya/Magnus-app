import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'
import { Autocomplete, TextField } from '@mui/material';

function AutoComplete() {

    const [activeTab,setActiveTab]=useState('tab1')
    const options = ['ActionScript', 'Bash', 'C', 'Clojure', 'Dart', 'Elixir', 'Go', 'Haskell', 'Java', 'JavaScript', 'Kotlin', 'Lua', 'PHP', 'Python', 'Scala'];

    const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState('')

    const [mulvalue, setMulValue] = useState([])
    const [inputMul,setInputMul]=useState('')
    
  const filteredOptions =
    inputValue.length > 0
      ? options.filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

      const filteredOptionsMultiple =
  inputMul.length > 0
    ? options.filter(option =>
        option.toLowerCase().includes(inputMul.toLowerCase())
      )
    : [];
    const tabContent={
        tab1:(
            <>
            <h4>Tags:</h4>
            <Autocomplete
                options={filteredOptions}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                renderInput={(params) => <TextField {...params} label="" />}
                freeSolo={false}
                open={filteredOptions.length > 0}  // Open dropdown only if filteredOptions not empty
                disableClearable={false}
                popupIcon={null} // removes the dropdown arrow icon
                openOnFocus={false}// don't open dropdown just on focus or click
                autoHighlight
                noOptionsText="" 
                />
            </>
        ),
        tab2:(
            <>
            <h4>Tags:</h4>
                <Autocomplete
                    multiple
                    options={filteredOptionsMultiple}
                    value={mulvalue} 
                    onChange={(event, newValue) => {
                        setMulValue(newValue)
                        setInputMul('');     
                    }}
                    inputValue={inputMul}
                    onInputChange={(event, newInputValue, reason) => {
                        if (reason !== 'reset') {
                        setInputMul(newInputValue);
                        }
                    }}
                    renderInput={(params) => <TextField {...params} label="" />}
                    open={inputMul.length > 0 && filteredOptionsMultiple.length > 0}
                    popupIcon={null}
                    openOnFocus={false} 
                    noOptionsText=""
                    autoHighlight
                    disableClearable={false}
                    filterSelectedOptions
                    />
            </>
        )
    }
  return (
    <div className='tabs' >
        <div className="heading">
        <h1>Autocomplete</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span> &gt;
          <span>Autocomplete</span>
        </div>
      </div>
      <div className="bg-white">
            <div className="d-flex tab-buttons" style={{gap:'10px'}}>
                <button className={`btn custom-tab ${activeTab==='tab1'?'active-tab':''}`} onClick={()=>{setActiveTab('tab1')}}  >Single Values</button>
                <button className={`btn custom-tab ${activeTab==='tab2'?'active-tab':''}`} onClick={()=>{setActiveTab('tab2')}}  >Multiple Values</button>
            </div>
            <div className="tab-content" style={{padding:'40px', border: '1px solid #ccc' }}>
                {tabContent[activeTab]}
            </div>
        </div>
    </div>
  )
}

export default AutoComplete