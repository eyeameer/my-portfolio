import React from 'react'
export default function Contact(props){
    
    return(
        
        <div className='ml-0 ml-md-4' id='ContactMe'>
              <h2>Contact Me:</h2>
              <div className='row '>
              <div className='col-sm-3 offset-1'>
                        <div className='row'>
                            <p className='col-12 d-flex justify-content center'><i className="fa-solid fa-square-envelope fa-2x mr-2"></i> mohdameer788@gmail.com</p>
                            <p className='col-12 d-flex justify-content center'><i className="fa-solid fa-square-phone fa-2x mr-2"></i>+91 8639152982</p>
                            <div className='socials' id={props.darkMode?'darkSocialIcons':'lightSocialIcons'}>
                                <a><i className='fab fa-twitter fa-2x'></i></a>
                <a href='https://github.com/eyeameer' target="_blank"><i className='fab fa-github fa-2x'></i></a>
                <a href='https://www.linkedin.com/in/mohammed-ameer-143a76161/' target="_blank"><i className='fab fa-linkedin fa-2x'></i></a>
                <a href='https://www.instagram.com/eyeameer/' target="_blank"><i className='fab fa-instagram fa-2x'></i></a>
                            </div>
                        </div>
              </div>
              <div className='col-sm-7 offset-1 mt-4 mt-md-0'>

                <form onSubmit={props.sendEmail}>
                    <div className='row'>
                          <input onChange={props.formChanges} name='name' value={props.formData.name} className='col-9 col-sm-10' type='text' placeholder='your name'/>
                          <input onChange={props.formChanges} name='email' value={props.formData.email} className='col-9 col-sm-10' type='text' placeholder='your email'/>
                          <textarea  id='comments' onChange={props.formChanges} name='message' value={props.formData.message} className='col-9 col-sm-10 ' placeholder='your message'/>
                          <button  className='col-4'>{props.sent?'sent✅':'submit'}</button>
                    </div>      
                    </form>
              </div>
              
              </div>  
        </div>
    )
}