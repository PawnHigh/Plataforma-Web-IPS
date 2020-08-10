import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { Redirect } from 'react-router'
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import NavLat from '../navlateral';
const MySwal = withReactContent(Swal)


export default class IngresaCuenta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codigo: this.props.codigo,
      users: [],
      Username: '',
      Email: '',
      redirect: false,
      showM: false,
      EmailVerification: ''
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/users')
    this.setState({ users: res.data })
  }

  onChangeUserName = (e) => {
    this.setState({
      Username: e.target.value
    })
  }

  onChangeUserEmail = (e) => {
    this.setState({
      Email: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const res = axios.post('/api/users', {
      Username: this.state.Username,
      Email: this.state.Email
    })
    const confirm = this.state.users.find(USER => USER.Email === this.state.Email)
    /* console.log(confirm) */

    if (confirm) {
      return MySwal.fire({
        position: 'top-end',
        icon: 'error',
        width: 300,
        padding: 0,
        html: '<h6>Correo Existente</h6>',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.setState({ redirect: true })
      return MySwal.fire({
        position: 'top-end',
        icon: 'success',
        width: 300,
        padding: 0,
        html: '<h6>Usuario Registrado</h6>',
        showConfirmButton: false,
        timer: 1500
      })
    }


    //console.log(this.state)
  }

  onChangeEmail = (e) => {
    this.setState({
      EmailVerification: e.target.value
    })
  }

  handleModal = (e) => {
    this.setState({ showM: !this.state.showM })
  }

  eliminarCuenta = (e) => {
    e.preventDefault()
    const confirm = this.state.users.find(USER => USER.Email === this.state.EmailVerification)
    console.log(confirm.Username)
    if (confirm) {
      const res = axios.post(`/api/users/${confirm._id}`, {
        Username: confirm.Username,
        Email: confirm.Email
      })
      return MySwal.fire({
        position: 'top-end',
        icon: 'success',
        width: 300,
        padding: 0,
        html: '<h6>Cuenta Eliminada</h6>',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      this.setState({ redirect: true })
      return MySwal.fire({
        position: 'top-end',
        icon: 'error',
        width: 300,
        padding: 0,
        html: '<h6>Cuenta Inexistente</h6>',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) { // If redirect is true, we go to the root path
      return <Redirect to={'/'} />;
    }

    return (

      <div className="cont-pri">
        <Modal show={this.state.showM}>
          <Modal.Header closeButton onClick={this.handleModal}>Eliminar Cuenta Para Usuarios</Modal.Header>
          <Modal.Body>
            <form className="form-signin col-md-5 align-self-center" onSubmit={this.eliminarCuenta}>
              <div className="form-label-group">
                <input type="email" onChange={this.onChangeEmail} id="inputPassword2" className="form-control" placeholder="Password" required />
                <label for="inputPassword2">Correo Electrónico</label>
              </div>
              <button className="btn btn-lg btn-danger btn-block" type='submit'>Eliminar</button>
            </form>
          </Modal.Body>
        </Modal>
        <div className='row mx-0'>
          <NavLat></NavLat>
          <div className="row p-3 w-100 justify-content-center">
            <form className="form-signin col-md-5 align-self-center" onSubmit={this.onSubmit}>
              <div className="text-center mb-4 mt-4"><a href="/"><img className="mb-2" src="/assets/logo2.jpg" alt="Logo CUEFU" /></a>
                <h4 className="h4 mb-5 font-weight-normal">Registro de Usuario</h4>
              </div>

              <div className="form-label-group">
                <input type="text" onChange={this.onChangeUserName} id="inputEmail" className="form-control" placeholder="Nombre de Usuario" required autoFocus />
                <label htmtlFor="inputEmail">Nombre de Usuario</label>
              </div>

              <div className="form-label-group">
                <input type="email" onChange={this.onChangeUserEmail} id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Correo Electrónico</label>
              </div>

              <button className="btn btn-lg btn-primary btn-block mt-5" type="submit">Registrarse</button>
              <p className='mt-5 text-center'><Link className="" to="/">Volver a Inicio</Link></p>

              <div className="container form-label-group mt-5 mb-0">
                <div className="row">
                  <p className='text-center p-2'>También Puedes</p>
                  <button onClick={this.handleModal} type="button" className="btn btn-danger col">Eliminar Cuenta</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


}

