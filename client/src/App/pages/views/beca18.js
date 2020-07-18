import React, { Component } from 'react';
import NavLat from '../navlateral'; 
import Centro from '../navcentro'; 
import Main from '../navmain'; 
export default class Beca18 extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      show:true,
      ivalue:3,
      texto:"Universidades que con posibilidad de Beca 18"
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