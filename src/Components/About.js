import React from 'react'
import { useState } from 'react'

export default function About() {
  const [CustomStyle,setCustomStyle]=useState({color:"black", backgroundColor:"white"})
  const [btn,setbtn]=useState('Dark')
   function handleclick(){
if(btn==='Dark'){
  setCustomStyle({color:"white",backgroundColor:"black"})
  setbtn('Light')
}
else{
  setCustomStyle({color:"black", backgroundColor:"white"})
  setbtn('Dark')
}
   }
 
  return (
    <>
    <div className="container my-5" style={CustomStyle} >
        <h3>About Us</h3>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={CustomStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Text Manipulation Made Easy</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Welcome to our text manipulation app! We're dedicated to simplifying your text editing experience. Whether you're looking to transform text effortlessly or enhance readability, our app is designed to meet your needs.
      From basic formatting adjustments to concise summaries, our goal is to empower users with efficient text manipulation capabilities. Join us and discover how easy and enjoyable text editing can be!</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
    </h2>
  </div>
</div>
  <button type="button" className="btn btn-primary my-2" onClick={handleclick}>Enable {btn}  Mode</button></div>
   
    </>
  )
}
