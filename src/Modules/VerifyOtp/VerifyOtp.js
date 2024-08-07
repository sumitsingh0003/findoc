import React, { useState } from 'react';
import { RightArrow } from '../../assets/Icons';
import { images } from '../../assets/assetsImages';
import "./VerifyOtp.css";

const VerifyOtp = ({ onSubmit }) => {
    const [phoneOtp, setPhoneOtp] = useState(Array(6).fill(''));
    const [emailOtp, setEmailOtp] = useState(Array(6).fill(''));
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleChange = (e, index, otpType) => {
        const value = e.target.value;
        // if (isNaN(value)) return; 

        let newOtp;
        if (otpType === 'phone') {
            newOtp = [...phoneOtp];
            newOtp[index] = value.slice(0, 1);
            setPhoneOtp(newOtp);
        } else {
            newOtp = [...emailOtp];
            newOtp[index] = value.slice(0, 1);
            setEmailOtp(newOtp);
        }


        setIsButtonEnabled(
            newOtp.every(num => num !== '') &&
            (otpType === 'phone' ? emailOtp.every(num => num !== '') : phoneOtp.every(num => num !== ''))
        );
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isButtonEnabled) {
            const phoneOtpValue = phoneOtp.join('');
            const emailOtpValue = emailOtp.join('');
            console.log('Phone OTP:', phoneOtpValue);
            console.log('Email OTP:', emailOtpValue);
            setPhoneOtp(Array(6).fill(''))
            setEmailOtp(Array(6).fill(''))
            onSubmit();
        }
    };

    return (
        <>
            <div className='otpHeading'>
                <img src={images.FDMinLogo} alt="Login Logo" />
                <p>Enter OTP to Verify</p>
            </div>
            <div className="LoginForm">
                <form onSubmit={handleSubmit}>
                    <div className='otpField'>
                        <p>A one-time password has been sent to</p>
                        <p>******9937</p>
                        <div className="otp-inputs">
                            {phoneOtp.map((num, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={num}
                                    maxLength="1"
                                    onChange={(e) => handleChange(e, index, 'phone')}
                                />
                            ))}
                        </div>
                        <span>Resend OTP (00:30)</span>
                    </div>
                    <div className='otpField'>
                        <p>A one-time password has been sent to</p>
                        <p>**mit*******440@gmail.com</p>
                        <div className="otp-inputs">
                            {emailOtp.map((num, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={num}
                                    maxLength="1"
                                    onChange={(e) => handleChange(e, index, 'email')}
                                />
                            ))}
                        </div>
                        <span>Resend OTP (00:30)</span>
                    </div>

                    <div className={`formButton ${isButtonEnabled ? 'active' : ''}`}>
                        <button type="submit" className='frmBtn' disabled={!isButtonEnabled}>
                            Verify <RightArrow />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default VerifyOtp;
