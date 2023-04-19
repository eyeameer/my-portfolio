import React from 'react'
export default function Skills(props){
    let style={
        color:'black'
    }
    return(
        
        <div className='container ml-0 ml-md-3' id='skillz'>
        
             <div className='row'>
        <div id='skills' className='col-sm-12'><h2>Skills:</h2></div>
        
    </div>
<div  className='skillLogo col-sm-12 ml-0 ml-md-5'>
     <div className='row'>
        <div className='col-6'>
                <div className='row'>
                        <div className="col-sm-6">
        <div className='card' id={props.darkMode?'darkCard': 'card'} >
             <div className='card-body'>
                 <div className='card-img-top'><i className="fa-brands fa-html5 fa-4x"></i></div>
                 <h6 className='card-title'>HTML</h6>
          </div>
             </div>
             
             
             </div>
                        
                       
                                
                                        <div className='col-sm-6 mt-4 mt-sm-0'>
                        <div className='card' id={props.darkMode?'darkCard': 'card'}>
     <div className='card-body'>
         <div className='card-img-top'><i className="fa-brands fa-css3-alt fa-4x"></i></div>
         <h6 className='card-title ml-2'>CSS</h6>
  </div>
     </div>
                        
                </div>
                </div>
                </div>
        
        <div className='col-6'>
        <div className='row'>
                        <div className="col-sm-6">
        <div className='card' id={props.darkMode?'darkCard': 'card'}>
             <div className='card-body'>
                 <div className='card-img-top' id='jsImg'><i className="fa-brands fa-js fa-4x"></i></div>
                 <h6 className='card-title' id='jsT'>Javascript</h6>
          </div>
             </div>
             
             
             </div>
                        
                       
                                
                                        <div className='col-sm-6 mt-4 mt-sm-0'>
                        <div className='card' id={props.darkMode?'darkCard': 'card'}>
     <div className='card-body'>
         <div className='card-img-top' id='reactImg'><i className="fa-brands fa-react fa-4x"></i></div>
         <h6 className='card-title' id='reactT'>Reactjs</h6>
  </div>
     </div>
                        
                </div>
                </div>                



                </div>
        </div>
        <div className='row mt-4'>
        <div className='col-6'>
                <div className='row'>
                        <div className="col-sm-6">
        <div className='card' id={props.darkMode?'darkCard': 'card'}>
             <div className='card-body'>
                 <div className='card-img-top' id='bootImg'><i className="fa-brands fa-bootstrap fa-4x"></i></div>
                 <h6 className='card-title' id='bootT'>Bootstrap</h6>
          </div>
             </div>
             
             
             </div>
                        
                       
                                
                                        <div className='col-sm-6 mt-4 mt-sm-0'>
                        <div className='card' id={props.darkMode?'darkCard': 'card'}>
     <div className='card-body'>
         <div className='card-img-top' id='sassImg'><i className="fa-brands fa-sass fa-4x"></i></div>
         <h6 className='card-title ml-2' id='sassT'>Sass</h6>
  </div>
     </div>
                        
                </div>
                </div>
                </div>
        
        <div className='col-6'>
        <div className='row'>
                        <div className="col-sm-6">
        <div className='card' id={props.darkMode?'darkCard': 'card'}>
             <div className='card-body'>
                 <div className='card-img-top'><i className="fa-brands fa-python fa-4x"></i></div>
                 <h6 className='card-title'>Python</h6>
          </div>
             </div>
             
             
             </div>
                        
                       
                                
                                        <div className='col-sm-6 mt-4 mt-sm-0'>
                        <div className='card' id={props.darkMode?'darkCard': 'card'}>
     <div className='card-body'>
         <div className='card-img-top' id="nodeImg"><i className="fa-brands fa-node fa-4x"></i></div>
         <h6 className='card-title 'id='nodeT'>nodejs</h6>
  </div>
     </div>
                        
                </div>
                </div>                



                </div>
        </div>
        </div>

     </div>
     
        

    
   

    )
}

{/*  */}
{/* <div className='row' > */}
{/*      */}
                        {/* <div className='col-sm-6'> */}
                                {/* <div className='row'> */}
                        {/* <div className='col-6'> */}
{/*                  */}
                {/* <i className="fa-brands fa-html5 fa-4x"></i> */}
{/*                  */}
            {/* </div> */}
                {/* <div className='col-6'><i className="fa-brands fa-css3-alt fa-4x"></i></div> */}
                                {/* </div> */}
                        {/* </div> */}
                        {/* <div className='col-sm-6 '> */}
                                {/* <div className='row'> */}
                        {/* <div className='col-6'> */}
                  {/* <i className="fa-brands fa-js fa-4x"></i> */}
{/*                  */}
{/*                  */}
            {/* </div> */}
                {/* <div className='col-6'><i className="fa-brands fa-react fa-4x"></i></div> */}
                                {/* </div> */}
                        {/* </div> */}
{/*   */}
{/*                 */}
    {/* </div> */}
{/* <div className='row mt-2' id='row_2'> */}
                        {/* <div className='col-sm-6 mt-2'> */}
                                {/* <div className='row'> */}
                        {/* <div className='col-6'> */}
{/*                  */}
          {/* <i className="fa-brands fa-bootstrap fa-4x"></i> */}
{/*                  */}
            {/* </div> */}
                {/* <div className='col-6'><i className="fa-brands fa-sass fa-4x"></i></div> */}
                                {/* </div> */}
                        {/* </div> */}
                        {/* <div className='col-sm-6 mt-2'> */}
                                {/* <div className='row'> */}
                        {/* <div className='col-6'> */}
{/*                    */}
                {/* <i className="fa-brands fa-python fa-4x"></i> */}
{/*                  */}
            {/* </div> */}
                {/* <div className='col-6'><i className="fa-brands fa-node fa-4x"></i></div> */}
                                {/* </div> */}
                        {/* </div> */}
{/*                 */}
    {/* </div> */}
    {/* </div> */}