import React from "react";
import { images } from "../../helpers/images";
export const About = () => {
  return (
    <div className="col-12">
      <div className="row mt-5 animate__animated animate__fadeInDown">
        <div className="col-8 col-sm-7 col-lg-6 col-first">
          <h4>
            <i class="far fa-address-card"></i> ACERCA DE MI
          </h4>
          <hr/>
          <p>
            Tecnólogo en Análisis y Desarrollo de Sistemas de Información
            egresado del SENA: Servicio Nacional de Aprendizaje, con más de 3
            años de experiencia en el desarrollo para el sector bancario.
          </p>
          <p>
            Aprender es una de las cosas que más me gusta hacer, relacionando
            conocimientos y enfocándolos de una forma productiva ya sea en mi
            labor o en mi vida cotidiana. Trabajar en grupo es fundamental para
            mi, ya que se transfieren conocimientos entre los involucrados y se
            contribuye a crecer mutuamente.
          </p>
        </div>
        <div className="col-4 col-sm-5  col-lg-5 col-second">
          <img
            src={images(`./aboutme.png`).default}
            className="card-img"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
