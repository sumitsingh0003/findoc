import React from 'react'
import { RightArrow } from '../../../assets/Icons';
import { images } from '../../../assets/assetsImages';

const VerificationSuccess = ({ onNext }) => {
  return (
    <>
      <div className="succsessfull">
        <div>
          <div className='succBank'>
            <img src={images.ScssBnkDetls} alt='Success Full ' />
          </div>
          <h2>Verification sucessful!</h2>
          <p>Your Bank account is successfully connected.</p>
          <div className="selectBankButon scccBtn">
            <button onClick={onNext} >Next <RightArrow /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerificationSuccess
