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
import News4 from '../../assets/images/news4.jpg';
import Newer from '../../assets/images/back.png';
import Older from '../../assets/images/next.png';
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
                    <CardDeck
                        className="deck-of-news"
                    >
                        <Card>
                            <CardImg top width="100%" src={News1} alt="News-1" />
                                <CardBody className="body-of-news">
                                    <CardTitle className="news-title">Community Cats Neglected in The French Island of Corsica: OIPA's Volunteers Assists Them with Food, Treatment, and Sterilization</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{fontStyle: "italic"}}>February 3, 2021</CardSubtitle>
                                    <CardText className="news-text">Stray cats do not have an easy life in the French island of Corsica in the Mediterranean Sea. No one care about and locals mainly see them as annoying problem to avoid and not as living beings in need of care and protection. Moreover, ..</CardText>
                                    <br/>
                                    <Button className="news-button">
                                        Read more
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
                                <CardBody className="body-of-news">
                                    <CardTitle className="news-title">Three Men Filmed Beating Ganges River Dolphin to Death Arrested. OIPA India Reminds That Those Animals are a National Heritage That Must be Protected</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{fontStyle: "italic"}}>January 23, 2021</CardSubtitle>
                                    <CardText className="news-text">The attack, which happened on 31 December, involved a gang of young men who violently hit a Ganges River dolphin with wooden rods and an axe until it bled, suffocating then the animal beneath the water of the Sharda canal in the Indian state of Uttar Pradesh. The dolphin was later found dead by ...</CardText>
                                    <br/>
                                    <Button className="news-button">
                                        Read more
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
                                <CardBody className="body-of-news">
                                    <CardTitle className="news-title">A New Chapter Begins: "Protection and Care for Our Animals": Thanks to OIPA Sierra Leone</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{fontStyle: "italic"}}>January 13, 2021</CardSubtitle>
                                    <CardText className="news-text">It is always a pleasure when we have to announce a new OIPA delegation, especially when the love and commitment for animals comes from countries that, despite the heavy difficulties faced daily by the local population, are still willing to dedicate precious time to the care and protection of animals. Our International Representative organized a ..</CardText>
                                    <br/>
                                    <Button className="news-button">
                                        Read more
                                    </Button>
                                </CardBody>
                        </Card>
                    </CardDeck>
                    <br/>
                    <CardDeck
                        className="deck-of-news"
                    >
                        <Card>
                            <CardImg top width="100%" src={News4} alt="News-4" />
                                <CardBody className="body-of-news">
                                    <CardTitle className="news-title">Let's Start With The ABC! The Animal Birth Control Program for Stray Dogs of Voice of Animal Nepal: Spray / Neuter and Anti Rabies Vaccination Activities</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{fontStyle: "italic"}}>January 3, 2021</CardSubtitle>
                                    <CardText className="news-text">Voice of Animal Nepal, member league of OIPA International, is a small organization with a big heart. Despite the difficult period and resources, which are limited, their love and compassion for animals, especially for the many stray dogs who live homeless after being abandoned, is stronger than ever. The association has been feeding ...</CardText>
                                    <br/>
                                    <Button className="news-button">
                                        Read more
                                    </Button>
                                </CardBody>
                        </Card>
                    </CardDeck>
                <Row
                    className="years-of-news"
                >
                    <Col><img src={Newer} alt="Back Posts" style={{width: "30px", height: "30px"}} /> Newer Posts</Col>
                    <Col>Older Posts <img src={Older} alt="Next Posts" style={{width: "30px", height: "30px"}} /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default AllNews;