import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }

  const removeClasses = () =>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls) =>{
    removeClasses();
    document.body.classList.add('bg-'+ cls)
    console.log(cls);
    // if(mode === 'light'){
    //   setMode('dark')
    //   document.body.style.backgroundColor = '#183f81'
    //   showAlert('Dark Mode Has been Enabled', 'success')
    //   // document.title = 'TextUtils - Darkmode Enabled'
    //   // setInterval(()=>{
    //   //   document.title = 'This app is Amazing'
    //   // }, 2000)
      
    //   // setInterval(()=>{
    //   //   document.title = 'Really Enjoying'
    //   // }, 1500)
      
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor = 'white'
    //   showAlert('Dark Mode Has been Disabled', 'success')
    //   // document.title = 'TextUtils - lightmode Enabled'
    // }
  }
  
  return (
    <>
    <Router>
    <Navbar title = "TextUtilss" aboutText="About"  mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert} />
        <div className = "container">
        <Routes>
        <Route path= "/about" element={<About mode = {mode}/>} />
        <Route path= "/" element={<Form heading = "Enter Text Here Below to Analyze" mode={mode} showAlert={showAlert} />}/>
        </Routes>
        </div>
       
    </Router>
    {/* <Router>
    <Navbar title = "TextUtils" aboutText="About Us"  toggleMode={toggleMode}/>;
    <Alert />
    <div className="container ">
    <Switch>
      <Route path='/'>
      
        <Form heading = "Enter Text Here Below to Analyze" mode={mode} showAlert={showAlert} />
        
        
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
    
    
    </Switch>
    
    </div>
    </Router> */}
   
    </>
  );
}

export default App;
