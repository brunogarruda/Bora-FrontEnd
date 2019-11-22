import React, { useState } from "react";
import cx from "classnames";
import { SliderStyle } from "./components/styles/stylesSlider";
import { useSliding } from "../hooks/useSliding";
import { useSizeElement } from "../hooks/useSizeElement";
import { SliderContext } from "./components/context";
import { SliderWrapper, SlideButton, Content } from "./components/SliderExports";

export const Slider = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } = useSliding(
    width,
    React.Children.count(children)
  );
  const handleSelect = evento => {
    setCurrentSlide(evento);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide
  };

  return (
    <SliderStyle>
      <SliderContext.Provider value={contextValue}>
        <SliderWrapper>
          <div className={cx("slider", { "slider--open": currentSlide != null })}>
            <div ref={containerRef} className="slider__container" {...slideProps}>
              {children}
            </div>
          </div>
          {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
          {hasNext && <SlideButton onClick={handleNext} type="next" />}
        </SliderWrapper>
        {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
      </SliderContext.Provider>
    </SliderStyle>
  );
};
