import React, { Component } from 'react';
import axios from 'axios';

const value_cb_2 = [ { id:1,value: 'Arequipa'},{id:2, value:'lima'}];
const value_table_index=[
    {id:1,value:"Región",rep:"BecReg"},
    {id:2,value:"Sede",rep:"BecSed"},
    {id:3,value:"Carrera",rep:"BecCar"}];

export default class Beca18Tab extends Component{
    constructor(props) {
        super(props);
        this.state = {
          
          index_table:value_table_index,
          unisbec18:[],
          value_table_becas:[],
          tempbecas:[],
          showtempbecas:false,
          idshow:'nada'
        }

    }
    
    //esto es para  la solicitud al server de los datos de licenciamiento 
    async componentDidMount(){
        const res=await axios.get('/api/unis');
        const becas=await axios.get('/api/becas');
        var json =res.data;
        var arr=[];
        var jsontam=Object.keys(json).length;
        for(var i=0;i<jsontam;i++){
            if(json[i]['UniBe18']===true)
                arr.push(json[i]);
        }
        this.setState({
            value_table_becas:becas.data,
            unisbec18:arr
        })
    }
  
    seleccionado=(e)=>{
        e.preventDefault();
        var valor=e.target.id;
        if(valor===this.state.idshow){
            this.setState({idshow:0});
        }else{
            var json=this.state.value_table_becas;
        
            var arr=[];
                var jsontam=Object.keys(json).length;
                for(var i=0;i<jsontam;i++){
                    var uname=json[i]["BecUni"];
                    if(uname===valor){
                        arr.push(json[i]);
                    }
                }            
            this.setState({tempbecas:arr,idshow:valor})
        }

         
    }
    geticon(id){
        return this.state.idshow===id?"fa fa-chevron-down my-auto":"fa fa-chevron-right my-auto";
    }
    render(){
        return (
            <div>
                <div className="container py-3">
                    <h4>Universidades con Beca 18</h4>
                    <div> 
                            {this.state.unisbec18.map(fila=>
                                <div>
                                    <div className="row"> 
                                    <i className={this.geticon(fila.UniNam)} aria-hidden="true"></i>

                                        <a 
                                            key={fila._id} 
                                            id={fila.UniNam} 
                                            href="#" 
                                            className="nav-link" 
                                            onClick={this.seleccionado} 
                                        >
                                            {fila.UniNam}
                                        </a>
                                    </div>
                                    <div>
                                    {this.state.idshow===fila.UniNam&&
                                        <div className="table-responsive">
                                            <table className="table table">
                                                
                                                <tr>
                                                {this.state.index_table.map(indice=> <th key={indice.id} >{indice.value}</th>)}
                                                </tr>
                                                
                                                {this.state.tempbecas.map(fila=> <tr key={fila._id}>
                                                    <td>{fila.BecReg}</td>
                                                    <td>{fila.BecSed}</td>
                                                    <td>{fila.BecCar}</td>        
                                                </tr>)}
                                            </table>
                                
                                        </div>

                                    }
                                    </div>
                                </div>
                            )}

                        </div>
                </div>
            
                    
        </div>
        ) 
    }
}