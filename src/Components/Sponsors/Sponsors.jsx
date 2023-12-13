import React from 'react'
import './Sponsors.scss'
import chatgptlogo from '../../Assets/chatgpt logo.png'
import turnitinlogo from '../../Assets/turnitin logo.png'
const Sponsors = () => {
  return (
    <div className='sponsors_wrapper'>
   <div className="sponsors_container">
    <div className="sponsors">
        <img src={turnitinlogo} className='turnitin' alt="" />
        <img src={chatgptlogo} className='gptlogo'  alt="" />
       
        <img src={turnitinlogo} className='turnitin' alt="" />
        <img src={chatgptlogo} className='gptlogo'  alt="" />
       
        <img src={turnitinlogo} className='turnitin' alt="" />
        <img src={chatgptlogo} className='gptlogo'  alt="" />
       
    </div>
   </div>
    </div>
  )
}

export default Sponsors
