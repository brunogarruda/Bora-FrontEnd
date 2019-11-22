import styled from "styled-components";

export const SliderWrapperStyle = styled.div`
  .slider-wrapper {
    padding: 40px 0;
    overflow: hidden;
    position: relative;
  }
`;

export const SlideButtonStyle = styled.div`
  .slide-button {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 55px;
    background: rgba(0, 0, 0, 0.5);
    border: 0;
    outline: 0;
    padding: 0;
    margin: 40px 0;
    z-index: 4;
  }
  .slide-button span {
    width: 25px;
    color: #fff;
    display: block;
    margin: 0 auto;
  }
  .slide-button--next {
    right: 0;
  }
  .slide-button--next span {
    transform: rotateZ(-90deg);
  }
  .slide-button--prev {
    left: 0;
  }
  .slide-button--prev span {
    transform: rotateZ(90deg);
  }
`;

export const SliderStyle = styled.div`
  .slider {
    display: flex;
    position: relative;
  }
  .slider__container {
    display: flex;
    padding: 0 55px;
    transition: transform 300ms ease 100ms;
    z-index: 3;
    width: 100%;
  }
  .slider self:not(&--open).item:hover.show-details-button {
    opacity: 1;
  }
  .slider self:not(&--open).item:hover {
    transform: scale(1.5) !important;
  }
  .slider self:not(&--open):hover.item {
    transform: translateX(-25%);
  }
  .slider self:not(&--open).item:hover ~ .item {
    transform: translateX(25%);
  }
`;
export const ContentStyle = styled.div`
  .content {
    position: relative;
    height: 37vw;
    margin-top: -40px;
  }
  .content__background,
  .content__background__shadow,
  .content__background__image,
  .content__area {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .content__background {
    left: 0;
    right: 0;
  }
  .content__background__shadow {
    left: 0;
    background: #000;
    width: 30%;
    z-index: 2;
  }
  .content__background__shadow:before {
    content: '';
    position: absolute;
    z-index: 10;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
  .content__background__image {
    right: 0;
    width: 70%;
    height: 100%;
    background-position: center 10%;
    background-size: cover;
    z-index: 1;
  }
  .content__area {
    left: 0;
    right: 0;
    height: 100%;
    z-index: 3;
  }
  .content__area__container {
    padding: 30px 70px;
    color: wheat;
  }
  .content__title {
    font-size: 45px;
    color: #fff;
    font-weight: 700;
  }
  .content__description {
    font-size: 18px;
    color: #999;
    margin-top: 20px;
    max-width: 500px;
  }
  .content__close {
    color: #fff;
    width: 40px;
    height: 40px;
    background: transparent;
    outline: none;
    border: none;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;
