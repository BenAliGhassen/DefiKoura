import './App.css';
import Home from './Pages/HomePages/Home';
import PageOne from './Pages/PagesOne/PageOne';
import RoundOne from './Pages/RoundOnePage/RoundOne';
import { agent } from './Questions/Agent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
  agent()

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<PageOne/>} />
      <Route path='/RoundOne' element={<RoundOne/>} />

      </Routes>
       </BrowserRouter>


        </div>
      
  );
}

export default App;
