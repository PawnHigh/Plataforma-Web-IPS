import React, { Component } from 'react';

export default class Centro extends Component {

  constructor(props) {
    //para tomar las funcionalidades del componente
    super(props);
    this.state = {
      name: 'React',
      op: 1,
      texto: this.props.texto
    };
  }
  render() {
    const { op, texto } = this.state;
    return (
      <div className="col-12 p-0 bg-light">
        <div id="demo" className="carousel slide" data-ride="carousel">

          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner" >
            <div className="carousel-item active" style={{ height: 260 }}>
              <img className='img-fluid' src="assets/image1.jpg" alt="imagen" />
              <div className="carousel-caption">
                <h3 className="textoCarrucel">{texto}</h3>

              </div>
            </div>
            <div className="carousel-item" style={{ height: 260 }}>
              <img className='img-fluid' src="assets/image2.jpg" alt="imagen" />
              <div className="carousel-caption">
                <h3 className="textoCarrucel">{texto}</h3>

              </div>
            </div>
            <div className="carousel-item" style={{ height: 260 }}>
              <img className='img-fluid' src="assets/image3.jpg" alt="imagen" />
              <div className="carousel-caption">
                <h3 className="textoCarrucel">{texto}</h3>
              </div>
            </div>

          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    )
  }
}
