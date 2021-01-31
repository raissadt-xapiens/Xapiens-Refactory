import React from 'react';
import {
    Container
} from 'reactstrap';

const Border = () => {
    return (
    <div>
        <Container
            className="themed-container"
            fluid={true}
            style={{
                height: "50px",
                backgroundColor: "#AC9371",
                opacity: "0.1"
            }}
        >

        </Container>
    </div>
    )
}

export default Border;