import React, { Component } from 'react';
import NavLat from '../navlateral';
import Centro from '../navcentro';
import Main from '../navmain';
export default class CantidadIngresantes extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      show: true,
      ivalue: 5,
      texto: "Cantidad Ingresantes"
    }


    // this.cambiacolor=this.cambiacolor.bind(this);
  }
  render() {
    return (

      <div className='col-md-12 px-0'>
        <Centro texto={this.state.texto}></Centro>
        <Main codigo={this.state.ivalue}></Main>
      </div>

    )
  }

}