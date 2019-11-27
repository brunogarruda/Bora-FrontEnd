import React, { useState } from "react";
import "./components/styles/styles.css";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import ItemsCarousel from "react-items-carousel";
// import usuarios from "../Eventos/data/usuariosLimit10.json";

export const Carousel = ({children}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<NavigateBefore />}
        rightChevron={<NavigateNext />}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {children.map((Child,index) => (
          <div style={{ height: 200, background: "#EEE" }}>{Child}</div>
        ))}
      </ItemsCarousel>
    </div>
  );
};

// export const Carousel = () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

//   return (
//     <div style={{ padding: `0 ${chevronWidth}px` }}>
//       <ItemsCarousel
//         requestToChangeActive={setActiveItemIndex}
//         activeItemIndex={activeItemIndex}
//         numberOfCards={2}
//         gutter={20}
//         leftChevron={<NavigateBefore />}
//         rightChevron={<NavigateNext />}
//         outsideChevron
//         chevronWidth={chevronWidth}
//       >
//         <div style={{ height: 200, background: "#EEE" }}>{apelido}</div>
//       </ItemsCarousel>
//     </div>
//   );
// };

// /* eslint-disable no-shadow */
// import React from "react";
// import "antd/dist/antd.css";
// import { Carousel } from "antd";
// import * as Icon from "@material-ui/icons";
// import { CarouselStyle } from "./styles";
// import "./styles.css";

// export const Slider = props => {
//   const settings = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1
//   };
//   return (
//     // <CarouselStyle>
//       <Carousel {...settings} autoplay>
//         <div classNameName="item-1">
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//       </Carousel>
//     // </CarouselStyle>
//   );
// };

// // /* eslint-disable react/no-array-index-key */
// // import React, { useState } from "react";

// // const HookedCarousel = () => {
// //   const [images, setImages] = useState([
// //     "1",
// //     "22",
// //     "23",
// //     "24",
// //     "25",
// //     "26",
// //     "27",
// //     "28",
// //     "29",
// //     "210",
// //     "211",
// //     "212",
// //     "213",
// //     "214",
// //     "215",
// //     "216",
// //     "217",
// //     "218"
// //   ]);

// //   const [currentImageIdx, setCurrentImagIdx] = useState(0);

// //   const prevSlide = () => {
// //     const resetToVeryBack = currentImageIdx === 0;

// //     const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

// //     setCurrentImagIdx(index);
// //   };

// //   const nextSlide = () => {
// //     const resetIndex = currentImageIdx === images.length - 1;

// //     const index = resetIndex ? 0 : currentImageIdx + 1;

// //     setCurrentImagIdx(index);
// //   };

// //   const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + 5);

// //   const imageSourcesToDisplay =
// //     activeImageSourcesFromState.length < 5
// //       ? [...activeImageSourcesFromState, ...images.slice(0, 5 - activeImageSourcesFromState.length)]
// //       : activeImageSourcesFromState;

// //   return (
// //     <div>
// //       <button onClick={prevSlide}>Prev</button>
// //       {imageSourcesToDisplay.map((image, index) => (
// //         <img key={index} src={image} alt="" style={{ maxWidth: "15%" }} />
// //       ))}
// //       <button onClick={nextSlide}>Next</button>
// //     </div>
// //   );
// // };

// // export default HookedCarousel;
