import React, { Fragment } from "react";

const Informacion = ({
  ip,
  ciudad,
  ipAddress,
  pais,
  codigoPostal,
  zona,
  isp,
}) => {
  return (
    <Fragment>
      <div className="info-column">
        <span class="info-titulo">IP ADDRESS</span>
        <span class="info-descripcion">{ip}</span>
      </div>
      <div className="info-column">
        <span class="info-titulo">LOCATION</span>
        <span class="info-descripcion">
          {pais}, {ciudad}, {codigoPostal}
        </span>
      </div>
      <div className="info-column">
        <span class="info-titulo">TIMEZONE</span>
        <span class="info-descripcion">{zona}</span>
      </div>
      <div className="info-column">
        <span class="info-titulo">ISP</span>
        <span class="info-descripcion">{isp}</span>
      </div>
    </Fragment>
  );
};

export default Informacion;
