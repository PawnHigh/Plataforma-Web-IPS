import React, { Component } from 'react';
import NavLat from '../navlateral';
import Centro from '../navcentro';
import Main from '../navmain';
export default class TopUniversidades extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      show: true,
      ivalue: 6,
      texto: "Top Universidades de Lima y Arequipa"
    }
    // this.cambiacolor=this.cambiacolor.bind(this);
  }
  render() {
    return (

      <div className="cont-pri">
        <div className='row mx-0'>
          <NavLat color={this.state.ivalue} ></NavLat>
          <div className='col-md-12 px-0 '>
            <Centro texto={this.state.texto}></Centro>
            <Main codigo={this.state.ivalue}></Main>

          </div>
        </div>
      </div>

    )
  }

}


