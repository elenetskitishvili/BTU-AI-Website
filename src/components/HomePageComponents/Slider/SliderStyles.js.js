import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    background: none;
    color: transparent;
    border: none;
    width: 0;
    height: 0;
    opacity: 0.3;
    transition: all 0.25s ease-in-out;
  }

  .swiper-button-prev {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="44" viewBox="0 0 28 44"><path d="M25.0625 0.31873L1.2625 20.8437C0.581252 21.4312 0.581252 22.5625 1.2625 23.1562L25.0625 43.6812C25.95 44.4437 27.25 43.7562 27.25 42.525V1.47498C27.25 0.24373 25.95 -0.44377 25.0625 0.31873Z" fill="white" fill-opacity="1"/></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 28px;
    height: 44px;
    margin-left: 100px;
  }

  .swiper-button-next {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="44" viewBox="0 0 28 44"><path d="M26.7375 20.8437L2.9375 0.31873C2.05 -0.44377 0.75 0.24373 0.75 1.47498V42.525C0.75 43.7562 2.05 44.4437 2.9375 43.6812L26.7375 23.1562C27.4187 22.5687 27.4187 21.4312 26.7375 20.8437Z" fill="white" fill-opacity="1"/></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 28px;
    height: 44px;
    margin-right: 100px;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    opacity: 1;
  }

  @media (max-width: 75em) {
    .swiper-button-prev {
      margin-left: 50px;
    }
    .swiper-button-next {
      margin-right: 50px;
    }
  }

  @media (max-width: 34em) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;

export const Slide = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  @media (max-width: 53em) {
    height: 400px;
  }
  @media (max-width: 34em) {
    height: 250px;
  }
`;

export const SlideBackground = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  object-fit: contain;
  overflow: hidden;
`;

export const SlideOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(120, 11, 65, 0.59);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding-top: 70px;
  padding-bottom: 28px;
  text-align: center;
  z-index: 99999;
  width: 100%;
`;

export const SlideHeadingMain = styled.h2`
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
  background-color: #fff;
  color: #473d58;
  @media (max-width: 75em) {
    font-size: 40px;
    line-height: 70px;
  }
  @media (max-width: 53em) {
    font-size: 28px;
    line-height: 60px;
  }
  @media (max-width: 34em) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const SlideHeadingSecondary = styled.h3`
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
  color: #fff;
  @media (max-width: 75em) {
    font-size: 40px;
    line-height: 70px;
  }
  @media (max-width: 53em) {
    font-size: 28px;
    line-height: 60px;
  }
  @media (max-width: 34em) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const SlideLogo = styled.img`
  width: 100px;
  height: auto;
  @media (max-width: 53em) {
    width: 60px;
  }
`;
