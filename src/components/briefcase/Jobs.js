import React, { Fragment, useState } from "react";
import Entertainment from "./Entertainment";
import TeamSoccer from "./TeamSoccer";

import "../../styles/briefcase.css";

export const Jobs = () => {
  const [stateJobs, setstateJobs] = useState(false);

  const changeStateJobs = () => {
    setstateJobs(!stateJobs);
  };

  return (
    <div className="row">
      <div className="col-12">
        <h4>
          <i className="fas fa-business-time"></i> PORTAFOLIO
        </h4>
        <hr />
        <button className="btn btn-sm" onClick={changeStateJobs}>
          {stateJobs ? "Ver menos..." : "Ver más..."}
        </button>
      </div>
      {
        stateJobs &&
        <Fragment>
          <div className="col-12 col-sm-5 col-first animate__animated animate__backInLeft">
            <Entertainment></Entertainment>
          </div>
          <div className="col-12 col-sm-5 col-second animate__animated animate__backInRight">
            <TeamSoccer></TeamSoccer>
          </div>
        </Fragment>        
      }
    </div>
  );
};
