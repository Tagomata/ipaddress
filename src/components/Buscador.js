import React, { Fragment, useState } from "react";

import Error from "./Error";

const Buscador = ({ guardarIp, obtenerInfo }) => {
  //Definimos el state
  const [ip, setIp] = useState("");
  // State para el error
  const [error, setError] = useState(false);

  //Función para leer la ip
  const definirIp = (e) => {
    setIp(e.target.value);
  };

  //Submit para validar la ip
  const submitIp = (e) => {
    e.preventDefault();

    //Validar
    if (ip === "") {
      setError(true);
    } else {
      //Si es correcto
      setError(false);

      //Guardamos la ip
      guardarIp(ip);
      obtenerInfo(ip);
    }
  };

  return (
    <Fragment>
      <form id="formulario" onSubmit={submitIp}>
        <div>
          <h1>IP Address Tracker</h1>

          {error ? <Error mensaje="Ingrese una dirección ip valida" /> : null}
        </div>
        <div className="busqueda">
          <input
            id="input-ip"
            name="ip"
            placeholder="Search for any IP address or domain"
            onChange={definirIp}
          />
          <button type="submit" className="btn-busqueda">
            <img src="/src/assets/icon-arrow.svg" alt="" />
            <span>></span>
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Buscador;
