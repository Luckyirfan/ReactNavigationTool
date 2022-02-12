import React from "react";
import { Carousel } from "react-bootstrap";
import { MyCarouselData } from "../Reducers/MyCarouselData";
import { ClassComponent } from "../Reducers/ClassComponent";
const MyCarousel = () => {
  return (
    <div>
      <Carousel>
        {MyCarouselData.map((elements) => {
          return (
            <Carousel.Item interval={1000} key={elements.id}>
              <img
                className="d-block w-100"
                src={elements.carouselImg}
                alt="First slide"
                style={{ height: "400px" }}
              />
              <Carousel.Caption>
                <h3>{elements.carouselTitle}</h3>
                <p>{elements.carouselDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        
      </Carousel>
      <ClassComponent/>
    </div>
  );
};

export default MyCarousel;
