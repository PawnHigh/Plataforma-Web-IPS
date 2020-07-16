import React, { Component } from 'react';
import axios from 'axios';
import Scope from '../scope';

const value_cb_2 = [ { id:1,value: 'Arequipa'},{id:2, value:'lima'}];

export default class CantidadIngresanteTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
          universidades:[],
          value_table:[], //valor actual del combobox 1 
          filtrouniversidades:[],  
          show:false,
          uniselect:{},
          agnosgrap:[2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014],
          datagrap:{},
          graficar:false,
          valuebusquedadefault:"",
          requirementKey:Math.random()
        }
        
    }
    async componentDidMount(){
        const res=await axios.get('/api/unis');
        var json =res.data;
        var arr=[];
        var jsontam=Object.keys(json).length;
        for(var i=0;i<jsontam;i++){
            arr.push(json[i]);
        }
        this.setState({
            value_table:res.data,
            universidades:arr,
            filtrouniversidades:arr
        })

        //this.seleccionado=this.seleccionado.bind();
    }
actualizacombo=(e)=>{

    var valor=e.target.value;
    this.setState({valuebusquedadefault:valor});
    if(valor===""){
        this.setState({filtrouniversidades:[],show:false});        
    }else{
        var json=this.state.universidades;
        
        var arr=[];
            var jsontam=Object.keys(json).length;
            for(var i=0;i<jsontam;i++){
                var stri=json[i]["UniNam"];
                if(stri.toLowerCase().includes(valor)||stri.toUpperCase().includes(valor))
                arr.push(json[i]);
            }
            this.setState({
               filtrouniversidades:arr,
               show:true
            })
            if(arr.length===0)
            this.setState({show:false})
    }
    
}
seleccionado=(e)=>{

    e.preventDefault();
    var valor=e.target.id;
    var json=this.state.universidades;
        
        var selecc={};
            var jsontam=Object.keys(json).length;
            for(var i=0;i<jsontam;i++){
                var id=json[i]["_id"];
                if(id===valor){
                    selecc=json[i];
                    break;
                }
            }
            this.setState({
                uniselect:selecc,
                show:false,
                valuebusquedadefault:selecc.UniNam
             })
            // para la gráfica
            const data={posing:{
                pos:selecc.UniPos,
                ing:selecc.UniEnt,
                agnos:this.state.agnosgrap,
                title: selecc.UniNam,
                colorA:[]
            }}
            
            this.setState({
                datagrap:data,
                graficar:true,
                requirementKey:Math.random()
            })
}


    render(){
        return (

            <div className="container">
                <div className="row" >
                    <div className="col-md-12">
                        <div className="form-label-group">
                            <input 
                                id="bus" 
                                className="form-control mr-sm-2" 
                                onChange={this.actualizacombo}
                                type="search" 
                                placeholder="Busca Tu universidad" 
                                value={this.state.valuebusquedadefault} 
                                aria-label="Search"/>
                            <label htmlFor="bus">Busca tu Universidad</label>
                        </div>
                    </div>
            
                </div>
                <div className="row">
                    <div className="col-12">
                    {this.state.show&&
                    
                        <div className="col-md-12">
                        <ul className="nav nav-pills nav-stacked anyClass">
                            <li className="nav-item">
                                {this.state.filtrouniversidades.map(opcion=>
                                    <a 
                                        key={opcion._id} 
                                        id={opcion._id} 
                                        href="#" 
                                        className="nav-link" 
                                        onClick={this.seleccionado} 
                                    >
                                        {opcion.UniNam}
                                    </a>
                                )}
                            </li>
                        </ul>
                        </div>
                    }
                    </div>
                </div>
               {this.state.graficar&& 
               <div className='row'>
                   <div className="container border">
                    <div className="App">
                            <header className="text-center">
                                <h4 className="text-pr">
                                    Relacion Postulantes-Ingresantes por año
                                </h4>
                            </header>   
                            <Scope key={this.state.requirementKey} posing={this.state.datagrap.posing
                            }/>
                        </div>
                   </div>
               </div>
                
                }
            </div>
                 
        ) 
    }
}