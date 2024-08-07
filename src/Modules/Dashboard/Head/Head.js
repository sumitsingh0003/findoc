import React from 'react'
import { images } from '../../../assets/assetsImages';
import { Link } from 'react-router-dom';
import "./Head.css"

const Head = () => {
  return (
    <>
     <div className='dashBordHead'>
        <div className='dashbordLogo'>
          <Link to="/">
            <img src={images.MainLogo} alt='findoc logo'/>
          </Link>
        </div>
        <div className='dashbordHdrCont'>
          <p>Hey, we're excited to get you started on findoc</p>
        </div>
     </div>
    </>
  )
}

export default Head
