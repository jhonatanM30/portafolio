import { Ability } from "../basicInformation/Ability";
import { About } from "../basicInformation/About";

import { Education } from "../basicInformation/Education";
import { Experience } from "../basicInformation/Experience";
import { Jobs } from "../briefcase/Jobs";




export const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="name">
          <h2>Jhonatan Alexander Cuesta Marín</h2>
          <h4>Desarrollador De Software</h4>
        </div>
        <About />
        <Education/>
        <Experience/>  
        <Ability/>
        <Jobs/>
      </div>
    </div>
  );
}

 
