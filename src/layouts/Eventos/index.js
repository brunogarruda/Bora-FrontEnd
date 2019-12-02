/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
/* eslint-disable no-inner-declarations */
/* eslint-disable react/jsx-one-expression-per-line */
import axios from "axios";
import React, { useEffect, useState } from "react";
import googleMapsClient from "@google/maps";
import { Map, Marker, InfoWindow } from "google-maps-react";
import { useRouteMatch } from "react-router-dom";
import bg from "../../assets/flat-geometric-shapes-background/bg-detalheEventos.png";
import imgUser from "../../assets/flat-geometric-shapes-background/user.png";
import { api } from "../../services";
import "../../styles/perfil/perfil.css";
import { Container } from "react-materialize";

export default (props) => {
  const url = useRouteMatch().params;
  const [eventos, setEventos] = useState({});
  const [endereco, setEnderecos] = useState({});
  const [coordenadasEnderecos, setCoordenadasEnderecos] = useState({});
  const [geo, setGeo] = useState({
    latitude: "",
    longitude: ""
  });
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const dados = [
    { lat: 47.49855629475769, lng: -122.14184416996333, id: 1 },
    { lat: 47.359423, lng: -122.021071, id: 2 },
    { lat: 47.2052192687988, lng: -121.988426208496, id: 3 },
    { lat: 47.6307081, lng: -122.1434325, id: 4 },
    { lat: 47.3084488, lng: -122.2140121, id: 5 },
    { lat: 47.5524695, lng: -122.0425407, id: 6 }
  ];
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const handleClick = (marker, event) => {
    console.log({ marker });
    // this.setState({ selectedMarker: marker })
  };

  const onMarkerClick = (props, marker, e) => {
    setShowingInfoWindow(true);
  };

  useEffect(() => {
    const buscaEventos = async () => {
      setLoading(true);
      await api
        .get(`eventos/${url.id}`)
        .then((res) => {
          setEventos(res.data);
          setEnderecos("rua valenca do minho 159");
          setLoad(true);
          setLoading(false);
          const dd = "rua valenca do minho 159";
          axios
            .get(
              `https://maps.googleapis.com/maps/api/geocode/json?address=${dd},&key=AIzaSyDTjPz7a0H6P78ccjbZHuL0fpPOY8UwQN4`
            )
            .then((rd) => setCoordenadasEnderecos(rd.data));
        })
        .catch((err) => console.log(err));
    };
    buscaEventos();
  }, []);

  const geoLocation = window.navigator.geolocation.getCurrentPosition(
    (positon) => {
      // setLoad(false);
      setGeo({
        ...geo,
        latitude: positon.coords.latitude,
        longitude: positon.coords.longitude
      });
      // setLoad(true);
    }
  );

  const handle = () => {};

  //   const MapsClient = () => googleMapsClient.createClient({
  //     key: "AIzaSyDTjPz7a0H6P78ccjbZHuL0fpPOY8UwQN4",
  //     Promise
  //   });
  //   MapsClient();

  return (
    <>
            <Container>
                <div className="container" />
                <div id="profile-page" className="section">
                    <div id="profile-page-header" className="card">
                        <div className="card-image">
                            <img
                              className="activator"
                              src={bg}
                              alt="user background"
                            />
                        </div>
                        <figure className="card-profile-image">
                            <img
                              src={imgUser}
                              alt="profile image"
                              className="circle z-depth-2 responsive-img activator"
                            />
                        </figure>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s3 offset-s2">
                                    <h4 className="card-title grey-text text-darken-4">
                                        {eventos.titulo}
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Titulo
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        {eventos.length}
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Participantes
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        6
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Completed Projects
                                    </p>
                                </div>
                                <div className="col s2 center-align">
                                    <h4 className="card-title grey-text text-darken-4">
                                        $ 1,253,000
                                    </h4>
                                    <p className="medium-small grey-text">
                                        Busness Profit
                                    </p>
                                </div>
                                <div className="col s1 right-align">
                                    <a className="btn-floating activator waves-effect waves-light darken-2 right">
                                        <i className="material-icons">edit</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="card-panel teal">
                            <span className="card-title">Descrição</span>
                            <div className="card-content">
                                <p className="white-text">
                                    {eventos.descricao}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card-panel deep-purple">
                            <span className="card-title">Informações</span>
                            <div className="card-content">
                                <div className="row">
                                    <i className="material-icons left">
                                        date_range
                                    </i>
                                    <p className="black-text ">
                                        Começa no dia:{" "}
                                        <span className="white-text">
                                            {eventos.dataInicio}
                                        </span>
                                        <i className="material-icons">
                                            access_time
                                        </i>
                                        Inicia às: {eventos.horaInicio}
                                    </p>
                                    <i className="material-icons left">
                                        date_range
                                    </i>
                                    <p className="black-text ">
                                        Termina no dia:
                                        <span className="white-text">
                                            {eventos.dataFim}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                                <div style={{ height: "100vh", width: "100%" }}>
                                    {load ? (
                                        <Map
                                          google={google}
                                          zoom={12}
                                            //   style={mapStyles}
                                          initialCenter={{
                                              lat: geo.latitude,
                                              lng: geo.longitude
                                            }}
                                        >
                                            {dados.map((value) => (
                                                <Marker
                                                  name="ds"
                                                  key={value.id}
                                                  onClick={() => console.log(value.id)}
                                                  position={{
                                                      lat: value.lat,
                                                      lng: value.lng
                                                    }}
                                                />
                                            ))}
                                            {/* {console.log()} */}
                                            <InfoWindow
                                                // marker={this.state.activeMarker}
                                              visible={showingInfoWindow}
                                                //   onClose={this.onClose}
                                            >
                                                <div>
                                                    <h4>teste</h4>
                                                </div>
                                            </InfoWindow>

                                            {/* <Marker
                                        position={{
                                            lat: value[0].geometry.location.lat,
                                            lng: value[0].geometry.location.lng
                                        }}
                                    /> */}
                                        </Map>
                                    ) : null}
                                </div>
                                <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                                <p>
                                    I am a very simple card. I am good at
                                    containing small bits of information. I am
                                    convenient because I require little markup
                                    to use effectively.
                                </p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    </>
  );
};
