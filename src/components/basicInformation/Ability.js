import React from 'react'
import { images } from "../../helpers/images";
export const Ability = () => {
    return (
        <div className="col-12 height">
            <div className="row">               
                <div className="col-12  col-lg-6 col-first">
                    <h4>
                        <i className="fas fa-award"></i> HABILIDADES
                    </h4>
                    <hr />
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i className="fab fa-html5"></i> <span>HTML</span>
                                </div>
                                <div className="col-4">
                                    <i className="fab fa-css3-alt"></i> <span>CSS</span>
                                </div>
                                <div className="col-4">
                                    <i className="fab fa-js-square"></i> <span>JavaScript</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i className="fas fa-tablet-alt"></i> <span>Diseño Resposivo</span>
                                </div>
                                <div className="col-4">
                                    <i className="fab fa-bootstrap"></i> <span>Bootstrap</span>
                                </div>
                                <div className="col-4">
                                    <i className="fab fa-github"></i> <span>Git y GitHub</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i className="fab fa-react"></i> <span>React Js</span>
                                </div>
                                <div className="col-4">
                                    <i className="fab fa-angular"></i> <span>Angular</span>
                                </div>
                                <div className="col-4">
                                    <i className="fab fa-java"></i> <span>Java</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i className="fas fa-band-aid"></i> <span>Oracle Service Bus</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-database"></i> <span>PL/SQL</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-database"></i> <span>Oracle SQL Developer</span>
                                </div>
                            </div>
                        </li>
                        <br />
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <i className="fas fa-users-cog"></i> <span>Trabajo en equipo.</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-thumbs-up"></i> <span>Autodidacta.</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-comment-dots"></i> <span>Comunicación asertiva con los clientes.</span>
                                </div>
                            </div>
                        </li>                       
                    </ul>
                </div>
                <div className="col-12   col-lg-5 col-second">
                    <img
                        src={images(`./study.png`).default}
                        className="card-img"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
