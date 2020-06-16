/* eslint-disable prefer-const */
/* eslint-disable no-const-assign */
/* eslint-disable no-var */
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
import { Map, Marker } from "google-maps-react";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import fakeData from "../../../../../../../data/enderecos.json";

export default function MapModel({ children }) {
  const [coordenadasEnderecos, setCoordenadasEnderecos] = useState([]);
  const [geo, setGeo] = useState({
    latitude: "",
    longitude: ""
  });
  var response = [];
  fakeData.map(res => response.push(res.endereco));

  useEffect(() => {
    async function carregaEnderecos() {
      response.forEach(e =>
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${e},+apelido&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
          )
          .then(rrr => {
            let dd = coordenadasEnderecos;
            dd.push(rrr.data.results);
            setCoordenadasEnderecos(dd);
          })
      );
    }
    carregaEnderecos();
  }, []);

  const mapStyles = {
    width: "80%",
    height: "50%"
  };

  const geoLocation = window.navigator.geolocation.getCurrentPosition(positon => {
    setGeo({
      ...geo,
      latitude: positon.coords.latitude,
      longitude: positon.coords.longitude
    });
  });

  console.log(coordenadasEnderecos);

  // useEffect(() => {
  //   function teste() {
  //     const da = dados;
  //     console.log(da);
  //     // da.forEach(et=>console.log(et));
  //   }
  //   teste();
  // });

  const MapsClient = () =>
    googleMapsClient.createClient({
      key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
      Promise: Promise
    });
  MapsClient();

  return (
    <Grid container justify>
      <Paper>
        <Map
          google={google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: -23.5521232, lng: -46.6375192 }}
        >
          <Marker position={{ lat: geo.latitude, lng: geo.longitude }} />
          {coordenadasEnderecos.map(value => (
            // console.log(value)
            <Marker
              key={value}
              position={{
                lat: value[0].geometry.location.lat,
                lng: value[0].geometry.location.lng
              }}
            />
          ))}
        </Map>
      </Paper>
    </Grid>
  );
}
