import React from 'react';
import { 
    Container,
    Row, 
    Col,
    Card,
    CardDeck,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText,
    Button
} from 'reactstrap';
import News1 from '../../assets/images/news1.jpg';
import News2 from '../../assets/images/news2.jpg';
import News3 from '../../assets/images/news3.jpg';
import '../../assets/styles/Menu.css';

function AllNews(props) {
    return (
        <div>
            <Container
                style={{
                    height: "auto"
                }}
            >
                <h1
                    className="headline"
                >
                    2021 NEWS
                </h1>
                <Row
                    className="years-of-news"
                >
                    <Col>Newer Posts</Col>
                    <Col>Older Posts</Col>
                </Row>
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
                    <CardDeck
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
                    </CardDeck>
                    <br/>
                    <CardDeck
                        className="deck-of-news"
                    >
                        <Card>
                            <CardImg top width="100%" src={News2} alt="News-2" />
                                <CardBody>
                                    <CardTitle tag="h4">News 2</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Car strayyyyyssssssssssssssssss.</CardText>
                                    <Button>
                                        Read more...
                                    </Button>
                                </CardBody>
                        </Card>
                    </CardDeck>
                    <br/>
                    <CardDeck
                        className="deck-of-news"
                    >
                        <Card>
                            <CardImg top width="100%" src={News3} alt="News-3" />
                                <CardBody>
                                    <CardTitle tag="h4">News 3</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Car strayyyyyssssssssssssssssss.</CardText>
                                    <Button>
                                        Read more...
                                    </Button>
                                </CardBody>
                        </Card>
                    </CardDeck>
            </Container>
        </div>
    )
}

export default AllNews;