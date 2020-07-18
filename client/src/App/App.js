
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLat from './pages/navlateral';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import Navigation from './pages/Navigation'
import licenciamiento from './pages/views/licenciamiento'
import Programasacademicos from './pages/views/programasacademicos'
import IngresaCuenta from './pages/views/ingresacuenta'
import CantidadIngresantes from './pages/views/cantidadingresantes';
import Ubicacion from './pages/views/ubicacion';
import TopUniversidades from './pages/views/topuniversidades';
import Beca18 from './pages/views/beca18';
import ModificarLicenciamiento from './pages/views/modificarlicenciamiento';


export default class App extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      show: true,
      requirementKey: Math.random(),
      cselect:1
    };
    this.showunshow = this.showunshow.bind(this);
  }
  
  showunshow() {
    this.setState({
      name: "React",
      show: !this.state.show,
      requirementKey: Math.random(),
      user:''
      
    })
  } 
  
  render(){
    return (
      <Router>
        <div className='container-fluid p-0'>

          <Route path="/" render={()=>{
            return(
              <div id="navegacion-principal" className='navbar navbar-expand-lg navbar-light bg-light m-0 py-0 pl-0 pr-4 fixed-top'>
            <div className="navbar-collapse">
              {/*aqui se va a agregar ícono en vez de la X aun estoy viendo eso*/}
              <i onClick={this.showunshow} className='fas fa-bars navbar-brand btn btn-light ml-3 p-3 border-0 rounded-0' role="button"></i>
              <Link to="/" style={{textDecoration: 'none'}}>
                <div className="collapse navbar-collapse logo-text">
                  <img src="/assets/logo.png" height="60px" width="60px"></img>
                  <h6 className="text-center mt-2 ml-2 text-muted">Cultura Universitaria</h6>
                </div>
              </Link>
            </div>
            <div className="collapse navbar-collapse justify-content-end">
              <div className="collapse navbar justify-content-end">
                <Link className="collapse navbar nav-item" to="/">Inicio</Link>
                <div className="collapse navbar nav-item">Contacto</div>
                <div className="collapse navbar nav-item">Datos</div>
              </div>

              <div className="collapse navbar justify-content-end">
            {this.state.user===''?
              <Link className="nav-item" to="/ingresarcuenta">Registrate</Link>
              :
              <Link className="nav-item" to="/">{this.state.user}</Link>
            }
                
              </div>

            </div>
          </div>

            );
          }}/>

          <div className="cont-pri">

            <div className='row mx-0'>
            <Route path="/" render={()=>{
            return(
              <NavLat color={this.state.color} mostrar={this.state.show} key={this.state.requirementKey} ></NavLat>
              );
            }}/>
              <Route path="/" exact component={licenciamiento}/>
              <Route path="/licenciamiento" exact component={licenciamiento}/>
              <Route path="/programasacademicos" exact component={Programasacademicos}/>
              <Route path="/ubicacionuniversidades" exact component={Ubicacion}/>
              <Route path="/cantidadingresantes" exact component={CantidadIngresantes}/>
              <Route path="/ingresarcuenta" exact strict component={IngresaCuenta}/>
              <Route path="/topuniversidades" exact component={TopUniversidades}/>
              <Route path="/becas" exact component={Beca18}/>
              <Route path="/modiflicen" exact component={ModificarLicenciamiento}/>
            </div>

          </div>
        
        </div>    
      </Router>
    );
  }
}
