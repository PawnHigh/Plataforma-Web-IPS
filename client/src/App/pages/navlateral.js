import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Modal } from 'react-bootstrap'
import axios from 'axios';
import localS from 'local-storage'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default class NavLat extends Component {
  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      showM: false,
      name: 'React',
      op: this.props.color,
      show: false,
      p_pequeña: false,
      users: [],
      EmailVerification: ''
    }
    this.showunshow = this.showunshow.bind(this);
    //this.cambiacolor=this.cambiacolor.bind(this);
  }

  toGetColor(c) {
    var m = this.state.op === c ? 'list-group-item list-group-item-action active bg-primary rounded-0' : 'list-group-item list-group-item-action bg-light rounded-0';
    m = m + 'border-secondary border-left-0 border-right-0';
    return m;
  }
  cambiacolor = (e) => {
    var valor = e.target.id;
    this.setState({
      op: valor,
      show: false
    });
  }
  async componentDidMount() {
    const res = await axios.get('/api/users')
    if (window.screen.width < 800) {
      document.getElementById("hboton").style.display = "none";
      this.setState({
        p_pequeña: true
      })
    }
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
      this.setState({
        EmailVerification: ''
      })
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
      localS.set('myData', this.state.EmailVerification)
      this.handleModal()
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
      requirementKey: Math.random()

    })
  }

  render() {

    const { op, show, EmailVerification } = this.state;
    if (EmailVerification === 'gersrpb@gmail.com') {
      return (

        <div>
          <nav id="navegacion-principal" className='navbar navbar-expand-lg navbar-light bg-light m-0 py-0 pl-0 pr-4 fixed-top navbar-toggleable-sm'>
            <div className="navbar-brand media p-0">
              {/*aqui se va a agregar ícono en vez de la X aun estoy viendo eso*/}
              {this.state.show === false ?
                <i onClick={this.showunshow} className='fas fa-bars navbar-brand btn ml-3 p-3 border-0 my-auto' role="button"></i>
                :
                <i onClick={this.showunshow} className='fas fa-times navbar-brand btn ml-3 p-3 border-0 my-auto' role="button"></i>
              }
              <Link to="/" style={{ textDecoration: 'none' }} className="navbar-brand media p-0">
                <img className="align-self-center mr-0 p-0" src="/assets/logo.png" height="60px" width="60px"></img>
                <h6 id="name" className="text-center mt-2 ml-2 text-muted my-auto p-0 textTi">Cultura Universitaria</h6>
              </Link>
            </div>
            <button id="hboton" class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end navbar-toggler-rigth text-center" id="navbarTogglerDemo02">
              <Link className="nav-item nav-link" to="/">Inicio</Link>
              <Link className="nav-item nav-link" to="/contacto">Contacto</Link>
              <Link className="nav-item nav-link" to="/datos">Datos</Link>
              <Link className="nav-item nav-link" to="/ingresarcuenta">Registrate</Link>
              <Link onClick={this.handleModal} style={{ color: 'rgba(104,169,242)' }} className="nav-item nav-link" to="#">
                <i className='fas fa-user-circle border-0 my-auto' role="button"></i> Admin
              </Link>
            </div>
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
          </nav>
          {show && (
            <div className='col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 pl-0 position-fixed cont-pri-lat m-0 px-0'>
              <div className='bg-light border'>
                {this.state.p_pequeña &&
                  <Link id="7" className={this.toGetColor(7)} onClick={this.cambiacolor} to="/">INICIO</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="8" className={this.toGetColor(8)} onClick={this.cambiacolor} to="/contacto">CONTACTO</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="9" className={this.toGetColor(9)} onClick={this.cambiacolor} to="/datos">DATOS</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="10" className={this.toGetColor(10)} onClick={this.cambiacolor} to="/registrate">REGISTRATE</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="11" className={this.toGetColor(11)} onClick={this.cambiacolor,this.handleModal} to="#">ADMIN</Link>
                }
                <Link id="1" className={this.toGetColor(1)} onClick={this.cambiacolor} to="/licenciamiento">LICENCIAMIENTO DE UNIVERSIDADES</Link>
                <Link id="2" className={this.toGetColor(2)} onClick={this.cambiacolor} to="/programasacademicos">PROGRAMAS ACADÉMICOS</Link>
                <Link id="3" className={this.toGetColor(3)} onClick={this.cambiacolor} to="/becas">PROGRAMA NACIONAL DE BECA 18</Link>
                <Link id="4" className={this.toGetColor(4)} onClick={this.cambiacolor} to="/ubicacionuniversidades">UBICACIÓN DE UNIVERSIDADES</Link>
                <Link id="5" className={this.toGetColor(5)} onClick={this.cambiacolor} to={"/cantidadingresantes"}>CANTIDAD DE INGRESANTES</Link>
                <Link id="6" className={this.toGetColor(6)} onClick={this.cambiacolor} to={"/topuniversidades"}>TOP 15 UNIVERSIDADES</Link>
                <Link id="7" className={this.toGetColor(7)} onClick={this.cambiacolor} to={"/modiflicen"}>MODIFICAR LICENCIAMIENTO</Link>
              </div>
            </div>
          )}
        </div>

      )
    } else {
      return (

        <div>
          <nav id="navegacion-principal" className='navbar navbar-expand-lg navbar-light bg-light m-0 py-0 pl-0 pr-4 fixed-top navbar-toggleable-sm'>
            <div className="navbar-brand media p-0">
              {/*aqui se va a agregar ícono en vez de la X aun estoy viendo eso*/}
              {this.state.show === false ?
                <i onClick={this.showunshow} className='fas fa-bars navbar-brand btn ml-3 p-3 border-0 my-auto' role="button"></i>
                :
                <i onClick={this.showunshow} className='fas fa-times navbar-brand btn ml-3 p-3 border-0 my-auto' role="button"></i>
              }
              <Link to="/" style={{ textDecoration: 'none' }} className="navbar-brand media p-0">
                <img className="align-self-center mr-0 p-0" src="/assets/logo.png" height="60px" width="60px"></img>
                <h6 id="name" className="text-center mt-2 ml-2 text-muted my-auto p-0 textTi">Cultura Universitaria</h6>
              </Link>
            </div>
            <button id="hboton" class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fas fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end navbar-toggler-rigth text-center" id="navbarTogglerDemo02">
              <Link className="nav-item nav-link" to="/">Inicio</Link>
              <Link className="nav-item nav-link" to="/contacto">Contacto</Link>
              <Link className="nav-item nav-link" to="/datos">Datos</Link>
              <Link className="nav-item nav-link" style={{ color: 'rgba(104,169,242)' }} to="/ingresarcuenta">Registrate</Link>
              <Link onClick={this.handleModal} style={{ color: 'rgba(104,169,242)' }} className="nav-item nav-link" to="#">
                <i className='fas fa-user-circle border-0 my-auto' role="button"></i> Admin
              </Link>
            </div>
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
          </nav>
          {show && (
            <div className='col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 pl-0 position-fixed cont-pri-lat m-0 px-0'>
              <div className='bg-light border'>
                {this.state.p_pequeña &&
                  <Link id="7" className={this.toGetColor(7)} onClick={this.cambiacolor} to="/">INICIO</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="8" className={this.toGetColor(8)} onClick={this.cambiacolor} to="/contacto">CONTACTO</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="9" className={this.toGetColor(9)} onClick={this.cambiacolor} to="/datos">DATOS</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="10" className={this.toGetColor(10)} onClick={this.cambiacolor} to="/registrate">REGISTRATE</Link>
                }
                {this.state.p_pequeña &&
                  <Link id="11" className={this.toGetColor(11)} onClick={this.cambiacolor,this.handleModal} to="#">ADMIN</Link>
                }
                <Link id="1" className={this.toGetColor(1)} onClick={this.cambiacolor} to="/licenciamiento">LICENCIAMIENTO DE UNIVERSIDADES</Link>
                <Link id="2" className={this.toGetColor(2)} onClick={this.cambiacolor} to="/programasacademicos">PROGRAMAS ACADÉMICOS</Link>
                <Link id="3" className={this.toGetColor(3)} onClick={this.cambiacolor} to="/becas">PROGRAMA NACIONAL DE BECA 18</Link>
                <Link id="4" className={this.toGetColor(4)} onClick={this.cambiacolor} to="/ubicacionuniversidades">UBICACIÓN DE UNIVERSIDADES</Link>
                <Link id="5" className={this.toGetColor(5)} onClick={this.cambiacolor} to={"/cantidadingresantes"}>CANTIDAD DE INGRESANTES</Link>
                <Link id="6" className={this.toGetColor(6)} onClick={this.cambiacolor} to={"/topuniversidades"}>TOP 15 UNIVERSIDADES</Link>
              </div>
            </div>
          )}
        </div>

      )
    }

  }

}