import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import '../assets/styles/Content.css';
import Slider1 from '../assets/images/animal.jpeg';
import Slider2 from '../assets/images/adoption.jpeg';
import Slider3 from '../assets/images/welfare.jpeg';



const items = [
    {
      src: Slider1
    //   altText: 'Slide 1',
    //   caption: 'Slide 1',
    },
    {
      src: Slider2
    //   altText: 'Slide 2',
    //   caption: 'Slide 2'
    },
    {
      src: Slider3
    //   altText: 'Slide 3',
    //   caption: 'Slide 3'
    }
  ];



function Introduction(props) {

      
    //   const Example = (props) => {
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
                className="carousel"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
              >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
              </CarouselItem>
            );
          });
        


    return (
        <div>
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
            {/* <img
                className="jumbotron"
                src={Slider1}
                alt="Slide 1"
            /> */}
        </div>
    )
}

export default Introduction;