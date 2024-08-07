import { React, useState } from 'react';
import SelectBankDetils from './SelectBankDetils';
import AddBankDetails from './AddBankDetails';
import VerifyingDetails from './VerifyingDetails';
import FailedVerification from './FailedVerification';
import VerificationSuccess from './VerificationSuccess';

const Index = ({ onNext }) => {
  const [step, setStep] = useState('SELECT_DETAILS');
  const [verificationMethod, setVerificationMethod] = useState('');

  const nextStep = (next) => setStep(next);

  const handleVerificationMethod = (method) => {
    setVerificationMethod(method);
    if (method === 'UPI') {
      nextStep('VERIFY_SUCCESS');
    } else if (method === 'IFSC') {
      nextStep('ADD_BANK_DETAILS');
    }
  };

  return (
    <>
      {step === 'SELECT_DETAILS' && (
        <SelectBankDetils onNext={handleVerificationMethod} />
      )}
      {step === 'ADD_BANK_DETAILS' && <AddBankDetails onNext={() => nextStep('VERIFY_BANK_DETAILS')} />}
      {step === 'VERIFY_BANK_DETAILS' && <VerifyingDetails onNext={() => nextStep('FAILED_VERIFY')} />}
      {step === 'FAILED_VERIFY' && <FailedVerification onNext={() => nextStep('VERIFY_SUCCESS')} />}
      {step === 'VERIFY_SUCCESS' && <VerificationSuccess onNext={onNext} />}
    </>
  );
};

export default Index;
