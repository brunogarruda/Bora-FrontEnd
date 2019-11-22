/* eslint-disable react/no-this-in-sfc */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from "react";
import googleMapsClient from "@google/maps";
import { Map, Marker} from "google-maps-react";

export default function MapModel() {

  const mapStyles = {
    width: "80%",
    height: "50%"
  };

  const [geo, setGeo] = useState({
    latitude: "",
    longitude: ""
  });

  const geoLocation = window.navigator.geolocation.getCurrentPosition(positon => {
    setGeo({
      ...geo,
      latitude: positon.coords.latitude,
      longitude: positon.coords.longitude
    });
  });

  const MapsClient = () =>
    googleMapsClient.createClient({
      key: "AIzaSyDTjPz7a0H6P78ccjbZHuL0fpPOY8UwQN4",
      Promise: Promise
    });

  return (
    <Map
      google={google}
      zoom={12}
      style={mapStyles}
      initialCenter={{ lat: -23.5521232, lng: -46.6375192 }}
    >
      <Marker position={{ lat: geo.latitude, lng: geo.longitude }} />
    </Map>
  );
}
