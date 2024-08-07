import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets/assetsImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '../../assets/Icons';
import Menus from './Menu/Menu';

import "./Header.css"

const Header = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className="mainHeader">
                        <div className='row'>
                            <div className='col-md-2'>
                                <div className='mainLogo'>
                                    <Link to="/">
                                        <img src={images.MainLogo} alt='Main FinDoc logo' />
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className='searchBarSec'>
                                    <div className='searchInput'>
                                        <input type='text' placeholder='Reliance Industries Ltd.' />
                                        <SearchIcon />
                                    </div>
                                    <div className='HdrLoginBtn'>
                                        <button>Login <FontAwesomeIcon icon={faCaretDown} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Menus />
                </div>
            </header>
        </>
    )
}

export default Header
