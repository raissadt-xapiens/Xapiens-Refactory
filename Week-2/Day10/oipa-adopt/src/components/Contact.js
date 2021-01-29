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
            <Container>
                <Row>
                    <Col>
                        <h2>Contact</h2>
                        <h3>Headquarters:
                            <br/>
                            San Battista 13 Street - 25007 Cventry (London, UK)
                            <br/>
                            Tel. +24 02 6327777
                            <br/>
                            Fax +24 178 9876543
                        </h3>
                    </Col>
                    <Col>
                        <h2>Social Media</h2>
                        <img className="socmed" src={Socmed1} alt="Youtube" />
                        <br/>
                        <img className="socmed" src={Socmed2} alt="Facebook" />
                        <br/>
                        <img className="socmed" src={Socmed3} alt="Instagram" />
                        <br/>
                        <img className="socmed" src={Socmed4} alt="Twitter" />
                    </Col>
                    <Col>
                        <h2>Sign for Newsletter</h2>
                        <Form>
                            <FormGroup>
                                <Label for="name">Your Name (required)*</Label>
                                <Input type="text" name="name" id="name" placeholder="write your name.."></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Your Email (required)*</Label>
                                <Input type="email" name="email" id="email" placeholder="write your email.."></Input>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;