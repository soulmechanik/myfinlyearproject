import React from 'react'
import './Audience.scss'
import postgraduate from '../../Assets/postgrade.webp'
import undergraduateimage from '../../Assets/undergrade.png'

const Audience = () => {
  return (
    <div className='audience_wrapper'>
        <div className="audience_container">
            <div className="audience">

                <div className="aud_left">
                    <h3>Solutions for undergraduate</h3>
                    <p>Final year looming? Entrust us with your projects. Our specialized service offers top-tier support for crafting impeccable final year projects, ensuring academic excellence and success.</p>
                </div>


                <div className="aud_right">
                    <img src={undergraduateimage} alt="" />
                </div>

            </div>
            <div className="audience">

              


                <div className="aud_right">
                    <img src={postgraduate} alt="" />
                </div>

                <div className="aud_left">
                    <h3>Solutions for Postgraduate</h3>
                    <p>Excel in postgraduate studies! Trust us with your projects. Our expert service guarantees superior quality, ensuring success and timely completion of your academic endeavors.</p>
                </div>

            </div>
        </div>
   
    </div>
  )
}

export default Audience
