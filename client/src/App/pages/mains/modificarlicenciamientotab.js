import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);
const value_table_index = [
    { id: 1, value: "NOMBRE DE LA UNIVERSIDAD", rep: "UniNam" },
    { id: 2, value: "TIPO DE GESTION", rep: "UniTip" },
    { id: 3, value: "LICENCIAMIENTO", rep: "UniLic" },
    { id: 4, value: "PERIODO DE LICENCIAMIENTO", rep: "UniPer" },
    { id: 5, value: "CIUDAD", rep: "UniCit" },
    { id: 5, value: "BECA 18", rep: "UniBe18" }];
const value_modified = [
    { id: 1, value: "LICENCIA OTORGADA" },
    { id: 2, value: "LICENCIA DENEGADA" },
    { id: 3, value: "CON INFORME DE OBSERVACIONES (IO) NOTIFICADO" },
    { id: 4, value: "NINGUNO" },
    { id: 5, value: "CON INFORME DE REVISIÓN DOCUMENTARIA (IRD)" }
]

export default class ModificarLicenciamientoTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index_table: value_table_index,
            modificar: [],
            modificar_lic: "",
            combo_modified: value_modified,
            universidades: [],
            filtrouniversidades: [],
            show: false
        }

    }

    async componentDidMount() {
        const res = await axios.get('/api/unis');
        var json = res.data;
        var arr = [];
        var jsontam = Object.keys(json).length;
        for (var i = 0; i < jsontam; i++) {
            arr.push({ "_id": json[i]["_id"], "value": json[i]["UniNam"] });
        }
        console.log(arr);
        this.setState({
            universidades: arr,
            filtrouniversidades: [],
        })
    }

    actualizacombo = (e) => {
        var valor = e.target.value;
        if (valor === "") {
            this.setState({ filtrouniversidades: [], show: false });
        }
        else {
            //console.log(json);
            var json = this.state.universidades;
            var arr = [];
            var jsontam = Object.keys(json).length;
            for (var i = 0; i < jsontam; i++) {
                var stri = json[i]["value"];
                if (stri.toLowerCase().includes(valor) || stri.toUpperCase().includes(valor))
                    arr.push({ "_id": json[i]["_id"], "value": json[i]["value"] });
            }
            this.setState({
                filtrouniversidades: arr,
                show: true
            })
            if (arr.length === 0)
                this.setState({ show: false })
        }
    }

    async seleccionar(id, nom) {
        var elemento = document.getElementById("bus");
        elemento.value = nom;
        const res = await axios.get('/api/unis/' + id);
        this.setState({
            filtrouniversidades: [],
            modificar: res.data,
            modificar_lic: res.data.UniLic,
            show: false
        })
        console.log(res.data);
        document.getElementById("sinmodificar").style.display = "none";
        document.getElementById("modificar").style.display = "block";

    }


    selected = e => {
        this.setState({
            modificar_lic: e.target.value
        })
    }

    async modificarlic() {
        return MySwal.fire({
            title: '¿Estas seguro?',
            text: 'De realizar los cambios de licenciamiento de esta universidad',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.value) {
                var temp1 = this.state.modificar_lic;
                var temp2 = this.state.modificar.UniLic;
                if (temp1 != temp2) {
                    var mdf = this.state.modificar;
                    mdf.UniLic = this.state.modificar_lic
                    await axios.put('/api/unis/' + mdf._id, mdf);
                    const res = await axios.get('/api/unis/' + mdf._id);
                    this.setState({
                        modificar: res.data
                    });
                    return MySwal.fire({
                        position: 'top-end',
                        icon: 'success',
                        width: 300,
                        padding: 0,
                        html: '<h6>Cambios realizados</h6>',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                else {
                    return MySwal.fire({
                        position: 'top-end',
                        icon: 'error',
                        width: 300,
                        padding: 0,
                        html: '<h6>Ningun cambio detectado</h6>',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        })
    }

    render() {
        return (
            <div className="col-12 bg-light pt-3" >
                <div className="mt-3">
                    <div className="form-label-group">
                        <input id="bus" className="form-control mr-sm-2" onChange={this.actualizacombo} type="search" placeholder="Busca Tu universidad" aria-label="Search" />
                        <label for="bus">Busca tu Universidad</label>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {this.state.show &&
                                <div className="col-md-12">
                                    <ul className="nav nav-pills nav-stacked anyClass">
                                        <li className="nav-item">
                                            {this.state.filtrouniversidades.map(opcion => <div key={opcion._id} id="cb1" className="nav-link" style={{ cursor: "pointer" }} href="#" onClick={() => this.seleccionar(opcion._id, opcion.value)} >{opcion.value}</div>)}
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>

                </div>
                <div className="col-12 bg-light" id="sinmodificar" style={{ paddingTop: "380px" }}></div>
                <div id="modificar" style={{ display: "none" }} className="containerTable" >
                    <div className="text-white text-center bg-light rounded">
                        <br /><br />
                        <h6 className="text-secondary textTi">DATOS DE LA UNIVERSIDAD A EDITAR</h6>
                        <div class="table-responsive">
                            <table class="table table-striped  bg-light text-secondary " >
                                <thead>
                                    <tr>
                                        <th>DATO</th>
                                        <th>VALOR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>UNIVERSIDAD </td>
                                        <td>{this.state.modificar.UniNam}</td>
                                    </tr>
                                    <tr>
                                        <td>TIPO DE UNIVERSIDAD </td>
                                        <td>{this.state.modificar.UniTip}</td>
                                    </tr>
                                    <tr>
                                        <td>ESTADO DE LICENCIAMIENTO </td>
                                        <td><select id="combo_m" className="bg-light mb-0" value={this.state.modificar_lic} onChange={this.selected}>
                                            {this.state.combo_modified.map(opcion => <option key={opcion.id} value={opcion.value}>{opcion.value}</option>)}
                                        </select>
                                            <br /></td>

                                    </tr>
                                    <tr>
                                        <td>CIUDAD </td>
                                        <td>{this.state.modificar.UniCit}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <center><button className="btn btn-info btn-sm pr-7" onClick={() => this.modificarlic()}>Guardar Cambios</button></center>
                    <br /><br />

                    <div className="table-responsive">
                        <table className="table table">
                            <tr>
                                {this.state.index_table.map(indice => <th key={indice.id} >{indice.value}</th>)}
                            </tr>
                            <tr key={this.state.modificar._id} >
                                <td>{this.state.modificar.UniNam}</td>
                                <td>{this.state.modificar.UniTip}</td>
                                <td>{this.state.modificar.UniLic}</td>
                                <td>{this.state.modificar.UniPer} años</td>
                                <td>{this.state.modificar.UniCit}</td>
                                <td>{(this.state.modificar.UniBe18) ? "Si tiene Acceso" : "No tiene Acceso"}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br /><br />

            </div>
        )
    }
}
