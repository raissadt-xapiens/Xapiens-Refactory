import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Label,
    Input,
    Button
} from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bank from '../assets/images/bank.png';
import Paypal from '../assets/images/paypal.png';
import '../assets/styles/Content.css';

function Donation() {
    return (
        <div className="donation-page">
            <Header />
            <Container
                style={{
                    height: "auto"
                }}
            >
                <h2
                    className="tagline-donation"
                >
                    Make a Donation
                </h2>
                <Row className="row-donation">
                    <Col md="6">
                        <Card className="card-donation">
                            <CardTitle className="type-of-donation">Bank</CardTitle>
                            <img className="img-donation" src={Bank} alt="Bank" />
                            <CardText className="description-of-donation">
                            Write Causal “DONATION TO OIPA” and the exact amount
                            <br/><br/>
                            Registered person: OIPA – International Organization for Animal Protection
                            <br/><br/>
                            UBI Banca – Agency COVENTRY-UNITED KINGDOM
                            VIA BOCCHETTO 13 – 20123 Coventry (UK)
                            <br/><br/>
                            Banking coordinate
                            BIC: BLOPIT22
                            IBAN: IT88 T 03111 01626 0000000 18458
                            </CardText>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-donation">
                            <CardTitle className="type-of-donation">Paypal</CardTitle>
                            <img className="img-donation" src={Paypal} alt="Bank" />
                            <CardText className="description-of-donation">
                                Write Causal “DONATION TO OIPA” and the exact amount
                                <br/><br/>
                                Registered person: OIPA – International Organization for Animal Protection
                                <br/><br/>
                                <hr/>
                                <Label className="check-donation">
                                    <Input type="checkbox" /><span>A monthly donation</span>
                                </Label>
                                <br/><br/>
                                <Button className="button-donation">Donate</Button>
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Donation;