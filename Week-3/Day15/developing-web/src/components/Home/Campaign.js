import React from 'react';
import {
    Container,
    Button
} from 'reactstrap';
import '../../assets/styles/Content.css';

function Campaign() {
    return (
        <div>
            <Container
                // className="themed-container"
                // fluid={true}
                style={{
                    height: "auto",
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
                <h1
                    className="project"
                >
                    Help the OIPA Put a Stop to Animal Cruelty
                </h1>
                <br/>
                <Button
                    className="donation"
                    style={{
                        color: "black",
                        backgroundColor: "#AC9371",
                        fontFamily: 'SimSun-ExtB',
                        height: "80px",
                        width: "250px",
                        fontSize: "40px",
                        fontWeight: "700",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        borderRadius: "20px"
                    }}
                >
                    DONATE
                </Button>
                <br/>
                <br />
            </Container>
        </div>
    )
}

export default Campaign;