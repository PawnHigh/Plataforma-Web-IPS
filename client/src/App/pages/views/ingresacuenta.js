import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


export default class IngresaCuenta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codigo: this.props.codigo,
      users: [],
      Username: '',
      Email: '',
      redirect: false
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/users')
    this.setState({ users: res.data })
    /* console.log(res.data) */
  }

  onChangeUserName = (e) => {
    this.setState({
      Username: e.target.value
    })
    //window.$user=this.state.Username;
    /* console.log(e.target.value) */
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

  render() {
    const { redirect } = this.state;

    if (redirect) { // If redirect is true, we go to the root path
      return <Redirect to={'/'} />;
    }

    return (
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

          <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
          <p className='mt-5 text-center'><Link className="" to="/">Inicio</Link></p>

          <div className="footer-reg">
            <p className="mb-3 text-muted text-center">&copy;{window.$user} Cultura Universitaria Escoge Tu Futuro</p>
          </div>

        </form>
      </div>

    );
  }


}


