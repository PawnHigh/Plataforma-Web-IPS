import React, { Component } from 'react'
import Centro from '../navcentro';
import NavLat from '../navlateral';

var referencias_1 = [
  { id: 1, ico: "https://www.datosabiertos.gob.pe/sites/default/files/peru_2.png", title: "www.datosabiertos.gob.pe", subtitle: "Estado de Licenciamiento de Universidades", content: "Esta pagina sirvio de referencia para la obtencion de datos del estado de licenciamiento de la Universidades", ref: "https://www.datosabiertos.gob.pe/dataset/sunedu-estado-licenciamiento-universidades" },
  { id: 2, ico: "https://www.datosabiertos.gob.pe/sites/default/files/peru_2.png", title: "www.datosabiertos.gob.pe", subtitle: "Programas Academicos", content: "Esta pagina sirvio de referencia para la obtener la lista de los Programas Academicos pertenecientes a las diferentes Universidades", ref: "https://www.datosabiertos.gob.pe/dataset/sunedu-programas-acad%C3%A9micos" },
  { id: 3, ico: "https://www.pronabec.gob.pe/wp-content/uploads/2020/02/pronabec-favicon-final.png", title: "www.pronabec.gob.pe", subtitle: "Programa de Beca-18 Elegibles", content: "Esta pagina sirvio de referencia para obtener la lista de becas (Beca18) de las diferentes universidades", ref: "https://www.pronabec.gob.pe/beca-18-ies-elegibles/" }
];

var referencias_2 = [
  { id: 4, ico: "http://datos.minedu.gob.pe/profiles/dkan/themes/contrib/nuboot_radix/favicon.ico", title: "datos.minedu.gob.pe", subtitle: "Poblacion Estudiantil de Universidades-Ingresantes", content: "Esta pagina sirvio de referencia para obtener la cantidad de ingresantes de las diferentes Universidades", ref: "http://datos.minedu.gob.pe/dataset/poblacion-estudiantil-de-universidades/resource/413d60cd-b85c-4e5d-ae09-b64ae72b52aa#{view-grid:{columnsWidth:[{column:%22DESCRIPCI%EF%BF%BDN%22,width:384}]}}" },
  { id: 5, ico: "http://datos.minedu.gob.pe/profiles/dkan/themes/contrib/nuboot_radix/favicon.ico", title: "datos.minedu.gob.pe", subtitle: "Poblacion Estudiantil de Universidades-Postulantes", content: "Esta pagina sirvio de referencia para obtener la cantidad de postulantes de las diferentes Universidades", ref: "http://datos.minedu.gob.pe/dataset/poblacion-estudiantil-de-universidades/resource/7e8e2827-c984-4176-805a-af146d4cd28b#{view-grid:{columnsWidth:[{column:%22DESCRIPCI%EF%BF%BDN%22,width:422}]}}" }
];
export default class Datos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datos_1: referencias_1,
      datos_2: referencias_2
    }
  }

  render() {
    return (
      <div className="cont-pri">
        <div className='row mx-0'>
          <NavLat color={this.state.ivalue} ></NavLat>
          <div className="col-md-12 px-0">
            <Centro texto={"Referencia de datos"}></Centro>
            <div className="row p-3 m-2 justify-content-center">
              <h4 className="card-title"><strong>Referencias</strong></h4>

              <div className="card-group text-center">
                {this.state.datos_1.map(refer =>
                  <div key={refer.id} className="col-sm-4">
                    <div className="card">
                      <h5 className="card-header"><img src={refer.ico} height="20px" width="20px"></img> {refer.title}</h5>
                      <div className="card-body">
                        <h5 className="card-title">{refer.subtitle}</h5>
                        <p className="card-text">{refer.content}</p>
                        <center><a href={refer.ref} className="btn btn-primary">Visitar Pagina</a></center>
                      </div>
                    </div>
                  </div>)}
              </div>
              <div className="card-group pt-3 justify-content-center text-center">
                {this.state.datos_2.map(refer =>
                  <div key={refer.id} className="col-sm-4">
                    <div className="card">
                      <h5 className="card-header"><img src={refer.ico} height="20px" width="20px"></img> {refer.title}</h5>
                      <div className="card-body">
                        <h5 className="card-title">{refer.subtitle}</h5>
                        <p className="card-text">{refer.content}</p>
                        <center><a href={refer.ref} className="btn btn-primary">Visitar Pagina</a></center>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

