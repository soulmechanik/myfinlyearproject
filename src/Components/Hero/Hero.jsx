import React from 'react';
import './Hero.scss';
import WhatsappIcon from '../../Assets/whatsapp.png';

const Hero = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/2348094793447?text=Hello%20MyFyP%2C%20I%20want%20to%20inquire%20about%20Your%20final%20Year%20writing%20Service',
      '_blank'
    );
  };

  return (
    <div className='Hero_wrapper'>
      <div className="Hero_container">
        <div className="Hero">
          <span>+100 Research projects delivered since 2023</span>
          <h1>Your final year academic project Writing and research partner</h1>
          <p className='second_paragraph'>Embark on your final year project journey alongside our dedicated team, where we serve as your reliable allies in writing and research. Our collaborative efforts aim not only for academic excellence but also for smooth and steady progress towards your aspirations. Let's navigate through the complexities of your final year project together, ensuring a successful and fulfilling academic pursuit.</p>

          <div className="bottons_Container">
            <div className="botton1" onClick={handleClick}>Get Started</div>
            <div className="botton2" onClick={handleClick}>
              
              Submit Topic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
