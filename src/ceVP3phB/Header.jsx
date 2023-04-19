import React from 'react'
export default function Header(props){
    return(
        <nav className='navbar navbar-light navbar-expand-lg fixed-top' id='header'>
            
        <a href='#' className='navbar-brand'>Home</a>
        <button className='darkLightToggle' onClick={props.ThemeToggle}>{props.darkMode?<i className="fa-solid fa-sun fa-2x"></i>: <i class="fa-solid fa-moon fa-2x"></i>}</button>
       
        <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
        <span className='navbar-toggler-icon'></span></button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav ml-auto' id='toggler'>
                                    <button className='navbar-item'>
                        <a href='#AboutMe' className='nav-link'>About Me</a>
                    </button>
                                        <button className='navbar-item'>
                        <a href='#skillz' className='nav-link' >Skills</a>
                    </button>
                    <button className='navbar-item'>
                        <a href='#project' className='nav-link' onClick={props.mainSwitch}>Projects</a>
                    </button>
                    <div className='headerXmark'>
                    <button  className='navbar-item'>
                        <a href='#ContactMe' className='nav-link'>Contact Me</a>
                        
                    </button>
                     <button id='xmark' type="button" className='navbar-toggler btn btn-danger' data-toggle='collapse' data-target='#navbarCollapse'> <span aria-hidden="true">&times;</span></button>
                               
                    </div>
                    
                    
                </ul>
        </div>
       
        </nav>
        
    )
}