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
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../assets/styles/Header.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
    const [value, setValue] = useState();

    const toggle1 = () => setIsOpen(!isOpen);
    const toggle2 = () => setModal(!modal);
    const toggle3 = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    }
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    }

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
                        <NavLink 
                            href="/" 
                            rel="noreferrer noopener" 
                            style={{
                                color: "black"
                            }}
                        >
                            OIPA
                        </NavLink>
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
                                href="/menus"
                                rel="noreferrer noopener"
                            >
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="/projects"
                                rel="noreferrer noopener"
                            >
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                href="/news"
                                rel="noreferrer noopener"
                            >
                                News
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="main-link"
                                onClick={toggle2}
                            >
                                Account
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div>
                <Modal isOpen={modal} toggle={toggle2} className="pop-modal">
                    <ModalHeader toggle={toggle2} className="modal-title">Sign In</ModalHeader>
                    <ModalBody>
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
                        <br/>
                        <a href="!#" onClick={toggle3} className="modal-link">Don't have an account?</a>
                            <Modal isOpen={nestedModal} toggle={toggle3} onCLosed={closeAll ? toggle2 : undefined} className="pop-modal">
                                <ModalHeader className="modal-title">Sign Up</ModalHeader>
                                <ModalBody>
                                    <Form className="signup-signin">
                                        <Col>
                                            <h5 className="modal-sub">
                                                Full Name:
                                            </h5>
                                        <FormGroup>
                                            <Label for="name" type="text" />
                                            <Input type="text" id="exampleName" placeholder="Put your name" />
                                        </FormGroup>
                                        </Col>
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
                                        <Col>
                                            <h5 className="modal-sub">
                                                Phone Number:
                                            </h5>
                                        <FormGroup>
                                            <Label for="phone" type="number" />
                                            <PhoneInput value={value} onChange={setValue} placeholder="Put your phone number" />
                                            {/* <Input type="number" pattern="[0-9]+" id="examplePhoNum" placeholder="Put your phone number" />  */}
                                        </FormGroup>
                                        </Col>
                                        <Col>
                                            <h5 className="modal-sub">
                                                Address:
                                            </h5>
                                        <FormGroup>
                                            <Label for="address" type="text" />
                                            <Input type="text" id="exampleAddress" placeholder="Put your address" />
                                        </FormGroup>
                                        </Col>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={toggleAll} type="submit" className="modal-button">Submit</Button>
                                </ModalFooter>
                            </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" className="modal-button">Submit</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Header;