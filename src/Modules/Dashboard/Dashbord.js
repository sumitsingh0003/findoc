import React, { useState, useEffect } from 'react';
import HeadPart from './Head/Head'; 
import PanVerification from './PanVerification/Index';
import PersonalDetails from './PersonalDetails/Index';
import BankVerifications from "./BankVerification/Index"
import FinancialDetails from "./FinancialDetails/Index"
import { Thumbprint, Signature, BankIcon, ContactUser, EditDoc } from '../../assets/Icons';
import { images } from '../../assets/assetsImages';
import "./Dashbord.css";

const Dashbord = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [currentStage, setCurrentStage] = useState('PAN_VERIFICATION');

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 3000);
  }, []);

  const handleNextStage = (stage) => {
    setCurrentStage(stage);
  };

  return (
    <section className={`mainDashboard ${isLoad ? 'onload': ''}`} style={{ backgroundImage: `url(${images.BgShapeLines})` }}>
      <div className='container'>
        <HeadPart />
        <div className='row'>
          <div className='col-md-4'>
            <div className='dashBoardLeftSidebar'>
              <span>Progress</span>
              <ul>

                <li 
                  className={`${currentStage === 'PAN_VERIFICATION' ? 'active' : ''}
                  ${currentStage !== 'PAN_VERIFICATION' ? 'completed' : ''}`}
                  >
                  <span>Verification</span><Thumbprint />
                </li>

                <li 
                className={`${currentStage === 'PERSONAL_DETAILS' ? 'active' : ''}
                ${currentStage !== 'PERSONAL_DETAILS' && currentStage !== 'PAN_VERIFICATION' ? 'completed' : ''}`}
                >
                  <span>Personal Details</span><ContactUser />
                </li>

                <li 
                className={`${currentStage === 'BANK_VERIFICATION' ? 'active' : ''}
                ${currentStage !== 'BANK_VERIFICATION' && (currentStage !== 'PERSONAL_DETAILS' && currentStage !== 'PAN_VERIFICATION') ? 'completed' : ''}`}>
                  <span>Bank Verification</span><BankIcon />
                </li>

                <li 
                className={`${currentStage === 'FINANCIAL_DETAILS' ? 'active' : ''}
                ${currentStage !== 'FINANCIAL_DETAILS' && (currentStage === 'IPV_E_SIGN' && currentStage === 'PAN_VERIFICATION') ? 'completed' : ''}`}>
                  <span>Financial Details</span><EditDoc />
                </li>

                <li className={`${currentStage === 'IPV_E_SIGN' ? 'active' : ''}`}>
                  <span>IPV & E-sign</span><Signature />
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='dashBoardRightMain'>
              {currentStage === 'PAN_VERIFICATION' && <PanVerification onNext={() => handleNextStage('PERSONAL_DETAILS')} />}
              {currentStage === 'PERSONAL_DETAILS' && <PersonalDetails onNext={() => handleNextStage('BANK_VERIFICATION')} />}
              {currentStage === 'BANK_VERIFICATION' && <BankVerifications onNext={() => handleNextStage('FINANCIAL_DETAILS')} />}
              {currentStage === 'FINANCIAL_DETAILS' && <FinancialDetails onNext={() => handleNextStage('FINANCIAL_DETAILS')} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashbord;
