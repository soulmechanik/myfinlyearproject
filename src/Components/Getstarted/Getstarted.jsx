import React from 'react'
import './Getstarted.scss'

const Getstarted = () => {


  const handleClick = () => {
    window.open(
      'https://wa.me/2348094793447?text=Hello%20MyFyP%2C%20I%20want%20to%20inquire%20about%20Your%20final%20Year%20writing%20Service',
      '_blank'
    );
  };
  return (
   <seciton className="g-wrapper">

<div className="paddings innerwidth g-container">
  <div className="flexcolcenter inner-container">
    <span className='primarytext' >Get Started with MyFYP This <span className='xmas'>Xmas</span> </span>
    
    <span className='secondarytext'> Save big with a <span className='money'> ₦10,000 </span> discount on your project requests! Submit  now to claim this exclusive offer. <br />
    Merry XMAS

    </span>
   <button className="button" onClick={handleClick}>
    <a href="">Submit Topic</a>
   </button>
  </div>
</div>

   </seciton>
  )
}

export default Getstarted
