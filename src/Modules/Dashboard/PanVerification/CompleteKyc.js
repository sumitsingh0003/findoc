import React from 'react'
import { images } from '../../../assets/assetsImages'
import { RightArrow, NotICon } from '../../../assets/Icons';


const CompleteKyc = ({ onNext }) => {
  return (
    <>
      <div className='digiKycSec'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <div className='digiLockerSec'>
              <div className='digiLockerImg'>
                <img src={images.Digilocker} alt="Digi locekr" />
              </div>
              <div className='digiLockrCntnt'>
                <h3>Complete your KYC quickly via Digilocker</h3>
                <ul>
                  <li>Instantly pull documents through Digilocker (Aadhar, PAN etc)</li>
                  <li>Skip manual video verification</li>
                  <li>Your Aadhaar Number/copy will not be stored</li>
                </ul>
              </div>
              <div className="acceptTick">
                 <NotICon /> I provide my consent to share my Aadhar Number, Date of Birth and Name from my Aadhar eKYC
                 information with Income Tax Department for the purpose of fetching my PAN into Digilocker
              </div>
              <div className='panFormButton enabled'>
                  <button type="submit" className='panFrmBtn' onClick={onNext}>
                      First KYC <RightArrow />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompleteKyc
