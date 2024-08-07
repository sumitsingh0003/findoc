import React from 'react'
import { images } from '../../../assets/assetsImages'
import { RightArrow } from '../../../assets/Icons';

const AdharDetails = ({ onNext }) => {
    return (
        <>
            <div className='adharDetails'>
                <div className='panUserView'>
                    <div className='row'>
                        <div className='col-md-10 m-auto'>
                            <div className='panUser'>
                                <div className='userPanInfo'>
                                    <div className='panUserImg'>
                                        <img src={images.AdharCard} alt='pan User' />
                                    </div>
                                    <div className='panUserInfoCont'>
                                        <p>Hello,</p>
                                        <h3>Aniket</h3>

                                        <p>Your Adhar Number</p>
                                        <h3>XXXXXXXXX</h3>
                                    </div>
                                </div>


                                <div className="acceptTick">
                                    Your details have been verified by. <img src={images.MinDigiLogo} alt='' />
                                </div>
                                <div className='panFormButton enabled'>
                                    <button type="submit" className='panFrmBtn' onClick={onNext}>
                                        Next <RightArrow />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdharDetails
