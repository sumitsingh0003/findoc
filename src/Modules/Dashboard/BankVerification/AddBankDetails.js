import React, { useState } from 'react';
import { RightArrow, NotICon, Checkbox } from '../../../assets/Icons';
import { images } from '../../../assets/assetsImages';

const AddBankDetails = ({ onNext }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [isSavingsAccount, setIsSavingsAccount] = useState(false);
  const [error, setError] = useState('');

  const handleAccountNumberChange = (e) => {
    const value = e.target.value;
 
    if (/^\d*$/.test(value)) {
      setAccountNumber(value);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsSavingsAccount(e.target.checked);
  };

  const handleNextClick = () => { 
    if (accountNumber.length < 8 || accountNumber.length > 16) {
      setError('Account number must be between 8 and 16 digits.');
      return;
    }

    if (!isSavingsAccount) {
      setError('You must confirm it is a savings account.');
      return;
    }

    setError('');  
    onNext();  
  };

  return (
    <>
      <div className='slctBnkHdng bankIfscHdng'>
        <h2>Bank matching with IFSC Code</h2>
      </div>
      <div className='mainAdBnkDetls'>
        <div className="bankInnerSec">
          <div className='bankLogoSec'>
            <div className='bankLogoMiniImg'>
              <img src={images.BankIcon} alt='Bank Mini' />
            </div>
            <div className="bnkLogoHdng">
              <h2>ICICI Bank</h2>
              <p>E-30 SAKET NEW DELHI - 110017</p>
            </div>
          </div>

          <div className='addBnkNmr'>
            <label>Add Bank Account Number</label>
            <input
              type='text'
              placeholder='Account Number'
              value={accountNumber}
              onChange={handleAccountNumberChange}
            />
            <span> 
              <Checkbox className={isSavingsAccount ? 'active' : ''} />
              <input
                type='checkbox'
                checked={isSavingsAccount}
                onChange={handleCheckboxChange}
              />

              Savings Account
            </span>
            {error && <p className="error-message">{error}</p>}
          </div>
          <p>Not your bank account? <button>Change IFSC Code <RightArrow /></button></p>
        </div>
      </div>
      <div className={`selectBankButon ${accountNumber && isSavingsAccount ? 'enabled' : 'disabled'}`}>
        <button onClick={handleNextClick} disabled={!accountNumber || !isSavingsAccount}>Next <RightArrow /></button>
        <p><NotICon /> Your account details are safe and secure with us.</p>
      </div>
    </>
  );
}

export default AddBankDetails;
