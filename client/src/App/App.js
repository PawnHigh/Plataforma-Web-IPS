
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLat from './pages/navlateral';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios';

//import Navigation from './pages/Navigation'
import licenciamiento from './pages/views/licenciamiento'
import Programasacademicos from './pages/views/programasacademicos'
import IngresaCuenta from './pages/views/ingresacuenta'
import CantidadIngresantes from './pages/views/cantidadingresantes';
import Ubicacion from './pages/views/ubicacion';
import TopUniversidades from './pages/views/topuniversidades';
import Beca18 from './pages/views/beca18';
import ModificarLicenciamiento from './pages/views/modificarlicenciamiento';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default class App extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      showM: false,
      show: false,
      requirementKey: Math.random(),
      cselect: 1,
      users: [],
      EmailVerification: ''
    };
    this.showunshow = this.showunshow.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get('/api/users')
    /* console.log(res.data) */
    this.setState({ users: res.data })
  }

  handleModal = () => {
    this.setState({ showM: !this.state.showM })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const confirm = this.state.users.find(USER => USER.Email === this.state.EmailVerification)
    if (!confirm || confirm.Email != 'gersrpb@gmail.com') {
      return MySwal.fire({
        position: 'top-end',
        icon: 'error',
        width: 300,
        padding: 0,
        html: '<h6>Permisos Denegados</h6>',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      !this.state.show ? this.showunshow() : this.showunshow() 
      return MySwal.fire({
        position: 'top-end',
        icon: 'success',
        width: 300,
        padding: 0,
        html: '<h6>Permisos Concedidos</h6>',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  onChangeUserEmail = (e) => {
    this.setState({
      EmailVerification: e.target.value
    })
  }

  showunshow() {
    this.setState({
      name: "React",
      show: !this.state.show,
      requirementKey: Math.random(),
      user: ''

    })
  }

  render() {
    return (
      <Router>
        <div className='container-fluid p-0'>

          <Route path="/" render={() => {
            return (
              <div id="navegacion-principal" className='navbar navbar-expand-lg navbar-light bg-light m-0 py-0 pl-0 pr-4 fixed-top'>
                <div className="navbar-collapse">
                  {/*aqui se va a agregar ícono en vez de la X aun estoy viendo eso*/}
                  <i onClick={this.showunshow} className='fas fa-bars navbar-brand btn btn-light ml-3 p-3 border-0 rounded-0' role="button"></i>
                  <Link to="/" style={{ textDecoration: 'none' }}>
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

                    <Link onClick={this.handleModal} className="collapse navbar nav-item" to="/">Admin</Link>
                    <Link className="nav-item" to="/ingresarcuenta">Registrate</Link>
                    <Modal show={this.state.showM}>
                      <Modal.Header closeButton onClick={this.handleModal}>Inicio de Sesión Para Administradores</Modal.Header>
                      <Modal.Body>
                        <form className="form-signin col-md-5 align-self-center" onSubmit={this.onSubmit}>
                          <div className="form-label-group">
                            <input type="email" name='email' onChange={this.onChangeUserEmail} id="inputPassword" className="form-control" placeholder="Password" required />
                            <label for="inputPassword">Correo Electrónico</label>
                          </div>
                          <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar como Admin</button>
                        </form>
                      </Modal.Body>
                    </Modal>

                  </div>

                </div>
              </div>

            );
          }} />

          <div className="cont-pri">

            <div className='row mx-0'>
              <Route path="/" render={() => {
                return (
                  <NavLat verificar={this.state.EmailVerification} color={this.state.color} mostrar={this.state.show} key={this.state.requirementKey} ></NavLat>
                );
              }} />
              <Route path="/" exact component={licenciamiento} />
              <Route path="/licenciamiento" exact component={licenciamiento} />
              <Route path="/programasacademicos" exact component={Programasacademicos} />
              <Route path="/ubicacionuniversidades" exact component={Ubicacion} />
              <Route path="/cantidadingresantes" exact component={CantidadIngresantes} />
              <Route path="/ingresarcuenta" exact strict component={IngresaCuenta} />
              <Route path="/topuniversidades" exact component={TopUniversidades} />
              <Route path="/becas" exact component={Beca18} />
              <Route path="/modiflicen" exact component={ModificarLicenciamiento} />
            </div>

          </div>

        </div>
      </Router>
    );
  }
}
