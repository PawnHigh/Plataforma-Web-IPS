import React, { Component } from 'react';
import NavLat from '../navlateral';
import Main from '../navmain';

export default class ModificarLicenciamiento extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      show: true,
      ivalue: 7
    }
    // this.cambiacolor=this.cambiacolor.bind(this);
  }
  render() {
    return (
      <div className="cont-pri">
        <div className='row mx-0'>
          <NavLat color={this.state.ivalue} ></NavLat>
          <div className='col-md-12 px-0 '>
            <Main codigo={this.state.ivalue}></Main>

          </div>
        </div>
      </div>


    )
  }

}