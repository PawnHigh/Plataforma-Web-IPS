import React, { Component } from 'react'
import Centro from '../navcentro';
import NavLat from '../navlateral';

const datos_1 = [{ id: 1, nombre: "Portocarrero Banda, Gerardo", img: "/assets/gerardo.jpeg", imgbg: "/assets/bg-gerardo.jpeg", cargo: "Líder de Proyecto", descripcion: "Estudiante de Ingenieria de Sistemas de la Universidad Nacional de San Agustin Arequipa-Peru", facebook: " Gerardo", email: " gportocarrerob@unsa.edu.pe", whatsapp: " +51999999999" },
{ id: 2, nombre: "Martinez Pastor, Giovanni Gelber", img: "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg", imgbg: "https://topesdegama.com/app/uploads-topesdegama.com/2019/02/Fondo-Xiaomi-Mi-9.jpg", cargo: "Desarrollador Backend", descripcion: "Estudiante de Ingenieria de Sistemas de la Universidad Nacional de San Agustin Arequipa-Peru", facebook: " Giovani", email: " gmartinezpas@unsa.edu.pe", whatsapp: " +51999999999" },
{ id: 3, nombre: "Ancco Ruelas, Cesar Roberto", img: "/assets/cesar.jpeg", imgbg: "https://topesdegama.com/app/uploads-topesdegama.com/2019/02/Fondo-Xiaomi-Mi-9.jpg", cargo: "Desarrollador Backend", descripcion: "Estudiante de Ingenieria de Sistemas de la Universidad Nacional de San Agustin Arequipa-Peru", facebook: " Cesar", email: " canccor@unsa.edu.pe", whatsapp: " +51999999999" },
{ id: 4, nombre: "Ticllahuanaco Huachaca, Kelvin", img: "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg", imgbg: "https://topesdegama.com/app/uploads-topesdegama.com/2019/02/Fondo-Xiaomi-Mi-9.jpg", cargo: "Diseñador UI/UX", descripcion: "Estudiante de Ingenieria de Sistemas de la Universidad Nacional de San Agustin Arequipa-Peru", facebook: " Kelvin", email: " kticllahuanaco@unsa.edu.pe", whatsapp: "+51999999999" }]

const datos_2 = [{ id: 5, nombre: "Quispe Quicaña, Victor Raul", img: "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg", imgbg: "https://topesdegama.com/app/uploads-topesdegama.com/2019/02/Fondo-Xiaomi-Mi-9.jpg", cargo: "Responsable de Pruebas", descripcion: "Estudiante de Ingenieria de Sistemas de la Universidad Nacional de San Agustin Arequipa-Peru", facebook: " Victor", email: "vquispequic@unsa.edu.pe", whatsapp: " +51999999999" },
{ id: 6, nombre: "Sullca Puma, Christian David", img: "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg", imgbg: "https://topesdegama.com/app/uploads-topesdegama.com/2019/02/Fondo-Xiaomi-Mi-9.jpg", cargo: "Diseñador del Sistema-Analista", descripcion: "Estudiante destacado de Ingenieria de Sistemas de la Universidad Nacional de San Agustin Arequipa-Peru", facebook: " christiandavid.sullcapuma.3", email: " csullca@unsa.edu.pe", whatsapp: " +51996017917" },
{ id: 7, nombre: "Salas Feliciano, Vanesa Diana", img: "https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg", imgbg: "https://topesdegama.com/app/uploads-topesdegama.com/2019/02/Fondo-Xiaomi-Mi-9.jpg", cargo: "Responsable de Despliegue", descripcion: "Estudiante de Ingenieria de Sistemas de la Universidad Nacional de San Agustin Arequipa-Peru", facebook: " Vanesa", email: " vsalasf@unsa.edu.pe", whatsapp: " +51999999999" }]

export default class Contacto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dat_1: datos_1,
            dat_2: datos_2
        }
    }

    render() {
        return (

            <div className="cont-pri">
                <div className='row mx-0'>
                    <NavLat color={this.state.ivalue} ></NavLat>
                    <div className='col-md-12 px-0'>

                        <Centro texto={"Sobre Nosotros"}></Centro>
                        <div className="row p-3 m-2 justify-content-center">
                            <h4 className="card-title"><strong>Nuestro Equipo de Trabajo</strong></h4>
                            <div className="card-group">
                                {this.state.dat_1.map(e => <div key={e.id} className="col-sm-3"> <div className="card card-cascade wider">
                                    <div className="view view-cascade overlay">
                                        <img className="card-img-top" src={e.imgbg} alt="Card image cap" />
                                        <div className="text-center"><img className="img-fliud rounded-circle" style={{ marginTop: "-100px" }} src={e.img} alt="Card image cap" width="175px" height="175px"></img></div>
                                        <div className="mask rgba-white-slight"></div>
                                    </div>
                                    <div className="card-body card-body-cascade text-center">
                                        <h4 className="card-title"><strong>{e.nombre}</strong></h4>
                                        <h5 className="blue-text pb-2"><strong>{e.cargo}</strong></h5>
                                        <p className="card-text">{e.descripcion} </p>
                                        <i className="fa fa-envelope-o fa-lg" style={{ color: "#007bff" }}></i>{e.email}<br />
                                        <i className="fab fa-facebook-square fa-lg" style={{ color: "#007bff" }}> </i> {e.facebook}<br />
                                        <i className="fab fa-whatsapp fa-lg" style={{ color: "#007bff" }} ></i> {e.whatsapp}<br />
                                    </div>
                                </div></div>)}
                            </div>
                            <div className="card-group pt-4 justify-content-center">
                                {this.state.dat_2.map(e => <div key={e.id} className="col-sm-3"> <div className="card card-cascade wider">
                                    <div className="view view-cascade overlay">
                                        <img className="card-img-top" src={e.imgbg} alt="Card image cap" />
                                        <div className="text-center"><img className="img-fliud rounded-circle" style={{ marginTop: "-100px" }} src={e.img} alt="Card image cap" width="175px" height="175px"></img></div>
                                        <div className="mask rgba-white-slight"></div>
                                    </div>
                                    <div className="card-body card-body-cascade text-center">
                                        <h4 className="card-title"><strong>{e.nombre}</strong></h4>
                                        <h5 className="blue-text pb-2"><strong>{e.cargo}</strong></h5>
                                        <p className="card-text">{e.descripcion} </p>
                                        <i className="fa fa-envelope-o fa-lg" style={{ color: "#007bff" }}></i>{e.email}<br />
                                        <i className="fab fa-facebook-square fa-lg" style={{ color: "#007bff" }}> </i> {e.facebook}<br />
                                        <i className="fab fa-whatsapp fa-lg" style={{ color: "#007bff" }} ></i> {e.whatsapp}<br />
                                    </div>
                                </div> </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

