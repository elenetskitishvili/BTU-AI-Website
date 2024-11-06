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

import logoWhite from "../../../assets/images/btu-logo-white.png";
import slide1 from "../../../assets/images/homepage-slider-img-1.jpg";
import slide2 from "../../../assets/images/homepage-slider-img-2.PNG";
import slide3 from "../../../assets/images/homepage-slider-img-3.PNG";
import slide4 from "../../../assets/images/homepage-slider-img-4.PNG";

function Slider() {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide>
        <Slide>
          <SlideBackground src={slide1} alt="" />
          <SlideOverlay />
          <SlideContent>
            <SlideHeadingMain>BTU AI ლექტორი</SlideHeadingMain>
            <SlideHeadingSecondary>
              WEB DEVELOPMENT <br /> FUNDAMENTALS
            </SlideHeadingSecondary>
            <SlideLogo src={logoWhite} alt="btu logo white" />
          </SlideContent>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide>
          <SlideBackground src={slide2} alt="" />
          <SlideOverlay />
          <SlideContent>
            <SlideHeadingMain>BTU AI ლექტორი</SlideHeadingMain>
            <SlideHeadingSecondary>
              WEB DEVELOPMENT <br /> FUNDAMENTALS
            </SlideHeadingSecondary>
            <SlideLogo src={logoWhite} alt="btu logo white" />
          </SlideContent>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide>
          <SlideBackground src={slide3} alt="" />
          <SlideOverlay />
          <SlideContent>
            <SlideHeadingMain>BTU AI ლექტორი</SlideHeadingMain>
            <SlideHeadingSecondary>
              WEB DEVELOPMENT <br /> FUNDAMENTALS
            </SlideHeadingSecondary>
            <SlideLogo src={logoWhite} alt="btu logo white" />
          </SlideContent>
        </Slide>
      </SwiperSlide>
      <SwiperSlide>
        <Slide>
          <SlideBackground src={slide4} alt="" />
          <SlideOverlay />
          <SlideContent>
            <SlideHeadingMain>BTU AI ლექტორი</SlideHeadingMain>
            <SlideHeadingSecondary>
              WEB DEVELOPMENT <br /> FUNDAMENTALS
            </SlideHeadingSecondary>
            <SlideLogo src={logoWhite} alt="btu logo white" />
          </SlideContent>
        </Slide>
      </SwiperSlide>
    </StyledSwiper>
  );
}

export default Slider;
