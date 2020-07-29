import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class NavLat extends Component {
  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      name: 'React',
      op: this.props.color,
      show: this.props.mostrar,
      verification: this.props.verificar
    }
    //this.cambiacolor=this.cambiacolor.bind(this);
  }

  toGetColor(c) {

    //aquí tambien modifica las clases de bootstrap

    var m = this.state.op === c ? 'list-group-item list-group-item-action active bg-secondary rounded-0' : 'list-group-item list-group-item-action bg-dark rounded-0';
    m = m + ' text-white border-white border-left-0 border-right-0';
    return m;
  }
  cambiacolor = (e) => {
    var valor = e.target.id;
    this.setState({
      op: valor
    });
  }
  render() {

    const { op, show, verification } = this.state;
    if (verification === 'gersrpb@gmail.com') {
      return (

        <div>
          {show && (
            <div className='col-md-3 pl-0 position-fixed cont-pri-lat m-0 '>
              <div className='bg-dark'>
                <Link id="1" className={this.toGetColor(1)} onClick={this.cambiacolor} to="/licenciamiento">Licenciamiento de Universidades</Link>
                <Link id="2" className={this.toGetColor(2)} onClick={this.cambiacolor} to="/programasacademicos">Programas Académicos</Link>
                <Link id="3" className={this.toGetColor(3)} onClick={this.cambiacolor} to="/becas">Programa Nacional de Becas</Link>
                <Link id="4" className={this.toGetColor(4)} onClick={this.cambiacolor} to="/ubicacionuniversidades">Ubicación de Universidades</Link>
                <Link id="5" className={this.toGetColor(5)} onClick={this.cambiacolor} to={"/cantidadingresantes"}>Cantidad de Ingresantes</Link>
                <Link id="6" className={this.toGetColor(7)} onClick={this.cambiacolor} to={"/modiflicen"}>Modificar Licenciamiento</Link>
              </div>
            </div>
          )}
        </div>

      )
    } else {
      return (

        <div>
          {show && (
            <div className='col-md-3 pl-0 position-fixed cont-pri-lat m-0 '>
              <div className='bg-dark'>
                <Link id="1" className={this.toGetColor(1)} onClick={this.cambiacolor} to="/licenciamiento">Licenciamiento de Universidades</Link>
                <Link id="2" className={this.toGetColor(2)} onClick={this.cambiacolor} to="/programasacademicos">Programas Académicos</Link>
                <Link id="3" className={this.toGetColor(3)} onClick={this.cambiacolor} to="/becas">Programa Nacional de Becas</Link>
                <Link id="4" className={this.toGetColor(4)} onClick={this.cambiacolor} to="/ubicacionuniversidades">Ubicación de Universidades</Link>
                <Link id="5" className={this.toGetColor(5)} onClick={this.cambiacolor} to={"/cantidadingresantes"}>Cantidad de Ingresantes</Link>
              </div>
            </div>
          )}
        </div>

      )
    }

  }

}