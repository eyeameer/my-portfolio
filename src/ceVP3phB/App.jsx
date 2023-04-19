import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx'
import Body from './Body.jsx'
import Rest from './Rest.jsx'
import Project from './Project.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function App() {

    const [darkMode, setDarkMode]=React.useState(false)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    console.log(windowWidth)
    if(darkMode===true){
        document.body.style.setProperty('background-color', 'black');
        document.body.style.setProperty('color', 'white');
    }else{
        
        document.body.style.setProperty('background-color', 'white');
        document.body.style.setProperty('color', 'black');
    }
    let myName=null
    if(windowWidth>465){
        myName= <h1 className='ml-5 ml-md-0'>Mohammed <span id='second-n' className='second-name offset-1 offset-md-0 ml-5 ml-md-0'>Ameer</span></h1>
        
    } else{
        myName= <h2 className='ml-5 ml-md-0'>Mohammed <span id='second-n' className='second-name offset-1 offset-md-0 ml-5 ml-md-0'>Ameer</span></h2>
    }
      const sendEmail = (e) => {
              
    setSent(true)
    e.preventDefault();

    emailjs.sendForm('service_8kujmuo', 'template_hdzi7jw', e.target, 'bbUfbllUy0V1aHhxi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
  };
    
    const [mainDisplay,setMainDisplay]=React.useState(false)
    const [sent,setSent]=React.useState(false)
       const [formData, setFormData]=React.useState(
        {name:'', email:'', message:''}
    )
    function mainSwitch(){
        setMainDisplay(prev=>!prev)
    }
    function ThemeToggle(){
        setDarkMode(prev=>!prev)
    }
    function formChanges(event){
        if(sent===false){
        setFormData(prev=>{
            return {...prev, [event.target.name]:[event.target.value]}
        })
        }
        else{
            setFormData({name:'', email:'', message:''})
        }
        
    }
    

  return (
      <div className='container-main'>
    <Header
     mainSwitch={mainSwitch}
     darkMode={darkMode}
     ThemeToggle={ThemeToggle}
    />
    <Body
     myName={myName}
     darkMode={darkMode}
     ThemeToggle={ThemeToggle}
     
    />
    <AboutMe
    darkMode={darkMode}
    />
    <Skills
    darkMode={darkMode}
    />
    <Project
    darkMode={darkMode}
    />
    <Contact
    sendEmail={sendEmail}
    formData={formData}
    formChanges={formChanges}
    darkMode={darkMode}
    
    sent={sent}
    />
    <Rest
    darkMode={darkMode}
    />

    </div>
  )
}
  