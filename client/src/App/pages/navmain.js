import React, { Component } from 'react';
import LicenciamientoTab from './mains/licenciamientotab';
import ProgramasAcademicosTab from './mains/programasacademicostab';
import CantidadIngresanteTab from './mains/cantidadingresantetab';
import UbicacionUniversidadesTab from './mains/ubicaciontab';
import TopUniversidadesTab from './mains/topuniversidadestab';
import Beca18Tab from './mains/beca18tab';
import ModificarLicenciamientoTab from './mains/modificarlicenciamientotab';
import localS from 'local-storage'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      codigo:this.props.codigo, // 1:Menu licenciamineto   2 : Menu Programas academicos
    }
  }
  render() {
      
    switch(this.state.codigo){
      case 1:
        return(<div className="col-12 bg-light" >
        <LicenciamientoTab></LicenciamientoTab>
        </div>);
      case 2:
        return (<div className="col-12 bg-light" >
          <ProgramasAcademicosTab></ProgramasAcademicosTab>
          </div>);
      case 3:
        return (<div className="col-12 bg-light" >
          <Beca18Tab></Beca18Tab>
          </div>);    
      case 4:
        return (<div className="col-12 bg-light" >
          <UbicacionUniversidadesTab></UbicacionUniversidadesTab>
          </div>);
      case 5:
        return (<div className="col-12 bg-light" >
          <CantidadIngresanteTab></CantidadIngresanteTab>
          </div>);
      case 6:
        return (<div className="col-12 bg-light" >
          <TopUniversidadesTab></TopUniversidadesTab> 
          </div>);
      case 7:
        const varAdmin = localS.get('myData')
        if(varAdmin === 'gersrpb@gmail.com'){
          return (<div className="col-12 bg-light" >
          <ModificarLicenciamientoTab></ModificarLicenciamientoTab> 
          </div>);
        } else {
          return (
            <div className="col-12 bg-light" >
              <h4>
            Eres Admin? Registrate ...
              </h4>
            </div>
          )
        }
      default: return(<h1>en Construccion</h1>);
    }
  }

}
export default Main;