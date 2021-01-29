import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import '../assets/styles/Header.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                className="navigation"
                lightexpand="lg">
                <NavbarBrand
                    className="mr-auto"
                >
                    <h2
                        style={{
                            fontStyle: "italic",
                            marginLeft: "10px"
                        }}
                    >
                        OIPA
                    </h2>
                </NavbarBrand>
                <NavbarToggler
                    onClick={toggle}
                />
                <Collapse
                    isOpen={isOpen} navbar>
                    <Nav
                        className="ml-auto"
                        navbar
                        // style={{marginRight: "10px"}}
                    >
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="#"
                            >
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="#"
                            >
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="#"
                            >
                                News
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;