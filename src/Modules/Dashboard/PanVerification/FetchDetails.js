import React, { useState } from 'react'
import { images } from '../../../assets/assetsImages'
import { RightArrow } from '../../../assets/Icons';

const FetchDetails = ({ onNext }) => {
    const [fetchDetail, setFetchDetail] = useState(true);

    setTimeout(() => {
        setFetchDetail(false)
    }, 5000)


    return (
        <>
            {fetchDetail ?
                <div className='fetchDetailsGif'>
                    <div>
                        <img src={images.FetchDetails} alt='Fetch Gif' /><br />
                        <p>Fetching your PAN details...</p>
                    </div>
                </div> :

                <div className='panUserView'>
                    <div className='row'>
                        <div className='col-md-10 m-auto'>
                            <div className='panUser'>
                                <div className='userPanInfo'>
                                    <div className='panUserImg'>
                                        <img src={images.panBoy} alt='pan User' />
                                    </div>
                                    <div className='panUserInfoCont'>
                                        <p>Hello,</p>
                                        <h3>Aniket</h3>

                                        <p>Your Pan Number</p>
                                        <h3>XXXXXXXXX</h3>
                                    </div>
                                </div>


                                <div className="acceptTick">
                                    Your details have been verified with income Tax Department via your PAN card.
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
            }

        </>
    )
}

export default FetchDetails
