import React from 'react';
import {
    Container,
    Button
} from 'reactstrap';
import '../assets/styles/Content.css';

function Campaign() {
    return (
        <div>
            <Container
                className="themed-container"
                fluid={true}
                style={{
                    height: "650px",
                    backgroundColor: "white"
                }}
            >
                <h1
                    className="project"
                >
                    Join Our Journey with Many Projects
                </h1>
                <hr 
                    className="line"
                    style={{
                        borderColor: "10px solid black"
                    }}
                />
                <br/>
                <h1
                    className="project"
                >
                    or
                </h1>
                <br/>
                <br/>
                <br/>
                <h1
                    className="project"
                >
                    Help the OIPA Put a Stop to Animal Cruelty
                </h1>
                <Button
                    className="donation"
                    onCLick="#"
                >
                    DONATE
                </Button>
            </Container>
        </div>
    )
}

export default Campaign;