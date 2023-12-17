import React from 'react';
import { WhatsApp } from '@mui/icons-material';
import './Howitworks.scss'

const HowItWorks = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348094793447?text=Hello%20MyFyP%2C%20I%20want%20to%20inquire%20about%20Your%20final%20Year%20writing%20Service', '_blank');
  };

  return (
    <div className='hiw_wrapper'>
      <div className="hiw_container">
        <div className="hiw">
          <div className="righttext">
            <span>How MyFyP works</span>
            <h3>Submit your academic writing requests today and receive your chapter 1 within 24 Hours.</h3>
            <p>Send in your projects using our dashboard and receive them back within a day. We emphasize both quality and speed in our services.</p>

            <div className="botton4">
              <WhatsApp className='whatsapp' />
              <button onClick={handleWhatsAppClick}>
                Submit Topic Via Whatsapp
              </button>
            </div>
          </div>

          <div className="lefttext">
            <div className="box">
              <span className="number">1</span>
              <div className="texts">
                <h3>Submit your Writing requests</h3>
                <p>Students submit their writing requests, detailing project specifics through our user-friendly platform. Our streamlined process ensures a clear understanding of each project's scope.</p>
              </div>
            </div>
            <div className="box">
              <span className="number">2</span>
              <div className="texts">
                <h3>Expert Allocation and Writing Phase</h3>
                <p>After receiving requests, our skilled team matches them with specialized writers, ensuring high-quality content meeting academic standards.</p>
              </div>
            </div>
            <div className="box">
              <span className="number">3</span>
              <div className="texts">
                <h3>Quality Assurance and Delivery</h3>
                <p>Prior to delivery, projects undergo meticulous quality checks for accuracy, originality, proper citation, and academic compliance. Our focus remains on meeting deadlines while delivering top-quality final drafts that exceed expectations.</p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
