import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { RightArrow } from '../../assets/Icons';
import { images } from '../../assets/assetsImages';
import "./Login.css";

const Login = ({ onSubmit }) => {
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const validateMobile = (number) => {
        // Example validation: Check if the number is exactly 10 digits
        const isValid = /^\d{10}$/.test(number);
        return isValid;
    };

    const validateEmail = (email) => {
        // Basic email validation regex
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return isValid;
    };

    const handleChangeMobile = (e) => {
        const value = e.target.value;
        setMobile(value);
        setErrors(prev => ({ ...prev, mobile: '' }));
        setIsButtonEnabled(validateMobile(value) && validateEmail(email));
    };

    const handleChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setErrors(prev => ({ ...prev, email: '' }));
        setIsButtonEnabled(validateMobile(mobile) && validateEmail(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = {};

        if (!validateMobile(mobile)) {
            newErrors.mobile = 'Invalid mobile number. Must be 10 digits.';
            valid = false;
        }

        if (!validateEmail(email)) {
            newErrors.email = 'Invalid email address.';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            // Proceed with OTP generation and sending process
            console.log('Sending OTP to:', { mobile, email });
            onSubmit();
        }
    };
 

    return (
        <>
            <div className='loginHeading'>
                <img src={images.FDMinLogo} alt="Login Logo"/>
                <p>Welcome to Findoc,</p>
            </div>
            <div className="LoginForm">
                <form onSubmit={handleSubmit}>
                    <div className='formField'>
                        <input
                            type='text'
                            placeholder='Mobile No.'
                            value={mobile}
                            onChange={handleChangeMobile}
                        />
                        {errors.mobile && <span className="error">{errors.mobile}</span>}
                    </div>
                    <div className='formField'>
                        <input
                            type='text'
                            placeholder='E-mail'
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className={`formButton ${isButtonEnabled ? 'active' : ''}`}>
                        <button type="submit" className='frmBtn' disabled={!isButtonEnabled}>
                            Get OTP <RightArrow />
                        </button>
                    </div>
                </form>

                <div className='resumeApl'>
                    <Link to="/">Re-KYC <FontAwesomeIcon icon={faCaretDown} /></Link>
                    <Link to="/">Resume application <FontAwesomeIcon icon={faCaretDown} /></Link>
                </div>
            </div>
        </>
    );
};

export default Login;
