import React, { Component } from 'react';
import axios from 'axios';
import Table from '../tabla';

const value_cb_2 = [{ id: 1, value: 'Arequipa' }, { id: 2, value: 'lima' }];
const value_table_index = [
    { id: 1, value: "NOMBRE DE LA UNIVERSIDAD", rep: "UniNam" },
    { id: 2, value: "TIPO DE GESTION", rep: "UniTip" },
    { id: 3, value: "LICENCIAMIENTO", rep: "UniLic" },
    { id: 4, value: "PERIODO DE LICENCIAMIENTO", rep: "UniPer" },
    { id: 5, value: "CIUDAD", rep: "UniCit" }];

export default class LicenciamientoTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options_1: value_table_index,
            options_2: [{ "id": 0, "value": "none" }],
            index_table: value_table_index,
            value_table: [],
            datos_tabla_invariable: [],
            op_1: value_table_index[0].value, //valor actual del combobox 1 
            op_2: value_cb_2[0].value,  //valor actual del combobox 2
            requirementKey: Math.random(),
            showtable: false
        }
    }

    //esto es para  la solicitud al server de los datos de licenciamiento 
    async componentDidMount() {
        const res = await axios.get('/api/unis');
        this.setState({
            value_table: res.data,
            datos_tabla_invariable: res.data,
            requirementKey: Math.random(),
            showtable: true
        })
    }
    getValor(id) { //funcion para cambiar el valor de op_1 y op_2
        const valor = document.getElementById(id).value;

        var json = this.state.datos_tabla_invariable;
        var arr = [];
        var jsontam = Object.keys(json).length;
        for (var i = 0; i < jsontam; i++) {
            if (!arr.includes(json[i][valor]))
                arr.push(json[i][valor]);
        }
        var arr2 = [];
        for (var j = 0; j < arr.length; j++) {
            arr2.push({ "id": j, "value": arr[j] });
        }
        this.setState({
            options_2: arr2,
            op_1: valor
        });
    }
    getValor2(id) { //funcion para cambiar el valor de op_1 y op_2
        const valor = document.getElementById(id).value;

        var json = this.state.datos_tabla_invariable;
        var arr = [];
        var jsontam = Object.keys(json).length;
        for (var i = 0; i < jsontam; i++) {
            if (json[i][this.state.op_1] === valor)
                arr.push(json[i]);
        }
        console.log(arr);
        this.setState({
            value_table: arr,
            requirementKey: Math.random()
        });
    }
    render() {
        return (
            <div className="col-12 bg-light pt-3" >
                {this.state.showtable &&
                    <div className='row'>
                        <div className='filtrotex col-12 col-md-3 col-lg-2 mx-0 px-0'>
                            <div className='text-center my-2'>
                                BUSCAR POR:
                        </div>
                        </div>
                        <div className='col-12 col-sm-5 col-md-4 col-lg-3 ml-0'>
                            <select className='form-control mx-auto col-12' id="combo_1" defaultValue={this.state.options_1[0].value} onChange={() => this.getValor("combo_1")}>
                                {this.state.options_1.map(opcion => <option key={opcion.id} value={opcion.rep}>{opcion.value}</option>)}
                            </select>
                        </div>
                        <div className='col-12 col-sm-5 col-md-4 col-lg-3 ml-0'>
                            <select className='form-control mx-auto col-12' id="combo_2" defaultValue={this.state.options_2[0].value} onChange={() => this.getValor2("combo_2")}>
                                {this.state.options_2.map(opcion => <option key={opcion.id} value={opcion.value}>{opcion.value}</option>)}
                            </select>
                        </div>
                    </div>
                }
                {this.state.showtable ?
                    <Table key={this.state.requirementKey} columns={this.state.index_table} data={this.state.value_table} paginacion={true}></Table>
                    :
                    <center>
                        <div className='row pt-5'>
                            <img
                                src='assets/load.gif'
                                style={{ width: '80px', margin: 'auto' }}
                                alt='loading...'
                            />
                        </div>
                        <div className="col-12 bg-light" style={{ paddingTop: "106px" }}></div>
                    </center>
                }
            </div>

        )
    }
}
