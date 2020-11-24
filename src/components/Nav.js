import React, {useEffect, useState} from 'react';
import  '../css/Nav.css';

const Nav = () => {

    const [show, setShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setShow(true)
            } else setShow(false);
        })
        // return () => {
        //     window.removeEventListener("scroll");
        // };
    }, [])

    return (
        <>
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            />
            <img
            className="nav__avatar"
            src=""
            alt="Avatar"
            />
        </div>
        </>
    )
}

export default Nav;