// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'; 
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
    showAlert("Dark Mode has been enabled", "success");  setMode("dark");
      document.body.style.backgroundColor ="#293d59";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Dark Mode";
      setTimeout(() => {
        document.title = "title 1";
      }, 3000);
      setTimeout(() => {
        document.title = "title 2";
      }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Light Mode";
      
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />  */}
      {/* <Navbar title="TextUtlis" AboutUtils="About US"/> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

 


        <TextForm heading="Enter the text to analyze below" mode={mode}  showAlert={showAlert}/> 
        {/* <About/> */}
      </div> 
    </>
  );
}

export default App;
