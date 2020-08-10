import React, { Component } from 'react';
import axios from 'axios';
import Table from '../tabla';

const value_cb_2 = [{ id: 1, value: 'Arequipa' }, { id: 2, value: 'lima' }];
const value_table_index = [
    { id: 1, value: "NOMBRE DE LA UNIVERSIDAD", rep: "MejNom" },
    { id: 2, value: "TIPO DE GESTIÓN", rep: "MejTip" },
    { id: 3, value: "PERIODO DE LICENCIAMIENTO", rep: "MejPer" },
    { id: 4, value: "REGION", rep: "MejReg" }];

export default class TopUniversidadesTab extends Component {
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
        const res = await axios.get('/api/mejores');
        this.setState({
            value_table: res.data,
            datos_tabla_invariable: res.data,
            requirementKey: Math.random(),
            showtable: true
        })
    }
    getValor(id, name) { //funcion para cambiar el valor de op_1 y op_2
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
    getValor2(id, name) { //funcion para cambiar el valor de op_1 y op_2
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