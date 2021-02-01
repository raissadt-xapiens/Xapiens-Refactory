import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import '../assets/styles/Content.css';
import Socmed1 from '../assets/images/youtube.png';
import Socmed2 from '../assets/images/facebook.png';
import Socmed3 from '../assets/images/instagram.png';
import Socmed4 from '../assets/images/twitter.png';

function Contact() {
    return (
        <div>
            <Container
                className="themed-container"
                fluid={true}
                style={{
                    backgroundColor: "#AC9371",
                    opacity: "0.34",
                    paddingLeft: "200px",
                    paddingRight: "200px",
                    height: "450px"
                }}
            >
                <Row
                    style={{textAlign: "left"}}
                >
                    <Col>
                        <h2
                            className="info"
                        >
                            Contact
                        </h2>
                        <h3
                            className="office"
                        >
                            Headquarters:
                            <br/>
                            San Battista 13 Street<br/>- 25007 Coventry<br/>(London, UK)
                            <br/>
                            <br/>
                            Tel. +24 02 6327777
                            <br/>
                            Fax +24 178 9876543
                        </h3>
                    </Col>
                    <Col>
                        <h2
                            className="info"
                        >
                            Social Media
                        </h2>
                        <p className="socmed-1"><img className="socmed-2" src={Socmed1} alt="Youtube" /> OIPA Animal</p>
                        <p className="socmed-1"><img className="socmed-2" src={Socmed2} alt="Facebook" /> OIPA Adoption</p>
                        <p className="socmed-1"><img className="socmed-2" src={Socmed3} alt="Instagram" /> @oipa_adopt</p>
                        <p className="socmed-1"><img className="socmed-2" src={Socmed4} alt="Twitter" /> @oipa_adopt</p>
                    </Col>
                    <Col>
                        <h2
                            className="info"
                        >
                            Sign for Newsletter
                        </h2>
                        <Form
                            className="newsletter"
                        >
                            <FormGroup>
                                <Label for="name">Your Name (required)*</Label>
                                <Input type="text" name="name" id="name" placeholder="write your name.."></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Your Email (required)*</Label>
                                <Input type="email" name="email" id="email" placeholder="write your email.."></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                     Accept Privacy & Policy
                                </Label>
                            </FormGroup>
                            <br/>
                            <Button className="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;