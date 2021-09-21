import React from "react";
import { images } from "../../helpers/images";

export const Education = () => {
  return (
    <div className="col-12">
      <div className="row row-col">
      <div className="col-4 col-sm-5  col-lg-5 col-first">
          <img
            src={images(`./study.png`).default}
            className="card-img"
            alt=""
          />
        </div>
      <div className="col-8 col-sm-7 col-lg-6 col-second ">
          <h4>
            <i class="fas fa-book-reader"></i> EDUCACIÓN
          </h4>
          <hr />
          <ul>
            <h5>SERVICIO NACIONAL DE APRENDIZAJE - SENA</h5>
            <li>
              <p>Tecnólogo En Analisís Y Desarrollo De Sistemas De Información</p>
            </li>
            <h5>UNIVERSIDAD AUSTRAL, ARGENTINA</h5>
            <li>
              <p>Diseñando Paginas Web Con Bootstrap.</p>
            </li>
            <h5>UDEMY</h5>
            <li>
              <p>Curso en progreso (React: De cero a experto - HOOK Y MERN).</p>
            </li>
            <h5>ACADEMIA DE IDIOMAS SMART</h5>
            <li>
              <p>LEVEL A1 ENGLISH.</p>
            </li>
          </ul>
        </div>       
      </div>
    </div>
  );
};
