import React from 'react'
import { images } from "../../helpers/images";
export const Ability = () => {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-4 col-sm-5  col-lg-5 col-first">
                    <img
                        src={images(`./study.png`).default}
                        className="card-img"
                        alt=""
                    />
                </div>
                <div className="col-8 col-sm-7 col-lg-6 col-second ">
                    <h4>
                        <i class="fas fa-award"></i> Habilidades
                    </h4>
                    <hr />
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i class="fab fa-html5"></i> <span>HTML</span>
                                </div>
                                <div className="col-4">
                                    <i class="fab fa-css3-alt"></i> <span>CSS</span>
                                </div>
                                <div className="col-4">
                                    <i class="fab fa-js-square"></i> <span>JavaScript</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i class="fas fa-tablet-alt"></i> <span>Diseño Resposivo</span>
                                </div>
                                <div className="col-4">
                                    <i class="fab fa-bootstrap"></i> <span>Bootstrap</span>
                                </div>
                                <div className="col-4">
                                    <i class="fab fa-github"></i> <span>Git y GitHub</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i class="fab fa-react"></i> <span>React Js</span>
                                </div>
                                <div className="col-4">
                                    <i class="fab fa-angular"></i> <span>Angular</span>
                                </div>
                                <div className="col-4">
                                    <i class="fab fa-java"></i> <span>Java</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i class="fas fa-band-aid"></i> <span>Oracle Service Bus</span>
                                </div>
                                <div className="col-4">
                                    <i class="fas fa-database"></i> <span>PL/SQL</span>
                                </div>
                                <div className="col-4">
                                    <i class="fas fa-database"></i> <span>Oracle SQL Developer</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i class="fas fa-users-cog"></i> <span>Trabajo en equipo.</span>
                                </div>
                                <div className="col-4">
                                    <i class="fas fa-thumbs-up"></i> <span>Autodidacta.</span>
                                </div>
                                <div className="col-4">
                                    <i class="fas fa-comment-dots"></i> <span>Comunicación asertiva con los clientes.</span>
                                </div>
                            </div>
                        </li>                       
                    </ul>

                </div>
            </div>
        </div>
    )
}
