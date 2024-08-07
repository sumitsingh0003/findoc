import {React, useState} from 'react';
import PanDetails from './PanDetails';
import FetchDetails from './FetchDetails';
import CompleteKyc from './CompleteKyc';
import AdharDetails from './AdharDetails';

const PanVerification = ({ onNext }) => {
  const [step, setStep] = useState('PAN_DETAILS');

  const nextStep = (next) => setStep(next);

  return (
    <>
      {step === 'PAN_DETAILS' && <PanDetails onNext={() => nextStep('FETCH_DETAILS')} />}
      {step === 'FETCH_DETAILS' && <FetchDetails onNext={() => nextStep('COMPLETE_KYC')} />}
      {step === 'COMPLETE_KYC' && <CompleteKyc onNext={() => nextStep('ADHAR_DETAILS')} />}
      {step === 'ADHAR_DETAILS' && <AdharDetails onNext={onNext} />}
    </>
  );
};

export default PanVerification;
