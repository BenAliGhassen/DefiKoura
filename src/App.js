import './App.css';
import AboutComp from './Components/AboutComponent/AboutComp';
import ButtonComp from './Components/ButtonComponent/ButtonComp';
import NavBarComp from './Components/NavBarComponent/NavBarComp';
import ReglesComp from './Components/ReglesComponent/ReglesComp';
import StadeComp from './Components/StadeComponent/StadeComp';

function App() {
  return (
    <div className="App">
     <NavBarComp/>
     <AboutComp/>
     <ReglesComp/>
     <StadeComp/>
     <ButtonComp/>
    </div>
  );
}

export default App;
