import React, { Component } from 'react';
import axios from 'axios';

const value_cb_2 = [ { id:1,value: 'Arequipa'},{id:2, value:'lima'}];
const value_table_index=[
    {id:1,value:"Nombre de la Universidad",rep:"UniNam"},
    {id:2,value:"Tipo de Gestion",rep:"UniTip"},
    {id:3,value:"Licenciamiento",rep:"UniLic"},
    {id:4,value:"Periodo de Licenciamiento",rep:"UniPer"},
    {id:5,value:"Ciudad",rep:"UniCit"}];
const value_modified=[
    {id:1,value:"LICENCIA OTORGADA"},
    {id:2,value:"LICENCIA DENEGADA"},
    {id:3,value:"CON INFORME DE OBSERVACIONES (IO) NOTIFICADO"},
    {id:4,value:"NINGUNO"},
    {id:5,value:"CON INFORME DE REVISIÓN DOCUMENTARIA (IRD)"}
]

export default class ModificarLicenciamientoTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
          options_1:value_table_index,
          options_2:[{"id":0,"value":"none"}],
          index_table:value_table_index,
          value_table:[],
          datos_tabla_invariable:[],
          op_1:value_table_index[0].value, //valor actual del combobox 1 
          op_2:value_cb_2[0].value,  //valor actual del combobox 2
          modificar:[],
          modificar_lic:"",
          combo_modified:value_modified
        }
        
    }
    
    //esto es para  la solicitud al server de los datos de licenciamiento 
    async componentDidMount(){
        const res=await axios.get('/api/unis');
        this.setState({
            value_table:res.data,
            datos_tabla_invariable:res.data
        })
    }
    getValor(id,name){ //funcion para cambiar el valor de op_1 y op_2
        const valor=document.getElementById(id).value;   
        var json=this.state.datos_tabla_invariable;
        var arr=[];
        var jsontam=Object.keys(json).length;
        for(var i=0;i<jsontam;i++){
            if(!arr.includes(json[i][valor]))
            arr.push(json[i][valor]);    
        }
        var arr2=[];
        for(var j=0;j<arr.length;j++){
            arr2.push({"id":j,"value":arr[j]}); 
        }
        this.setState({
            options_2:arr2,
            op_1:valor
        });
    }
    getValor2(id,name){ //funcion para cambiar el valor de op_1 y op_2
        const valor=document.getElementById(id).value;
        var json=this.state.datos_tabla_invariable;
        var arr=[];
        var jsontam=Object.keys(json).length;
        for(var i=0;i<jsontam;i++){
            if(json[i][this.state.op_1]===valor)
            arr.push(json[i]);    
        }
        console.log(arr);
        this.setState({
            value_table:arr
        });
    }
    getFila(fila){
        console.log(fila);
        this.setState({
            modificar:fila,
            modificar_lic:fila.UniLic
        });
        this.state.value_table.map(fil=> {if(fil._id===fila._id){
                                            document.getElementById(fil._id).className="table-active";
                                        }
                                        else{
                                            document.getElementById(fil._id).className="";
                                        }
                                    });
        document.getElementById("modificar").style.display="block";
    }

    selected=e=>{
        this.setState({
            modificar_lic:e.target.value
        })
        console.log(this.state.modificar_lic)
    }

    async modificarlic(){
        var temp1 =this.state.modificar_lic;
        var temp2 =this.state.modificar.UniLic;
        if(temp1!=temp2){
            var mdf=this.state.modificar;
            mdf.UniLic=this.state.modificar_lic
            const res =await axios.put('/api/unis/'+mdf._id,mdf);
            alert("Cambios realizados");
        }
        else{
            alert("No de detecto ningun cambio");
        }
    }

    render(){
        return (
            <div className="col-12 bg-light pt-3" >
                 Buscar por:
                 <select id="combo_1" defaultValue={this.state.options_1[0].value} onChange={()=>this.getValor("combo_1","op_1")}>
                  {this.state.options_1.map(opcion=><option key={opcion.id} value={opcion.rep}>{opcion.value}</option>)}
                 </select>
                 <select id="combo_2" defaultValue={this.state.options_2[0].value} onChange={()=>this.getValor2("combo_2","op_2")}>
                  {this.state.options_2.map(opcion=><option key={opcion.id} value={opcion.value}>{opcion.value}</option>)}
                 </select>
           <div className="table-responsive">
            <table className="table table">
                <tr>
                {this.state.index_table.map(indice=> <th key={indice.id} >{indice.value}</th>)}
                </tr>
                {this.state.value_table.map(fila=> <tr id={fila._id} key={fila._id} style={{cursor:"pointer"}} onClick={()=>this.getFila(fila)}>
                    <td>{fila.UniNam}</td>
                    <td>{fila.UniTip}</td>
                    <td>{fila.UniLic}</td>
                    <td>{fila.UniPer} años</td>
                    <td>{fila.UniCit}</td>
                </tr>)}
            </table> 
            </div>
            <div id="modificar" style={{display:"none"}}>
                Universidad : {this.state.modificar.UniNam}<br/><br/>
                Tipo de Uiversidad : {this.state.modificar.UniTip}<br/>
                Estado de Licenciamiento :
                <select id="combo_m" value={this.state.modificar_lic} onChange={this.selected}>
                  {this.state.combo_modified.map(opcion=><option key={opcion.id} value={opcion.value}>{opcion.value}</option>)}
                 </select>
                <br/>
                Ciudad: {this.state.modificar.UniCit}<br/>
                <center><button className="btn btn-secondary btn-sm" onClick={()=>this.modificarlic()}>Guardar Cambios</button></center>
               
            </div>
            </div>
        ) 
    }
}
 