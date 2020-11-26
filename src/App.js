import React, { Fragment, useState, useEffect } from "react";
import Mapa from "./components/Mapa";
import Buscador from "./components/Buscador";
import Informacion from "./components/Informacion";
import "leaflet/dist/leaflet.css";

function App() {
  //Definir el state
  const [ip, guardarIp] = useState("181.51.34.100");

  //State ip
  const [ipAddress, guardarIpAddress] = useState("181.51.34.100");
  //State para la ciudad
  const [ciudad, guardarCiudad] = useState("Bogotá");
  //State para Pais
  const [pais, guardarPais] = useState("CO");
  //State para codigo postal
  const [codigoPostal, guardarCodigoPostal] = useState("110221");
  //State para zona
  const [zona, guardarZona] = useState("-05:00");
  //State para ISP
  const [isp, guardarIsp] = useState("Telmex Colombia S.A.");
  //State para latitud
  const [latitud, guardarLatitud] = useState("4.651341407794106");

  //State para longitud
  const [longitud, guardarLongitud] = useState("-74.10349384815345");

  //UseEffect para recargar el componente del mapa
  useEffect(() => {
    console.log("Se cambio la dirección ip");
  }, [ipAddress]);

  //Obetener información
  const obtenerInfo = (ip) => {
    new Promise((resolve, reject) => {
      //Pasar ip a la api
      const api = `https://geo.ipify.org/api/v1?apiKey=at_NbPpgkpVZGB2aOPiChNGo78gWuqyO&ipAddress=${ip}`;

      //Llamado AJAX
      const xhr = new XMLHttpRequest();

      //Abrir la conexión
      xhr.open("GET", api, true);

      //onload
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
          const data = JSON.parse(xhr.responseText);
          guardarCiudad(data.location.city);
          guardarZona(data.location.timezone);
          guardarIsp(data.isp);
          guardarPais(data.location.country);
          guardarCodigoPostal(data.location.postalCode);
          guardarIpAddress(data.ip);
          guardarLatitud(data.location.lat);
          guardarLongitud(data.location.lng);
        } else {
          reject(Error(xhr.statusText));
        }
      };

      //opcional (on error)
      xhr.onerror = (error) => reject(error);

      //send
      xhr.send();
    });
  };

  return (
    <Fragment>
      <div className="contenedor-busqueda body-background">
        <div className="contenedor-busqueda-centro">
          <Buscador guardarIp={guardarIp} obtenerInfo={obtenerInfo}></Buscador>

          <div className="contenedor-info">
            <Informacion
              ip={ip}
              ciudad={ciudad}
              ipAddress={ipAddress}
              pais={pais}
              codigoPostal={codigoPostal}
              zona={zona}
              isp={isp}
            ></Informacion>
          </div>
        </div>
      </div>
      <div id="map" className="map-container">
        <Mapa
          latitud={latitud}
          longitud={longitud}
          ipAddress={ipAddress}
          pais={pais}
          ciudad={ciudad}
        ></Mapa>
      </div>
    </Fragment>
  );
}

export default App;
