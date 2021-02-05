import React from 'react';
import {
    Container,
    // Carousel,
    // CarouselItem,
    // CarouselControl,
    // CarouselIndicators,
    // CarouselCaption,
    // Card,
    // CardDeck,
    // CardImg,
    // CardBody,
    // CardTitle,
    // CardSubtitle,
    // Button
} from 'reactstrap';
import Campaign1 from '../../assets/images/campaign1.jpeg';
import '../../assets/styles/Menu.css';


// const items = [
//     {
//         src: {Campaign1}
//     }
// ]



function AllProjects(props) {
    return (
        <div>
            <Container
                style={{
                    height: "auto"
                }}
            >
                <h1
                    className="proj-camp"
                >
                    Campaigns & Projects
                </h1>




                    {/* <CardDeck
                        className="deck-of-news"
                    >
                        <Card>
                            <CardImg top width="100%" src={News1} alt="News-1" />
                                <CardBody>
                                    <CardTitle tag="h4">News 1</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Car strayyyyyssssssssssssssssss.</CardText>
                                    <Button>
                                        Read more...
                                    </Button>
                                </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={News2} alt="News-1" />
                                <CardBody>
                                    <CardTitle tag="h4">News 1</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Car strayyyyyssssssssssssssssss.</CardText>
                                    <Button>
                                        Read more...
                                    </Button>
                                </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={News1} alt="News-1" />
                                <CardBody>
                                    <CardTitle tag="h4">News 1</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Car strayyyyyssssssssssssssssss.</CardText>
                                    <Button>
                                        Read more...
                                    </Button>
                                </CardBody>
                        </Card>
                    </CardDeck> */}
            </Container>
        </div>
    )
}

export default AllProjects;
