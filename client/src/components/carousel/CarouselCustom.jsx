import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";



export default function CarouselCutom() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade
      style={{ width: "100%" }}
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
    >
      <Carousel.Item>
        <img
          className="w-100"
          src={'https://res.cloudinary.com/urbanfood/image/upload/c_fill,g_auto,w_1550,h_400/v1677769882/urbanfood/1_fu9eht.jpg'}
          alt="1st img"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src={'https://res.cloudinary.com/urbanfood/image/upload/c_fill,g_auto,w_1550,h_400/v1677769882/urbanfood/3_g8rlyr.jpg'}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src={'https://res.cloudinary.com/urbanfood/image/upload/c_fill,g_auto,w_1550,h_400/v1677769882/urbanfood/2_f5tzq5.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="w-100"
          src={'https://res.cloudinary.com/urbanfood/image/upload/c_fill,g_auto,w_1550,h_400/v1677769882/urbanfood/4_ccd5fl.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
