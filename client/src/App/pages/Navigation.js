import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navigation extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      show: true,
      requirementKey: Math.random()
    };
    this.showunshow = this.showunshow.bind(this);
  }
  showunshow() {
    this.setState({
      name: "React",
      show: !this.state.show,
      requirementKey: Math.random()
    })

  }
  render() {
    const { show } = this.state;

    return (
      <div>
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className="navbar-collapse">
            {/*aqui se va a agregar ícono en vez de la X aun estoy viendo eso*/}
            <i onClick={this.showunshow} className='fas fa-bars navbar-brand btn btn-light' role="button"></i>
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
              <Link className="nav-item" to="/ingresarcuenta/">Registrate</Link>
            </div>

          </div>
        </div>
      </div>

    )
  }

}