import React from 'react'
import { Instant, RightArrow } from '../../../assets/Icons';
import { images } from '../../../assets/assetsImages';


const FailedVerification = ({onNext}) => {
  return (
    <>
      <div className='pymntfailedSec'>
        <div className='row'>
          <div className='col-md-6 m-auto'>
            <div className='veryfUnscsfl'>
              <div className='failedBank'>
                <img src={images.CnclBnkDetls} alt='Failed Payment' />
              </div>
              <h2>Verification unsucessful!</h2>
              <p>Scan a QR code and verify your bank account via UPI. ₹1 will be deducted, which will be refunded within 2-3 business days.</p>
             
             <button onClick={onNext} > Next <RightArrow /></button>
            </div>
          </div>
          <div className='col-md-6 m-auto'>
            <div className='veryFailedQrCode'>
            <div className="option-header">
              <p>Verify Your Bank Account <Instant /> via UPI</p>
              </div>
              <div className="failedPymnt"> 
                <div className='qrCodeUpi'> 
                  <img src={images.MiniUpiLogo} className='minUpi' alt='qr code' />
                  <img src={images.BigQrCodeLogo} alt='qr code' /> 
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FailedVerification
