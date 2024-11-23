import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {
  StyledSwiper,
  Slide,
  SlideBackground,
  SlideOverlay,
  SlideContent,
  SlideHeadingMain,
  SlideHeadingSecondary,
  SlideLogo,
} from "./SliderStyles.js";

function Slider() {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/homepage_slider/api/sliders/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSlides(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <Slide>
            <SlideBackground
              src={slide.background_image}
              alt={`Slide ${index}`}
            />
            <SlideOverlay />
            <SlideContent>
              <SlideHeadingMain>{slide.main_heading}</SlideHeadingMain>
              <SlideHeadingSecondary>
                {slide.secondary_heading}
              </SlideHeadingSecondary>
              <SlideLogo src={slide.logo} alt="Logo" />
            </SlideContent>
          </Slide>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}

export default Slider;
