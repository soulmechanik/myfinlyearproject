import React from 'react';
import './Scroll.scss';
import image1 from '../../Assets/student.png'


const Scroll = () => {
  return (
    <div className="Scroll_container">
      {/* <div className='scroll' style={{ "--t": "20s" }}>
        <div className="">
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Angular</span>
          <span>Reactjs</span>
        </div>
        <div className="">
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Angular</span>
          <span>Reactjs</span>
        </div>
      </div>
      <div className='scroll' style={{ "--t": "1 0s" }}>
        <div className="">
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Angular</span>
          <span>Reactjs</span>
        </div>
        <div className="">
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Angular</span>
          <span>Reactjs</span>
        </div>
      </div>
      <div className='scroll' style={{ "--t": "30s" }}>
        <div className="">
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Angular</span>
          <span>Reactjs</span>
        </div>
        <div className="">
          <span>html</span>
          <span>css</span>
          <span>javascript</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Angular</span>
          <span>Reactjs</span>
        </div>
      </div> */}

      <div className="scroll imgbx" style={{ "--t": "25s" }}>
        <div>
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
        </div>
        <div>
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
            <img src={image1} alt="" srcset="" />
        </div>
      </div>
    </div>


  )
}

export default Scroll;
