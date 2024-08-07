import React, { useState } from 'react'
import { images } from '../../../assets/assetsImages'
import { RightArrow, RightTick } from '../../../assets/Icons';

const PanDetails = ({ onNext }) => {
  const [panNumber, setPanNumber] = useState('');
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [consent, setConsent] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handlePanChange = (e) => {
    const value = e.target.value.toUpperCase();
    setPanNumber(value);
    validateForm(value, dob, consent);
  };

  const handleDobChange = (e) => {
    const { name, value } = e.target;
    setDob(prev => ({ ...prev, [name]: value }));
    validateForm(panNumber, { ...dob, [name]: value }, consent);
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
    validateForm(panNumber, dob, e.target.checked);
  };

  const validateForm = (pan, dob, consent) => {
    const isPanValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
    const isDobValid = dob.day && dob.month && dob.year;
    setIsValid(isPanValid && isDobValid && consent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log('Form Submitted', { panNumber, dob, consent });
      onNext();
    } else {
      console.log('Form is not valid');
    }
  };

  return (
    <>
      <div className='panImage'>
        <img src={images.Pancard} alt='Pan Card' />
      </div>
      <form>
        <div className='row'>
          <div className='col-md-6'>
            <div className='panNumbr'>
              <label>Enter Your PAN number<sup>*</sup></label>
              <div className='panFormField'>
                <input
                  type="text"
                  value={panNumber}
                  onChange={handlePanChange}
                  placeholder="Enter your PAN number here"
                  maxLength="10"
                  required
                />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="dob">
              <label>Date of Birth <span>(as per Pancard)</span></label>
              <div className='dobFormField'>
                <input
                  type="text"
                  name="day"
                  value={dob.day}
                  onChange={handleDobChange}
                  placeholder="dd"
                  maxLength="2"
                  required
                /> /
                <input
                  type="text"
                  name="month"
                  value={dob.month}
                  onChange={handleDobChange}
                  placeholder="mm"
                  maxLength="2"
                  required
                /> /
                <input
                  type="text"
                  name="year"
                  value={dob.year}
                  onChange={handleDobChange}
                  placeholder="yyyy"
                  maxLength="4"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="acceptTick">
          <label className={consent ? 'enabled' : ''}>
            <input
              type="checkbox"
              checked={consent}
              onChange={handleConsentChange}
            />
          <RightTick />
            I hereby provide consent for downloading my updated KYC details from KRA, to open my Findoc account
          </label>
        </div>
        <div className={`panFormButton ${isValid ? 'enabled' : 'disabled'}`}>
          <button type="submit" className='panFrmBtn' disabled={!isValid} onClick={handleSubmit}>
            Next <RightArrow />
          </button>
        </div>
      </form>
    </>
  )
}

export default PanDetails;
