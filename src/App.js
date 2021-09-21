import '../src/styles/basic-Information.css';
import { Ability } from './components/basicInformation/Ability';
import { About } from './components/basicInformation/About';
import { Education } from './components/basicInformation/Education';
import { Experience } from './components/basicInformation/Experience';


function App() {
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
      </div>
    </div>
  );
}

export default App;
