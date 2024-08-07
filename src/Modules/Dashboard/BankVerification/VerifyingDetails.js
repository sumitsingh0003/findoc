import React, { useState, useEffect } from 'react';
import { images } from '../../../assets/assetsImages';

const VerifyingDetails = ({ onNext }) => {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onNext();
    }
  }, [secondsLeft, onNext]);

  return (
    <div className="verifyingSec">
      <div className="icons-container">
        <img src={images.RupeeyaIcon} alt='Rupeea' />
        <span className="rupee">1</span>
        <img src={images.ArrowIcon} alt='Arrow' className='arrowImgIcn' />
        <img src={images.BankIcon} alt='BankIcon' />
      </div>
      <div className="verifyDetails">
        <h3>Verifying your Bank Account</h3>
        <p>₹1 is being sent to your <br />bank account to validate & verify the details</p>
      </div>
      <div className="timer-container">
        <img src={images.Loading} alt='Loading' />
        <p className="timer">00:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft} Sec</p>
      </div>
      <p className="waiting-message">This may take a while. Please wait... don't close the window</p>
    </div>
  );
}

export default VerifyingDetails;
