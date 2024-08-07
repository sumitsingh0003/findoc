import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Login from '../Login/Login';
import VerifyOtp from '../VerifyOtp/VerifyOtp';
import { images } from '../../assets/assetsImages';

import "./HomePage.css"


const HomePage = () => {
  const navigate = useNavigate()
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleLoginSubmit = () => {
    setIsOtpSent(true);
  };

  const handleOtpSubmit = () => {
    setIsOtpVerified(true);
    console.log('1')
    setTimeout(()=>{
      console.log('2')
      navigate('/portal')
    }, 5000)
  };

  return (
    <>
      <Header />
      <section className='mainHomeBanner'>
        <div className='container'>
          <div className='homeBanner' style={{ backgroundImage: `url(${images.BgShapeLines})` }}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='bannerMen'>
                  <div className='bannerImg'>
                    <img src={images.HomeMen} alt='Home Men' />
                    <div className='bannerContent'>
                      <h2>Open <span>online <br />DEMAT</span> ACCOUNT</h2>
                    </div>
                  </div>
                  <div className='bannerNote'>
                    <span>Note:</span>
                    <p>*Online account opening requires your mobile number to be linked to Aadhaar.You can check if your mobile number is linked to Aadhaar here.If your mobile number isn't linked to Aadhaar, please open your account offline.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='loginSec'>
                  {!isOtpSent ? (
                    <Login onSubmit={handleLoginSubmit} />
                  ) : (
                    !isOtpVerified ? (
                      <VerifyOtp onSubmit={handleOtpSubmit} />
                    ) : (
                      <div className='otpVeryFySucc'>
                        <p>OTP Verified! Successfully.</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HomePage
