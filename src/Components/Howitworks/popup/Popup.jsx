import React, { useState, useEffect } from 'react';
import './popup.scss';
import GetStarted from '../../Getstarted/Getstarted';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className={`popup ${showPopup ? 'show-popup' : ''}`}>
      <GetStarted />
    </div>
  );
};

export default Popup;
