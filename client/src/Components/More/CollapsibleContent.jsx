import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'
import { FaPlus,FaMinus } from 'react-icons/fa'

function CollasibleContent() {
  const [activeTab,setActiveTab]=useState('tab1')

  const tabContent={
    tab2:(
      <div className='d-flex flex-column gap-2 tab1-collapse-container '  >
        <button className='btn btn-secondary d-flex justify-content-between align-items-center w-100 collapsed' data-bs-toggle='collapse' data-bs-target='#btn1' aria-expanded="false" ><span>Collapse One</span> <span className="icon-toggle"><FaPlus className="plus-icon" /> <FaMinus className="minus-icon" /></span> </button>
        <div className='collapse' id='btn1'  >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt similique omnis. Sint quaerat laudantium ratione impedit vero magnam fugiat exercitationem ipsa voluptates voluptate, maiores labore itaque laboriosam iste!
            Sit, distinctio. Ea fugit esse facilis! Soluta omnis, ipsum neque natus debitis vitae ad minus dolores quisquam pariatur quis voluptate sed porro repellendus animi, quia provident eos, ab esse rerum!
            Veniam nam cupiditate illo, corporis voluptatem, doloremque expedita sunt sapiente quasi totam dolorum quidem accusantium dolores excepturi impedit nulla earum! Fuga eum similique perspiciatis excepturi vitae quis voluptatem voluptas nulla.
            Reprehenderit ea repudiandae molestiae? Architecto alias quia iure assumenda. Ullam, beatae. Possimus dolor adipisci, dignissimos, id quis sequi magnam eaque laborum sed delectus in voluptatibus sapiente illo illum neque expedita.
            Exercitationem voluptates voluptas sapiente neque non eos explicabo rerum delectus odio, aspernatur sequi magnam hic modi cum voluptate reiciendis deleniti eaque praesentium optio excepturi temporibus at ex facilis quod. Ea!
            </p>
        </div>
        <button className='btn btn-secondary d-flex justify-content-between align-items-center w-100 collapsed' data-bs-toggle='collapse' data-bs-target='#btn2' aria-expanded="false" ><span>Collapse Two</span> <span className="icon-toggle"><FaPlus className="plus-icon" /> <FaMinus className="minus-icon" /></span> </button>
        <div className='collapse' id='btn2'  >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt similique omnis. Sint quaerat laudantium ratione impedit vero magnam fugiat exercitationem ipsa voluptates voluptate, maiores labore itaque laboriosam iste!
            Sit, distinctio. Ea fugit esse facilis! Soluta omnis, ipsum neque natus debitis vitae ad minus dolores quisquam pariatur quis voluptate sed porro repellendus animi, quia provident eos, ab esse rerum!
            Veniam nam cupiditate illo, corporis voluptatem, doloremque expedita sunt sapiente quasi totam dolorum quidem accusantium dolores excepturi impedit nulla earum! Fuga eum similique perspiciatis excepturi vitae quis voluptatem voluptas nulla.
            Reprehenderit ea repudiandae molestiae? Architecto alias quia iure assumenda. Ullam, beatae. Possimus dolor adipisci, dignissimos, id quis sequi magnam eaque laborum sed delectus in voluptatibus sapiente illo illum neque expedita.
            Exercitationem voluptates voluptas sapiente neque non eos explicabo rerum delectus odio, aspernatur sequi magnam hic modi cum voluptate reiciendis deleniti eaque praesentium optio excepturi temporibus at ex facilis quod. Ea!
            </p>
        </div>
         <button className='btn btn-secondary d-flex justify-content-between align-items-center w-100 collapsed' data-bs-toggle='collapse' data-bs-target='#btn3' aria-expanded="false" ><span>Collapse Three</span> <span className="icon-toggle"><FaPlus className="plus-icon" /> <FaMinus className="minus-icon" /></span> </button>
        <div className='collapse' id='btn3'  >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iusto nesciunt similique omnis. Sint quaerat laudantium ratione impedit vero magnam fugiat exercitationem ipsa voluptates voluptate, maiores labore itaque laboriosam iste!
            Sit, distinctio. Ea fugit esse facilis! Soluta omnis, ipsum neque natus debitis vitae ad minus dolores quisquam pariatur quis voluptate sed porro repellendus animi, quia provident eos, ab esse rerum!
            Veniam nam cupiditate illo, corporis voluptatem, doloremque expedita sunt sapiente quasi totam dolorum quidem accusantium dolores excepturi impedit nulla earum! Fuga eum similique perspiciatis excepturi vitae quis voluptatem voluptas nulla.
            Reprehenderit ea repudiandae molestiae? Architecto alias quia iure assumenda. Ullam, beatae. Possimus dolor adipisci, dignissimos, id quis sequi magnam eaque laborum sed delectus in voluptatibus sapiente illo illum neque expedita.
            Exercitationem voluptates voluptas sapiente neque non eos explicabo rerum delectus odio, aspernatur sequi magnam hic modi cum voluptate reiciendis deleniti eaque praesentium optio excepturi temporibus at ex facilis quod. Ea!
            </p>
        </div>
      </div>
    ),
    tab1:(
     <div className='accordian' id='tab-accordian' >
      <div className="accordian-item mb-2">
        <button className='btn btn-secondary d-flex justify-content-between align-items-center w-100 ' data-bs-target='#tab-acc1' data-bs-toggle='collapse'  >
          <span>Collaborate with Colleagues</span>
          <span className='icon-toggle' ><FaPlus className="plus-icon" /> <FaMinus className="minus-icon" /></span>
        </button>
      <div data-bs-parent='#tab-accordian' className='accordion-collapse collapse ' id='tab-acc1' >
        <div className="accordian-body mt-2">
          <p>Effective collaboration with colleagues fosters a healthy work environment and enhances productivity. 
            By sharing ideas, offering support, and respecting diverse perspectives, teams can solve problems more 
            creatively and efficiently. Communication plays a vital role in building trust and ensuring everyone 
            is aligned toward shared goals. Collaboration not only improves results but also strengthens professional 
            relationships and promotes mutual growth.</p>
        </div>
      </div>
      </div>
      <div className="accordian-item mb-2">
        <button className='btn btn-secondary d-flex justify-content-between align-items-center w-100 ' data-bs-target='#tab-acc2' data-bs-toggle='collapse'  >
          <span>Learn Anything Quickly</span>
          <span className='icon-toggle' ><FaPlus className="plus-icon" /> <FaMinus className="minus-icon" /></span>
        </button>
      <div data-bs-parent='#tab-accordian' className='accordion-collapse collapse ' id='tab-acc2' >
        <div className="accordian-body mt-2 ">
        <p>Learning anything quickly requires focused attention, effective strategies, and consistent practice. 
          Techniques like breaking topics into small chunks, using visual aids, and applying what you learn immediately 
          help reinforce new information. Active recall and spaced repetition also boost retention. Eliminating distractions
           and maintaining a curious mindset are key. When approached with discipline and interest, rapid learning becomes 
           not just possible but enjoyable.
        </p>
        </div>
      </div>
      </div>
      <div className="accordian-item mb-2">
        <button className='btn btn-secondary d-flex justify-content-between align-items-center w-100 ' data-bs-target='#tab-acc3' data-bs-toggle='collapse'  >
          <span>Reasons People Give Up on Their Goals Too Early</span>
          <span className='icon-toggle' ><FaPlus className="plus-icon" /> <FaMinus className="minus-icon" /></span>
        </button>
      <div data-bs-parent='#tab-accordian' className='accordion-collapse collapse ' id='tab-acc3' >
        <div className="accordian-body mt-2">
        <p>People often give up on their goals too early due to fear of failure, lack of motivation, or unrealistic expectations. 
          When results don’t come quickly, doubt can creep in, making the effort feel pointless. Without a clear plan or strong 
          purpose, it's easy to lose focus. External pressures and comparisons can also undermine confidence, leading individuals 
          to abandon dreams before real progress is made.</p>
        </div>
      </div>
      </div>
      <div className="accordian-item mb-2">
        <button className='btn btn-secondary d-flex justify-content-between align-items-center w-100 ' data-bs-target='#tab-acc4' data-bs-toggle='collapse'  >
          <span>Signs of Settling for Less in Life</span>
          <span className='icon-toggle' ><FaPlus className="plus-icon" /> <FaMinus className="minus-icon" /></span>
        </button>
      <div data-bs-parent='#tab-accordian' className='accordion-collapse collapse ' id='tab-acc4' >
        <div className="accordian-body mt-2">
        <p>Settling for less in life often shows up as constant dissatisfaction, lack of enthusiasm, or feeling stuck in 
          unfulfilling situations. People may avoid risks, ignore their passions, or accept unhealthy relationships out of fear or comfort. When dreams are postponed indefinitely and personal growth is neglected, it's a sign one may be living below their true potential, compromising long-term happiness for short-term stability.</p>
        </div>
      </div>
      </div>
     </div>
    )
  }

  return (
    <div className="tabs">
      <div className="heading">
        <h1>Collapsible Content</h1>
        <div className="breadcrum">
          <Link to='/Home/Index' ><AiFillDashboard className='me-1 fs-6' />Home</Link> &gt;
          <span>More</span>&gt;
          <span>Collapsible Content</span>
        </div>
      </div>
      <div className="bg-white">
        <div className="d-flex tab-buttons" style={{gap:'10px'}} >
            <button className={`btn custom-tab ${activeTab==='tab1'?'active-tab':''}`} onClick={()=>setActiveTab('tab1')}  >Single Collapse</button>
            <button className={`btn custom-tab ${activeTab==='tab2'?'active-tab':''}`} onClick={()=>setActiveTab('tab2')}  >Multiple Collapse</button>
        </div>
         <div className="tab-content" style={{padding:'40px', border: '1px solid #ccc' }}>
                {tabContent[activeTab]}
            </div>
      </div>
    </div>
  )
}

export default CollasibleContent