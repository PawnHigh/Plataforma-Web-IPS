import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default function Portada() {
    return (
        <div>
            <div className='container-portada text-center col-12'>
                <div className='d-flex col-12'>
                    <div className="cover-container d-flex p-3 mx-auto flex-column justify-content-center align-self-center">
                        <header id='nav-masthead-res' class="masthead mb-auto fixed-top">
                            <div class="inner d-flex">

                                <div class="nav nav-masthead justify-content-center align-self-center collapse navbar-collapse navbar-toggler-rigth text-center">
                                    <nav className='navbar navbar-expand-sm w-100 navbar-light m-0 py-0 pl-0 pr-4 navbar-toggleable-sm'>
                                        <button class="navbar-toggler ml-auto text-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="fas fa-bars"></span>
                                        </button>
                                        <div className="collapse navbar-collapse justify-content-end navbar-toggler-rigth text-center" id="navbarTogglerDemo02">
                                            <Link className="nav-item nav-link active" to="/">Inicio</Link>
                                            <Link className="nav-item nav-link" to="/contacto">Contacto</Link>
                                            <Link className="nav-item nav-link" to="/datos">Datos</Link>
                                            <Link className="nav-item nav-link" style={{color: 'rgba(104,169,242)'}} to="/ingresarcuenta">Registrate</Link>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </header>

                        <main role="main" className="inner cover mt-5">
                            <h1 className="titlecul mt-5">Cultura Universitaria</h1>
                            <p className="lead mt-5">Plataforma Web Desarrollado para Jóvenes que se encuentren en una constante búsqueda de Educación Superior en Arequipa y Lima que cumpla con sus expectativas.</p>
                            <p className="lead mt-5">
                                <Link href="#" className="b-portada button button-responsive button-medium button-primary-outline-v2" to='/topuniversidades'>Quiero saber más <i class="fa fa-arrow-circle-right" aria-hidden="true"></i> </Link>
                            </p>
                        </main>

                    </div>
                </div>
            </div>

            <section class="section-50 section-md-75 section-lg-100">
                <div class="container">
                    <div class="row row-40">
                        <div class="col-md-6 col-lg-4 height-fill">
                            <article class="icon-box">
                                <div class="box-top">
                                    <div class="box-icon"><span class="novi-icon icon icon-primary icon-lg mercury-icon-briefcase"></span></div>
                                    <div class="box-header">
                                        <h5><Link to="/becas">Beca 18</Link></h5>
                                    </div>
                                </div>
                                <div class="divider bg-accent"></div>
                                <div class="box-body">
                                    <p>No permitas que tu situación económica límite tu posibilidad de estudio, conoce las universidades que
                    tienen acceso a beca 18</p>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6 col-lg-4 height-fill">
                            <article class="icon-box">
                                <div class="box-top">
                                    <div class="box-icon"><span class="novi-icon icon icon-primary icon-lg mercury-icon-users"></span></div>
                                    <div class="box-header">
                                        <h5><Link to="/ubicacionuniversidades">Ubicación</Link></h5>
                                    </div>
                                </div>
                                <div class="divider bg-accent"></div>
                                <div class="box-body">
                                    <p>Accede a la Universidades que más te convenga de acuerdo a tu ubicación, localiza tu universidad
                  </p>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6 col-lg-4 height-fill">
                            <article class="icon-box">
                                <div class="box-top">
                                    <div class="box-icon"><span class="novi-icon icon icon-primary icon-lg mercury-icon-lib"></span></div>
                                    <div class="box-header">
                                        <h5><Link to="/programasacademicos">Programas Académicos</Link></h5>
                                    </div>
                                </div>
                                <div class="divider bg-accent"></div>
                                <div class="box-body">
                                    <p>Plantea tu estrategia, conoce los programas que las universidades tienen para ti.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-displaced-wrap">
                <div class="bg-displaced-body">
                    <div class="container">
                        <div class="inset-xl-left-70 inset-xl-right-70">
                            <article class="box-cart bg-ebony-clay">
                                <div class="box-cart-image"><img src="/assets/portada/home-21.jpg" alt="" width="342" height="338" />
                                </div>
                                <div class="box-cart-body">
                                    <blockquote class="blockquote-complex blockquote-complex-inverse">
                                        <h3>Sobre Nosotros</h3>
                                        <p>
                                            <q>Conoce a nuestro equipo de trabajo quienes hicieron que este proyecto sea posible, accede a más información sobre el desarrollo de esta plataforma</q>
                                        </p>

                                    </blockquote>
                                    <div class="button-wrap inset-md-left-70"><Link class="button button-responsive button-medium button-primary-outline-v2" to="/contacto">Comunícate con Nosotros</Link></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="bg-displaced bg-image" style={{ backgroundImage: 'url(/assets/portada/home-12.jpg)' }}></div>
            </section>

            <section class="section-60 section-lg-100">
                <div class="container">
                    <div class="row row-40 align-items-sm-end">
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="thumbnail-variant-2-wrap">
                                <div class="thumbnail thumbnail-variant-2">
                                    <div class="thumbnail-inner">
                                        <img src='/assets/portada/paulet.jpg' width='180' />
                                        <div class="link-group"><p className='text-light mt-2'>Estudiante de la UNSA que por su  ingenio accedio a una beca y estudio en Francia, considerado Padre de la Aeronáutica Moderna</p></div>

                                    </div>
                                    <div class="thumbnail-caption">
                                        <p className="font-weight-normal h6"><a target="_blank" href="https://es.wikipedia.org/wiki/Pedro_Paulet">Pedro Paulet</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="thumbnail-variant-2-wrap">
                                <div class="thumbnail thumbnail-variant-2">

                                    <div class="thumbnail-inner">
                                        <img src='/assets/portada/vallejo.jpg' width='180' />
                                        <div class="link-group"><p className='text-light mt-2'>Reconocido literato peruano, proveniente de una familia de economía baja hizo su estudio en UNMSM</p></div>
                                    </div>
                                    <div class="thumbnail-caption">
                                        <p class="font-weight-normal h6"><a target="_blank" href="http://www.unmsm.edu.pe/ilustres/biografia/77">Cesar Vallejo</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="thumbnail-variant-2-wrap">
                                <div class="thumbnail thumbnail-variant-2">
                                    <div class="thumbnail-inner">
                                        <img src='/assets/portada/llosa.jpg' width='180' />
                                        <div class="link-group"><p className='text-light mt-2'>Reconocido literato arequipeño, ganador de premio nobel de literatura, estudió en la UNMSM la carrera de Derecho y Letras</p></div>
                                    </div>
                                    <div class="thumbnail-caption">
                                        <p class="font-weight-normal h6"><a target="_blank" href="https://es.wikipedia.org/wiki/Mario_Vargas_Llosa">Mario Vargas Llosa</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-12 col-lg-3 text-center my-auto">
                            <div class="block-wrap-1">

                                <h3 class="text-normal">Esfuerzate</h3>
                                <p class="h5 h5-smaller text-style-4">No te Limites</p>
                                <p>Los seres humanos tenemos una capacidad única entre todas las especies, no permitas que nada impida que llegues al exito, recuerda la verdadera satisfacción implica un gran esfuerzo
                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </div>
    )
}
