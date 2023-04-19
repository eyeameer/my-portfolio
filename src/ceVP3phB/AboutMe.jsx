import React from 'react'

export default function AboutMe(){
    return(
        
        <div className='row ml-0 ml-md-3' id='AboutMe' >
        <h2 className='col-12'>About Me:</h2>
                <div className='col-10 offset-0 offset-md-1'><p className='AboutMe_p'>
                Hey there, this is Ameer here, a passionate computer science engineer who fell in love with the idea of development ever since he was a kid. Right from the very moment I was introduced to computers and gaming consoles I always wondered how they worked under the hood, how clicking a certain button on keyboard or screen initiated a certain action and that's it, that's when my passion for development took place. 
                <br/>
                I mentioned gaming consoles in particular because they played an impotant role in my
                journey towards becoming an engineer. Like most kids I myself was a game addict and playing them wasn't enough, I wanted to make a game of my own and I used to tell this to my mom and she always replied 'for that you must become an engineer first'.
                Hence this was always my response to the question that every kid gets asked in school....'what do you want to be when you grow up?' And over the years I have seen my friends and classmates change their answers but my answer never changed. This was my passion for development right from a very young age.
                And as a result after my schooling I chose computer science as my major.
                For the first time I was actually working for my dream and it all went so good that I never regreted my decision to become a developer, almost feels like it was destined to happen and I was made for this.
</p>
                
        
        </div>
        <div className='col-12 offset-0 offset-md-1'>
        <ul className='nav nav-pills' id='tabs'>
                            <li className="nav-item ">
                    <a href="#educationTab" data-toggle='tab' className="nav-link active">Education</a>
                </li>
                <li className="nav-item">
                    <a href="#hobbiesTab" data-toggle='tab' className="nav-link">Hobbies</a>
                </li>
                <li className="nav-item">
                    <a href="#languagesTab" data-toggle='tab' className="nav-link">Languages</a>
                </li>

        </ul>
                <div className='tab-content'>
                        <div id='educationTab' className='tab-pane active'>
                      <div>  
                       <p className='sp_para'>2019-Current</p>
                       <br/>
                       <p>Pursuing BE(CSE) from Lords Institute Of Engineering And Technology</p>
                       </div>
                       <div>
                       <p className='sp_para'>2016-2018</p>
                       <br/>
                       <p>Intermediate (MPC) from MS Junior College</p>
                       </div>
                       <div>
                       <p className='sp_para'>2016 and before</p>
                       <br/>
                       <p>Ahmed High School/Royal Embassy High School</p>
                       </div>
                                
                        
                        </div>
                        <div id='hobbiesTab' className='tab-pane'>
                         <ul>
                            <li>Online Games</li>
                            <li>Playing Cricket</li>
                            <li>Watching Anime</li>
                         </ul>
                                
                        
                        </div>
                        <div id='languagesTab' className='tab-pane'>
                                                 <ul>
                            <li>English-fluent</li>
                            <li>Hindi-fluent</li>
                            <li>Urdu-fluent</li>
                         </ul>
                         
                                
                        
                        </div>
                </div>
        </div>
        </div>
       
        
    )
}