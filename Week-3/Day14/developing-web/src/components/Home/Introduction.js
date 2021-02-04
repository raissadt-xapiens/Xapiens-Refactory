import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'reactstrap';
import '../../assets/styles/Content.css';
import Jumbotron from '../../assets/images/animal.jpeg';


function Introduction() {

    return (
        <div>
            <img
                className="slider"
                src={Jumbotron}
                alt="My Cat"
            />
            <Container
                className="themed-container"
                fluid={true}
                style={{
                    height: "auto",
                    backgroundColor: "white",
                }}
            >
                <h1
                    className="intro"
                >
                    Welcome to OIPA
                </h1>
                <Row>
                    <Col
                        xs="6"
                    >
                        <h3
                            className="about"
                        >
                            Get Involved
                        </h3>
                        <h6
                            className="description"
                        >
                            OIPA, International Organization for Animal Protection, is an International Confederation of associations for the animal protection and for the defence of animal rights all over the world.
                            <br/>
                            <br/>
                            OIPA International has 6 delegations: in Cameroon, in India, in Nepal, in Tanzania, in Mexico and the headquarters in UK. The delegations act as detached offices and focus on local campaigns, therefore they rely on the headquarters for the main international campaigns.
                        </h6>
                    </Col>
                    <Col
                        xs="6"
                    >
                        <h3
                            className="about"
                        >
                            The Campaigns
                        </h3>
                        <h6
                            className="description"
                        >
                            The Organization's purpose consists in the defence of animal rights and in the defence of the animals from every kind of mistreatment. The majority of that are comprised of strays, rescues, and surrenders. Hence, save the animals by follow our campaigns and make a donation.
                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Introduction;