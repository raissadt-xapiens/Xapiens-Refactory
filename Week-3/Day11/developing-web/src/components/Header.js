import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Col
} from 'reactstrap';
import '../assets/styles/Header.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle1 = () => setIsOpen(!isOpen);
    const toggle2 = () => setModal(!modal);

    return (
        <div>
            <Navbar
                className="navigation"
                light 
                expand="lg">
                <NavbarBrand
                    className="mr-auto"
                >
                    <h2
                        className="oipa"
                    >
                        OIPA
                    </h2>
                </NavbarBrand>
                <NavbarToggler
                    onClick={toggle1}
                />
                <Collapse
                    isOpen={isOpen} navbar>
                    <Nav
                        className="ml-auto"
                        navbar
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
                        <NavItem>
                            <NavLink
                                className="main-link"
                                onClick={toggle2}
                            >
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div>
                <Modal isOpen={modal} toggle={toggle2} className="pop-modal">
                    <ModalHeader toggle={toggle2} className="modal-title">Sign In</ModalHeader>
                    <ModalBody className="modal-body">
                        <Form className="signup-signin">
                            <Col>
                                <h5 className="modal-sub">
                                    Email:
                                </h5>
                                <FormGroup>
                                    <Label for="email" type="email" />
                                    <Input type="email" id="exampleEmail" placeholder="Put your email" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <h5 className="modal-sub">
                                    Password:
                                </h5>
                                <FormGroup>
                                    <Label for="password" type="password" />
                                    <Input type="password" id="examplePassword" placeholder="Put your password" /> 
                                </FormGroup>
                            </Col>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick="submit">Submit</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Header;