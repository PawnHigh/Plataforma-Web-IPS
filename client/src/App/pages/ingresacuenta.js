import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import axios from 'axios';

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
    this.setState({users: res.data})
    /* console.log(res.data[0].Username) */ 
  }

  onChangeUserName = (e) => {
    this.setState({
      Username: e.target.value
    })
    /* console.log(e.target.value) */
  }

  onChangeUserEmail = (e) => {
    this.setState({
      Email: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    const res = await axios.post('/api/users',{
      Username: this.state.Username,
      Email: this.state.Email
    }).then(() => this.setState({ redirect: true }))
    //console.log(this.state)
  }

  render() {
    const { redirect } = this.state;

     if (redirect) { // If redirect is true, we go to the root path
       return <Redirect to='/'/>;
     }

    return (
      <div className="row p-3 w-100 justify-content-center">
        <form className="form-signin col-md-5 align-self-center" onSubmit={this.onSubmit}>
          <div className="text-center mb-4 mt-4"><a href="/"><img className="mb-2" src="/assets/logo2.jpg" alt="Logo CUEFU"/></a>
            <h4 className="h4 mb-5 font-weight-normal">Registro de Usuario</h4>
          </div>

          <div className="form-label-group">
            <input type="text" onChange={this.onChangeUserName} id="inputEmail" className="form-control" placeholder="Nombre de Usuario" required autoFocus />
            <label for="inputEmail">Nombre de Usuario</label>
          </div>

          <div className="form-label-group">
            <input type="email" onChange={this.onChangeUserEmail} id="inputPassword" className="form-control" placeholder="Password" required />
            <label for="inputPassword">Correo Electrónico</label>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
          <p className='mt-5 text-center'><Link className="" to="/">Inicio</Link></p>

          <div className="footer-reg"> 
            <p className="mb-3 text-muted text-center">&copy; Cultura Universitaria Escoge Tu Futuro</p>
          </div>
          
        </form>
      </div>

    );
  }


}


