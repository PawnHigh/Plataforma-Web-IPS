import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './pages/Navigation'
import licenciamiento from './pages/licenciamiento'
import Programasacademicos from './pages/programasacademicos'
import IngresaCuenta from './pages/ingresacuenta'
import CantidadIngresantes from './pages/cantidadingresantes';
import Ubicacion from './pages/ubicacion';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Route path="/" component={Navigation}/>
        <Route path="/" exact component={licenciamiento}/>
        <Route path="/licenciamiento" exact component={licenciamiento}/>
        <Route path="/programasacademicos" exact component={Programasacademicos}/>
        <Route path="/ubicacionuniversidades" exact component={Ubicacion}/>
        <Route path="/cantidadingresantes" exact component={CantidadIngresantes}/>
        <Route path="/ingresarcuenta/" exact strict component={IngresaCuenta}/>
        
      </div>    
    </Router>
  );
}

export default App;