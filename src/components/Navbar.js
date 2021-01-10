import React, { useState, useEffect } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';


export default function Navbar() {
    //Navbar menu click function
    const [click, setClick] = useState(false);
    const clickHandler = () => setClick(!click);
    
    const [button, setButton] = useState(true);

    const closeMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[])

    window.addEventListener('resize', showButton);
    
    return (
    <>
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    GameCave <i className="fas fa-gamepad" />
                </Link>
                <div className="menu-icon" onClick={clickHandler}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMenu}> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-links" onClick={closeMenu}>Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gameroom" className="nav-links-mobile" onClick={closeMenu}>Game Room</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn-outline'>Games Room</Button>}
            </div>
        </nav>
   </>
    );
}
