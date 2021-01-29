import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'reactstrap';
import '../assets/styles/Content.css';

function Profile() {
    return (
        <div>
            <Container
                // className="themed-container"
                // fluid={true}
                style={{
                    height: "750px",
                    // backgroundColor: "black",
                    paddingTop: "30px",
                    marginTop: "-30px"
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
                        </h6>
                    </Col>
                    <Col
                        xs="6"
                    >
                        <h3
                            className="about"
                        >
                            Around The World
                        </h3>
                        <h6
                            className="description"
                        >
                            The Organization's purpose consists in the defence of animal rights and in the defence of the animals from every kind of mistreatment. Save the animals follow our campaigns and make a donation.
                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile;