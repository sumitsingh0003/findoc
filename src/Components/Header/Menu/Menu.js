import React from 'react'
import { Link } from 'react-router-dom'
import { DownArrow, CallUs, RightArrow } from '../../../assets/Icons';
import "./Menu.css"


const Menus = () => {
    return (
        <>
            <div className='menuBar'>
                <ul>
                    <li><Link to="/">About Us <DownArrow /> </Link></li>
                    <li><Link to="/">Product & Services <DownArrow /></Link></li>
                    <li><Link to="/">Knowladge Center <DownArrow /></Link></li>
                    <li><Link to="/">Events <DownArrow /></Link></li>
                    <li><Link to="/">Career <DownArrow /></Link></li>
                    <li><Link to="/">Contact Us <CallUs /></Link></li>
                </ul>
                <button>Open Demat Account <RightArrow /></button>
            </div>
        </>
    )
}

export default Menus
