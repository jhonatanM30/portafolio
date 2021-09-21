import React from 'react'
import { images } from "../../helpers/images";

export const Experience = () => {
    return (
        <div className="col-12">
            <div className="row row-col">           
                <div className="col-7 col-sm-7 col-lg-6 col-first ">
                    <h4>
                    <i class="far fa-building"></i> EXPERIENCIA LABORAL
                    </h4>
                    <hr />
                    <h5> Empresa, Cidenet S.A.S.</h5>
                   <ul>
                       <li>
                           <p>Cargo : Analista de desarrollo.</p>
                       </li>
                       <li>
                           <p>Jornada : Tiempo completo.</p>
                       </li>                      
                       <li>
                           <p>Ubicación : Medellín, Antioquia.</p>
                       </li>
                       <li>
                           <p>Fecha Inicio : Diciembre 2017.</p>
                       </li>
                       <li>
                          <p>Fecha Fin : Laboro actualmente en la empresa.</p>
                       </li>
                   </ul>
                </div>                
                <div className="col-4 col-sm-5  col-lg-5 col-second">
                    <img
                        src={images(`./experience.png`).default}
                        className="card-img"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
