import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    // CarouselCaption,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import Projects1 from '../../assets/images/projects1.jpg';
import Projects2 from '../../assets/images/projects2.jpg';
import Projects3 from '../../assets/images/projects3.jpg';
import '../../assets/styles/Menu.css';


const items = [
    {
        src: Projects1,
        altText: 'Project 1',
        caption: 'Project 1'
    },
    {
        src: Projects2,
        altText: 'Project 2',
        caption: 'Project 2'
    },
    {
        src: Projects3,
        altText: 'Project 3',
        caption: 'Project 3'
    }
];



function AllProjects(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} 
            style={{height: "500px", width: "auto"}} 
            />
            {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
          </CarouselItem>
        );
    });

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
                <Card
                    className="carousel-projects"
                >
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
                </Card>
                <br/>
                <Button className="button-support">BECOME A VOLUNTEER</Button>
                <Row>
                    <Col>
                        <h1
                            className="proj-camp"
                        >
                            Issues
                        </h1>
                        <ListGroup
                            className="list-issues"
                        >
                            <ListGroupItem>Abondonment and Straying</ListGroupItem>
                            <ListGroupItem>Bullfight and Festivals</ListGroupItem>
                            <ListGroupItem>Circus</ListGroupItem>
                            <ListGroupItem>Cosmetics</ListGroupItem>
                            <ListGroupItem>Folk Parties</ListGroupItem>
                            <ListGroupItem>Hunting</ListGroupItem>
                            <ListGroupItem>Vivisection</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <br/>
                <Button className="button-support">BECOME A SUPPORTER</Button>
                <br/><br/><br/><br/><br/>
            </Container>
        </div>
    )
}

export default AllProjects;