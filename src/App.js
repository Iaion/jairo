
import "./App.css";
import Navbar from './componentes/NavBar';
import SobreNosotros from './componentes/SobreNosotros';
import Footer from './componentes/Footer';
import Trabajos from './componentes/Trabajos';
import Testimonios from './componentes/Testimonios';
import Contactos from './componentes/Contactos';
import {Routes, BrowserRouter as Router,  Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="background-image" >
      <Navbar/>
      <Routes>
          <Route path='/' element={<SobreNosotros/>} ></Route>        
          <Route path='/Trabajos' element={<Trabajos/>} ></Route>
          <Route path='/Testimonios' element={<Testimonios/>} ></Route>
          <Route path='/Contactos' element={<Contactos/>} ></Route>    
          
        </Routes>
      <Footer/> 
      
    </div>
    </Router>
  );
}

export default App;
