import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLat from './pages/navlateral';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import Navigation from './pages/Navigation'
import Licenciamiento from './pages/views/licenciamiento'
import Programasacademicos from './pages/views/programasacademicos'
import IngresaCuenta from './pages/views/ingresacuenta'
import CantidadIngresantes from './pages/views/cantidadingresantes';
import Ubicacion from './pages/views/ubicacion';
import TopUniversidades from './pages/views/topuniversidades';
import Beca18 from './pages/views/beca18';
import ModificarLicenciamiento from './pages/views/modificarlicenciamiento';
import Contacto from './pages/views/contacto';
import Datos from './pages/views/datos';
import Portada from './portada';

export default class App extends Component {

  NoMatchPage = () => {
    return (
      <div className="text-center">
        <div className='d-flex col-12'>
          <div className="cover-container d-flex p-3 mx-auto flex-column justify-content-center align-self-center">
            <main role="main" className="inner cover mt-5">
              <h2 className="">QUERIDO USUARIO, ESTA PÁGINA NO EXISTE</h2>
              <img width='400' src="../../../assets/4041.jpg"></img>
              <p className="lead">Es posible que exista un error o esta página este en construcción.</p>
              <p className="mt-3">
                <a href="/" className="b-portada2 button button-responsive button-medium button-primary-outline-v2">Regresar</a>
              </p>
            </main>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <div className='container-fluid p-0'>
          <Switch>
            <Route path="/" exact component={Portada} />
            <Route path="/licenciamiento" exact component={Licenciamiento} />
            <Route path="/programasacademicos" exact component={Programasacademicos} />
            <Route path="/ubicacionuniversidades" exact component={Ubicacion} />
            <Route path="/cantidadingresantes" exact component={CantidadIngresantes} />
            <Route path="/ingresarcuenta" exact strict component={IngresaCuenta} />
            <Route path="/topuniversidades" exact component={TopUniversidades} />
            <Route path="/becas" exact component={Beca18} />
            <Route path="/modiflicen" exact component={ModificarLicenciamiento} />
            <Route path="/contacto" exact strict component={Contacto} />
            <Route path="/datos" exact strict component={Datos} />
            <Route component={this.NoMatchPage} />
          </Switch>

        </div>
        <div className="col-12 p-1 bg-light">
          <footer class="page-footer font-small">
            <div class="footer-copyright text-center py-2 mt-4">&copy;{window.$user}
              <Link to="/">  Cultura Universitaria Escoge Tu Futuro</Link>
            </div>
          </footer>
          <br />
        </div>
      </Router>
    );
  }
}
