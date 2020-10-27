import React, { useEffect, useState } from 'react';
import logo from './netflix-logo.png';
import avator from './avator-logo.png';
import './Nav.css';

function Nav(){

    const [show, handleShow] = useState(false);

useEffect(()=> {
window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        handleShow(true);
 } else handleShow(false);
});

 return () => {
     window.removeEventListener("scroll");
 };
}, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav-logo" src={logo} alt="logo" />

        <img className="nav-avator" src={avator} alt="logo" />

        </div>
    );


}

export default Nav;