import React from 'react'
import '../App.css'


function Home() {
  return (
    <div className='home' >
      <div className='heading'>
        <h2>Welcome to JALA Academy</h2>
        <p>The world's best up-skilling academy</p>
      </div>
      
        <p className='para'>
          Do you want to learn Selenium/cucumber Automation completely with Practical Scenarios in 7 Days? Use this website to find all the scenarios at one place.<br/>
          To understand or test RESTful APIs, use the JALA Academy FREE live APIs. Seach on Google with the keyword "JALA Academy Postman APIs"
          </p>
      <div className='box' >
        <p>You learn Everything by doing projects if you are very serious to gat a software job in 90 days <a href="https://jalaacademy.com/" target="_blank">http://jalatechnologies.com</a></p>
        <p>Don't forget to read our website JALA Academy completley to know more opportunities</p>
      </div>
      <div className="highlight">
        <p>If you are a working professional, Up-skill with JALA Academy Job Guarantee Programs to keep your Job secure for 10 Years</p>
      </div>
    </div>
  )
}

export default Home