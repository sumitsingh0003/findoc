import React, { useState, useEffect } from 'react';
import { RightArrow, Checkbox } from '../../../assets/Icons'; 

const Index = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    gender: '',
    maritalStatus: '',
    motherName: '',
    segments: []
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, segments: [...formData.segments, name] });
    } else {
      setFormData({
        ...formData,
        segments: formData.segments.filter(segment => segment !== name)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log(formData);
     
    }
  };

  useEffect(() => { 
    const { fullName, fatherName, gender, maritalStatus, motherName, segments } = formData;
    const allFieldsFilled = fullName && fatherName && gender && maritalStatus && motherName;
    const minSegmentsSelected = segments.length >= 3;
    setIsFormValid(allFieldsFilled && minSegmentsSelected);
  }, [formData]);

  const isChecked = (name) => formData.segments.includes(name);

  return (
    <div className='prsnlDetailsSec'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='chooseSeg'>
              <p>Choose segments -</p>
              <ul>
                <li>
                  <label>
                    <Checkbox className={isChecked("Equity") ? 'active' : ''} />
                    <input
                      type="checkbox"
                      name="Equity"
                      onChange={handleCheckboxChange}
                    />
                    <div className='chckBxCont'>
                      <b>Equity</b>
                      <span>Trade equity on NSE & BSE</span>
                    </div>
                  </label>
                </li>
                <li>
                  <label>
                    <Checkbox className={isChecked("Mutual Funds") ? 'active' : ''} />
                    <input
                      type="checkbox"
                      name="Mutual Funds"
                      onChange={handleCheckboxChange}
                    />
                    <div className='chckBxCont'>
                      <b>Mutual Funds</b>
                      <span>Invest in Mutual Funds</span>
                    </div>
                  </label>
                </li>
                <li>
                  <label>
                    <Checkbox className={isChecked("Equity Derivatives") ? 'active' : ''} />
                    <input
                      type="checkbox"
                      name="Equity Derivatives"
                      onChange={handleCheckboxChange}
                    />
                    <div className='chckBxCont'>
                      <b>Equity Derivatives</b>
                      <span>Trade equity F&O on NSE & BSE</span>
                    </div>
                  </label>
                </li>
                <li>
                  <label>
                    <Checkbox className={isChecked("Commodity Derivatives") ? 'active' : ''} />
                    <input
                      type="checkbox"
                      name="Commodity Derivatives"
                      onChange={handleCheckboxChange}
                    />
                    <div className='chckBxCont'>
                      <b>Commodity Derivatives</b>
                      <span>Trade commodity on MCX, NCDEX, NSE & BSE</span>
                    </div>
                  </label>
                </li>
                <li>
                  <label>
                    <Checkbox className={isChecked("Currency Derivatives") ? 'active' : ''} />
                    <input
                      type="checkbox"
                      name="Currency Derivatives"
                      onChange={handleCheckboxChange}
                    />
                    <div className='chckBxCont'>
                      <b>Currency Derivatives</b>
                      <span>Trade currency F&O on NSE & BSE</span>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='prsnlDetailsForm'>
              <div className='prsnlForm-field'>
                <label>Full Name as on PAN</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='Enter Your Name'
                />
              </div>
              <div className='prsnlForm-field'>
                <label>Father's name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder='Enter your Father’s name'
                />
              </div>
              <div className='prsnlForm-field chooseGndr'>
                <div className="gender">
                  <span>Gender</span>
                  <label className={formData.gender === 'Male' ? 'selected' : ''}>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label className={formData.gender === 'Female' ? 'selected' : ''}>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>

                <div className="maritalStatus">
                  <span>Marital Status</span>
                  <label className={formData.maritalStatus === 'Married' ? 'selected' : ''}>
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Married"
                      onChange={handleChange}
                    />
                    Married
                  </label>
                  <label className={formData.maritalStatus === 'Unmarried' ? 'selected' : ''}>
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="Unmarried"
                      onChange={handleChange}
                    />
                    Unmarried
                  </label>
                </div>
              </div>
              <div className='prsnlForm-field'>
                <label>Mother's name</label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder='Enter your Mother’s name'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="acceptTick">
          I hereby provide consent for downloading my updated KYC details from KRA, to open my Findoc account
        </div>
        <div className={`panFormButton ${isFormValid ? 'enabled' : 'disabled'}`}>
          <button type="submit" className='panFrmBtn' disabled={!isFormValid} onClick={onNext}>
            Next <RightArrow />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
