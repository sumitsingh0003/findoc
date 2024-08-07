import { React, useState } from 'react';
import { Instant, RightArrow, NotICon } from '../../../assets/Icons';
import { images } from '../../../assets/assetsImages';

const SelectBankDetils = ({ onNext }) => {
  const [verificationMethod, setVerificationMethod] = useState('');

  const handleOptionChange = (e) => {
    setVerificationMethod(e.target.value);
  };

  const handleNextClick = () => {
    if (verificationMethod) {
      onNext(verificationMethod);
    }
  };

  return (
    <>
      <div className='slctBnkHdng'>
        <h2>Select the way to connect your bank account</h2>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className={`verification-option`}>
            <div className={`option-content ${verificationMethod === 'UPI' ? 'selected' : ''}`}>
              <div className="option-header">
                <label>
                  <input
                    type="radio"
                    name="verificationMethod"
                    value="UPI"
                    onChange={handleOptionChange}
                  /><span className="radio-circle"></span>
                </label>
                <p>Verify Your Bank Account <Instant /> via UPI</p>
              </div>
              <div className="option-body">
                <div className='qrCodeUpi'>
                  {verificationMethod === 'UPI' ? (
                    <>
                      <img src={images.MiniUpiLogo} className='minUpi' alt='qr code' />
                      <img src={images.BigQrCodeLogo} alt='qr code' />
                    </>
                  ) : (
                    <img src={images.UpiQrCode} alt='qr code' />
                  )}
                </div>
                <p>Scan a QR code and verify your bank account via UPI. ₹1 will be deducted, which will be refunded within 2-3 business days.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={`verification-option`}>
            <div className={`option-content ${verificationMethod === 'IFSC' ? 'selected' : ''}`}>
              <div className="option-header">
                <label>
                  <input
                    type="radio"
                    name="verificationMethod"
                    value="IFSC"
                    onChange={handleOptionChange}
                  />
                  <span className="radio-circle"></span>
                </label>
                <p>Verify Your Bank Account via IFSC Code & Account Number</p>
              </div>
              <div className="option-body bankopt">
                <div className='bankIcon'>
                  <img src={images.BankIcon} alt='Bank' />
                </div>
                <div className="findIfscCodeInpt">
                  <label>Enter IFSC code</label>
                  <input
                    type="text"
                    placeholder="Eg - SBIN005467"
                  />
                </div>
                <button>Find IFSC Code <RightArrow /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`selectBankButon ${verificationMethod ? 'enabled' : 'disabled'}`}>
        <button onClick={handleNextClick} disabled={!verificationMethod}>Next <RightArrow /></button>
        <p><NotICon /> Your account details are safe and secure with us.</p>
      </div>
    </>
  );
};

export default SelectBankDetils;
