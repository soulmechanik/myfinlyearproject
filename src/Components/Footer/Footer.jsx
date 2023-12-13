import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer_wrapper'>

        <div className="footer_container">
            <div className="footer">
                <div className="box">
                <h3 className='logo2'>MyFyP</h3>
                <span>Voted the best in academic writing excellence! Trust our award-winning services for top-tier scholarly success.</span>
                </div>

                <div className="box">
                    <h3>Services</h3>
                    <span> Academic Writing</span>
                    <span> Academic Research </span>
                    <span>Blogging </span>
                    <span> Techical writing</span>
                    <span>Web content writing</span>
                </div>
                <div className="box">
                    <h3>Partners</h3>
                    <span> ChatGpt</span>
                    <span> Turnitin </span>
                    <span>OUI </span>
                    <span> Mission Cobtrol ng</span>
                </div>
                <div className="box">
                    <h3>Pricing</h3>
                    <span> Basic</span>
                    <span> Premium</span>
                    <span>Standard </span>
                    <span> Custmised</span>
                </div>

               
            </div>
        </div>
      
    </div>
  )
}

export default Footer
