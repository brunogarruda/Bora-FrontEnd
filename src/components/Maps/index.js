/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

export const Maps = () => {

  const [geo, setGeo] = useState({});

  const geoLocation = window.navigator.geolocation.getCurrentPosition(positon => {
    setGeo({
      ...geo,
      latitude: positon.coords.latitude,
      longitude: positon.coords.longitude
    });
  });

  // AIzaSyBkvyS8Q-b8eL2EgzztDTVQS5cn6cfNIKk

  return <div />;
};
