import React from "react";
import { images } from "../../helpers/images";

export const Education = () => {
  return (
    <div className="col-12 height">
      <div className="row">
        <div className="col-12  col-lg-6 col-first ">
          <h4>
            <i className="fas fa-book-reader"></i> EDUCACIÓN
          </h4>
          <hr />
          <ul>
            <li>
              <h5>SERVICIO NACIONAL DE APRENDIZAJE - SENA</h5>
              <p>
                Tecnólogo En Analisís Y Desarrollo De Sistemas De Información
              </p>
            </li>

            <li>
              <h5>UNIVERSIDAD AUSTRAL, ARGENTINA</h5>
              <p>Diseñando Paginas Web Con Bootstrap.</p>
            </li>

            <li>
              <h5>UDEMY</h5>
              <p>Curso en progreso (React: De cero a experto - HOOK Y MERN).</p>
            </li>

            <li>
              <h5>ACADEMIA DE IDIOMAS SMART</h5>
              <p>LEVEL A1 ENGLISH.</p>
            </li>
          </ul>
        </div>
        <div className="col-12  col-lg-5 col-second">
          <img
            src={images(`./study.png`).default}
            className="card-img"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
