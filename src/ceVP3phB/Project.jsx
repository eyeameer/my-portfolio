import React from 'react'
import fightingGame from './assets/fightinggame.png'
import netflixClone from './assets/netflixClone.png'
import rockPaper from './assets/rockpaperscissor.png'
import tipCalculator from './assets/tipcalculator.png'
import weatherApp from './assets/weatherApp.png'
import tenzies from './assets/tenzies.png'
import quizApp from './assets/quizApp.png'
import notesApp from './assets/notesApp.png'
import yt from './assets/youtube.png'
import insta from './assets/insta.png'
import TM from './assets/TM.png'
import chatApp from './assets/chatApp.png'
import MERN from './assets/MERN.jpg'
 export default function Project(props){
    let stylee={
        color:'white',
        backgroundColor:'black'
    }
     return(
         <div className='project ml-0 ml-md-3' id='project'>
         <h2>Projects:</h2>
            <div className='row'>
                <div className='col-sm-2 offset-0 offset-md-1'  data-toggle='modal' data-target='#HtmlCssModal'>
                
                 <div className='card' id={props.darkMode?'darkProject':'lightProject'} >
                <div className='card-body' >
                    <img className='card-img-top' src='https://miro.medium.com/max/1400/1*lJ32Bl-lHWmNMUSiSq17gQ.webp'/>
                    <h5 className='card-title'>HTML And CSS Only</h5>
             </div>
                
                
                </div>
                 </div>
                <div className='col-sm-2 offset-0 offset-md-1'  data-toggle='modal' data-target='#HtmlCssJs'>
                     <div className='card' id={props.darkMode?'darkProject':'lightProject'}>
                <div className='card-body'>
                    <img className='card-img-top' src='http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png'/>
                    <h5 className='card-title'>HTML, CSS And JS</h5>
             </div>
                </div>
                </div>
                <div className='col-sm-2 offset-0 offset-md-1'  data-toggle='modal' data-target='#ReactJsModal'>
                         <div className='card' id={props.darkMode?'darkProject':'lightProject'}>
                <div className='card-body'>
                    <img className='card-img-top' src='https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg'/>
                    <h5 className='card-title'>ReactJS</h5>
             </div>
                </div>
                </div>
                <div className='col-sm-2 offset-0 offset-md-1'  data-toggle='modal' data-target='#MernModal'>
                         <div className='card' id={props.darkMode?'darkProject':'lightProject'}>
                <div className='card-body'>
                    <img className='card-img-top' src={MERN}/>
                    <h5 className='card-title'>MERN stack</h5>
             </div>
                </div>
                </div>
           
         </div>
         {/*modals*/}
         <div className='modal fade' id='HtmlCssModal'>
                    <div className='modal-dialog' id={props.darkMode?'darkModal':'lightModal'}>
                    <div className='modal-content'>
            <div className='modal-header'><h6 className='modal-title'>HTML and CSS Projects</h6>
            <button type="button" className='close' data-dismiss='modal'> <span aria-hidden="true">&times; </span>
            </button>
            </div>
            <div className='modal-body'>
               <a href='https://youtubehtml.ameermohd788.repl.co' target="_blank"> <div className='row'>
                    <img className='col-4 ml-2' src={yt}/>
                    <p className='col-6 mt-4'>Youtube Clone(non-material You)</p>
                </div></a>
              <a href='https://instaClone.ameermohd788.repl.co' target="_blank">  <div className='row'>
                    <img className='col-4 ml-2' src={insta}/>
                    <p className='col-6 mt-4'>Instagram clone</p>
                </div></a>
                
                
                
                
            </div>
            <div className='modal-footer'><button className='btn btn-danger' data-dismiss='modal' >cancel</button></div>
                    </div>
                    </div>
         </div>
         <div className='modal fade' id='HtmlCssJs'>
                    <div className='modal-dialog' id={props.darkMode?'darkModal':'lightModal'}>
                    <div className='modal-content'>
            <div className='modal-header'><h6 className='modal-title'>HTML, CSS And JS Projects</h6>
            <button type="button" className='close' data-dismiss='modal'> <span aria-hidden="true">&times; </span>
            </button>
            </div>
            <div className='modal-body'>
            
            
            
            
              <a href='https://Rock-paper-scissor.ameermohd788.repl.co' target="_blank">  <div className='row'>
                    <img className='col-4 ml-2' src={rockPaper}/>
                    <p className='col-6 mt-4'>Game: Rock paper scissors</p>
                </div></a>
                <a href='https://TipCalculator.ameermohd788.repl.co' target="_blank"><div className='row'>
                    <img className='col-4 ml-2' src={tipCalculator}/>
                    <p className='col-6 mt-4'>Tip calculator App</p>
                </div></a>
                <a href='https://Weather-App.ameermohd788.repl.co' target="_blank"><div className='row'>
                    <img className='col-4 ml-2' src={weatherApp}/>
                    <p className='col-6 mt-4'>Weather app</p>
                </div></a>
                <a href='https://Netflix-clone.ameermohd788.repl.co' target="_blank"><div className='row'>
                    <img className='col-4 ml-2' src={netflixClone}/>
                    <p className='col-6 mt-4'>Netflix Clone(by fething API)</p>
                </div></a>
                <a href='https://fightingGame.ameermohd788.repl.co' target="_blank"><div className='row'>
                    <img className='col-4 ml-2' src={fightingGame}/>
                    <p className='col-6 mt-4'>Fighting Game</p>
                </div></a>
            </div>
            <div className='modal-footer'><button className='btn btn-danger' data-dismiss='modal' >cancel</button></div>
                    </div>
                    </div>
         </div>
         <div className='modal fade' id='ReactJsModal'>
                    <div className='modal-dialog' id={props.darkMode?'darkModal':'lightModal'}>
                    <div className='modal-content'>
            <div className='modal-header'><h6 className='modal-title'>Reactjs Projects</h6>
            <button type="button" className='close' data-dismiss='modal'> <span aria-hidden="true">&times; </span>
            </button>
            </div>
            <div className='modal-body'>
               <a href='https://lovely-gaufre-6cb080.netlify.app/' target="_blank"> <div className='row'>
                    <img className='col-4 ml-2' src={tenzies}/>
                    <p className='col-6 mt-4'>Tenzies Game</p>
                </div></a>
              <a href='https://zingy-chimera-e3432b.netlify.app/' target="_blank">  <div className='row'>
                    <img className='col-4 ml-2' src={quizApp}/>
                    <p className='col-6 mt-4'>Quiz App (MCQ type)</p>
                </div></a>
                <a href='https://splendid-semolina-471b73.netlify.app/' target="_blank"><div className='row'>
                    <img className='col-4 ml-2' src={notesApp}/>
                    <p className='col-6 mt-4'>Notes App</p>
                </div></a>
            </div>
            <div className='modal-footer'><button className='btn btn-danger' data-dismiss='modal' >cancel</button></div>
                    </div>
                    </div>
         </div>
         <div className='modal fade' id='MernModal'>
                    <div className='modal-dialog' id={props.darkMode?'darkModal':'lightModal'}>
                    <div className='modal-content'>
            <div className='modal-header'><h6 className='modal-title'>Reactjs Projects</h6>
            <button type="button" className='close' data-dismiss='modal'> <span aria-hidden="true">&times; </span>
            </button>
            </div>
            <div className='modal-body'>
               <a href='https://t-mangerrr.netlify.app/' target="_blank"> <div className='row'>
                    <img className='col-4 ml-2' src={TM}/>
                    <p className='col-6 mt-4'>Task manager</p>
                </div></a>
            
              <a href='https://chatappfrontendnodereact.netlify.app/' target="_blank">  <div className='row'>
                    <img className='col-4 ml-2' src={chatApp}/>
                    <p className='col-6 mt-4'>Real-time chat app</p>
                </div></a>
              
            </div>
            <div className='modal-footer'><button className='btn btn-danger' data-dismiss='modal' >cancel</button></div>
                    </div>
                    </div>
         </div>
         
         </div>
     )
 }