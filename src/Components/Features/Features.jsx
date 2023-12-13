import React from 'react'
import './Features.scss'
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import Student from '../../Assets/student.png'

const Features = () => {
  return (
    <div className='Features_wrapper'>
<div className="Features_container">
    <div className="Features">

       <div className="F-left">
    
            <div className="div1">
         <PlagiarismOutlinedIcon className='plag'/>
         <h3>Plagiarism Free</h3>
         <p>Trust our commitment to originality. Using Turnitin, we verify your final year project for plagiarism, ensuring authenticity and upholding academic honesty throughout the process.</p>
               
            </div>
            <div className="div2">
         <PlagiarismOutlinedIcon/>
         <h3>Plagiarism Free</h3>
         <p>Trust our commitment to originality. Using Turnitin, we verify your final year project for plagiarism, ensuring authenticity and upholding academic honesty throughout the process.</p>
               
            </div>
            <div className="div3">
         <PlagiarismOutlinedIcon/>
         <h3>Plagiarism Free</h3>
         <p>Trust our commitment to originality. Using Turnitin, we verify your final year project for plagiarism, ensuring authenticity and upholding academic honesty throughout the process.</p>
               
            </div>
            <div className="div4">
         <PlagiarismOutlinedIcon/>
         <h3>Plagiarism Free</h3>
         <p>Trust our commitment to originality. Using Turnitin, we verify your final year project for plagiarism, ensuring authenticity and upholding academic honesty throughout the process.</p>
               
            </div>
    
          
       
       </div>
       <div className="F-right"> 
       <div className="image">
        <img src={Student} alt="" /></div></div>
    </div>
</div>
    </div>
  )
}

export default Features
