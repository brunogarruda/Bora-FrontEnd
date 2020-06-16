import React from "react";
import Cropper from "react-cropper";
import bg from "../assets/bg-detalheEventos.png";
import "cropperjs/dist/cropper.css";

export const ImageResize = () => {

  const cropper = React.createRef(null);

  return (
    <Cropper
      ref={cropper}
      src={bg}
      aspectRatio={16 / 9}
      guides={false}
    />
  );
};
