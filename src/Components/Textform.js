import React from 'react'
import { useState } from 'react'

export default function Textform(props) {

const[text,setText]=useState('Enter your content')

function handleupclick(){
setText(text.toUpperCase())
}
function handlelowclick(){
    setText(text.toLowerCase())
    }
function handlechange(e){
setText(e.target.value)
}
function Charcount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' ) {
            count++;
        } 
    }
    return count;
}
function Wordcount(str) {
    let count = 0;
    let check = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !check) {
            count++;
            check = true;
        } else if (str[i] === ' ') {
            check = false;
        }
    }
    return count;
}
function handleclearclick(){
    setText('')
props.showAlert("Text Cleared")

}
  return (
    <>
  <div className="container">
  <div className="mt-3"style={{color:props.mode==='light'?'black':'white'}}>
    <h3><strong>{props.heading}</strong></h3>
  {/* <label htmlFor="Textarea1" className="form-label">Enter to Analyze</label> */}
  <textarea className="form-control" id="Textarea1" value={text} onChange={handlechange} rows="7"></textarea>
  </div>
<button type="button" className="btn btn-secondary mt-3 " onClick={handleupclick}>UpperCase</button>
<button type="button" className="btn btn-secondary mt-3 mx-2" onClick={handlelowclick}>LowerCase</button>
<button type="button" className="btn btn-secondary mt-3 mx-2" onClick={handleclearclick}>Clear</button>

<div className="container my-2"  ></div>
<h5 style={{color:props.mode==='light'?'black':'white'}}><strong>Text Analysis</strong></h5>
<p style={{color:props.mode==='light'?'black':'white'}}>{Wordcount(text)} words and {Charcount(text)} characters</p>
<p style={{color:props.mode==='light'?'black':'white'}}>{(0.0041*Wordcount(text)).toFixed(2)} min to read</p>
<h5 style={{color:props.mode==='light'?'black':'white'}}><strong>Text Preview</strong></h5>
<p style={{color:props.mode==='light'?'black':'white'}}>{text}</p>
</div>    
    </>
  )
}
