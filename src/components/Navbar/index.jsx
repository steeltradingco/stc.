import React from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import './style.css';

function NavbarComponent() {

    const handleScrollHomePage = () => {
        window.scrollTo(0, 0);
    };

    const handleScrollContactPage = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <div style={{marginBottom: "79px"}}>
            <div className='navbar-container'>
                <Navbar fluid rounded>
                    <NavbarBrand href="/">
                    <img src="https://i.postimg.cc/JnZndQt3/STC-LOGO-01.png" className='stc-logo' alt="STC logo " />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white co-name"><span className='web-name'>S</span>teel <span className='web-name'>T</span>rading <span className='web-name'>C</span>o.</span>
                    </NavbarBrand>
                    {/* <div className="flex md:order-2"> */}
                        <NavbarToggle />
                    {/* </div> */}
                    <NavbarCollapse>
                        <NavbarLink onClick={handleScrollHomePage} className="opt" active>
                            Home
                        </NavbarLink>
                        <NavbarLink disabled={true} active className="opt disabled-opt">About</NavbarLink>
                        <NavbarLink disabled={true} className="opt disabled-opt">Services</NavbarLink>
                        <NavbarLink onClick={handleScrollContactPage} active className="opt">Contact</NavbarLink>
                    </NavbarCollapse>
                </Navbar>
        </div>
        </div>
    );
};

export default NavbarComponent;
