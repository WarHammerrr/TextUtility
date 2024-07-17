
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import { useState } from 'react';


function App() {
 const [mode,setMode]=useState('light')
 const [alert,setAlert]=useState(null)
 function onToggle(){
  if(mode==='dark'){
setMode('light');
document.body.style.backgroundColor='white';
showAlert("Light Mode Enabled")
  }
  else{
setMode('dark');
document.body.style.backgroundColor='#081e23';
showAlert("Dark Mode Enabled")
  }
 }
 function showAlert(msg){
  setAlert({
    message:msg
  })
  setTimeout(()=>{setAlert(null)},1000)
 }  return (
    <>
    <Navbar title="Text tool" about="About us" mode={mode} onToggle={onToggle}/>
    <Alert alert={alert}/>
    <Textform heading="Enter Text to Analyze" mode={mode} alert={alert} showAlert={showAlert}/>
    {/* <About/> */}
   </>
  );
}

export default App;
