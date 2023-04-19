import React from 'react'
import me from './assets/myFoto.png.jpg'
import devGif from './assets/devGif.mp4'
export default function Body(props){
    
    return(
        <main className={props.darkMode?'darkBody':''}>
                <div className='row'>
                
                <div className='col-sm-8' id='intro'>
                <p>Hi! my name is </p>
          
                 {props.myName}
            
                <p>Web and python developer</p>
                </div>
                
                <div className='col-md-4'> 
                <div className='card ml-4 ml-lg-0' id={props.darkMode?'darkmyCard':'myCard'}>
                <div className='card-body'>
                <video id='my' className='card-img-top' autoplay>
  <source src={devGif} type="video/mp4"/>
  
            </video>
                    <h3 className='card-title'>Myself Ameer</h3>
                    <p>Computer Science Engineer &#183; 22 years old </p>
                    <p>Degree: Bachelor of Engineering (B.E.)</p>
             </div>
                </div>
                
                
                </div>
            
        
        </div>

        </main>
    )
}
        