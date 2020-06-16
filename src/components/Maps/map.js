// /* eslint-disable no-var */
// /* eslint-disable react/no-this-in-sfc */
// /* eslint-disable consistent-return */
// /* eslint-disable object-shorthand */
// /* eslint-disable no-use-before-define */
// /* eslint-disable new-cap */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// /* eslint-disable no-unused-expressions */
// import React, { useState, useRef, useEffect } from "react";
// import googleMapsClient from "@google/maps";
// import { Map, Marker } from "google-maps-react";
// import axios from "axios";

// export default function MapModel({ props }) {
//   const [urlConsultaEndereco, setUrlConsultaEndereco] = useState("");
//   const [coordenadasEnderecos, setCoordenadasEnderecos] = useState([]);

//   // const consultaEndereco = ({ url }) => {
//   //   const setUrlConsultaEndereco = `https://maps.googleapis.com/maps/api/geocode/json?${url}`;
//   // };
//   var d = "03583040";

//   useEffect(() => {
//     async function carregaEnderecos() {
//       const [endereco, setEndereco] = useState({});
//       const response = axios
//         .get(
//           `https://maps.googleapis.com/maps/api/geocode/json?address=${d},+apelido&key=AIzaSyDTjPz7a0H6P78ccjbZHuL0fpPOY8UwQN4`
//         )
//         .then(res => {
//           setEndereco(res.data);
//         });
//     }
//     carregaEnderecos();
//   }, []);

//   console.log(endereco);
//   // });

//   // console.log(coordenadasEnderecos);

//   // console.log(
//   //   "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway"
//   // );

//   //   https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
//   // +Mountain+View,+CA&key=YOUR_API_KEY

//   const mapStyles = {
//     width: "80%",
//     height: "50%"
//   };

//   const [geo, setGeo] = useState({
//     latitude: "",
//     longitude: ""
//   });

//   const geoLocation = window.navigator.geolocation.getCurrentPosition(positon => {
//     setGeo({
//       ...geo,
//       latitude: positon.coords.latitude,
//       longitude: positon.coords.longitude
//     });
//   });

//   const MapsClient = () =>
//     googleMapsClient.createClient({
//       key: "",
//       Promise: Promise
//     });

//   console.log("props.element");

//   return (
//     <Map
//       google={google}
//       zoom={12}
//       style={mapStyles}
//       initialCenter={{ lat: -23.5521232, lng: -46.6375192 }}
//     >
//       <Marker position={{ lat: geo.latitude, lng: geo.longitude }} />
//     </Map>
//   );
// }
