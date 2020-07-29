import React, { Component } from 'react';
import axios from 'axios';
    
export default class UbicacionUniversidadesTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
          universidades:[],
          //value_table:[], //valor actual del combobox 1 
          filtrouniversidades:[],
          mapa_scr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61238.56742563391!2d-71.57403113724489!3d-16.403967111938062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a487785b9b3%3A0xa3c4a612b9942036!2sArequipa!5e0!3m2!1ses-419!2spe!4v1594329622099!5m2!1ses-419!2spe",
          show:false,
        }
    }
    async componentDidMount(){
        //var elemento= document.getElementById("bus");
        //elemento.value="";
        const res=await axios.get('/api/unis');
        var json =res.data;
        var arr=[];
        var jsontam=Object.keys(json).length;
        for(var i=0;i<jsontam;i++){
            arr.push({"_id":json[i]["_id"],"value":json[i]["UniNam"],"src":json[i]["UniIfr"]});
        }
        console.log(arr);
        this.setState({
            // value_table:res.data,
            universidades:arr,
            filtrouniversidades:[],
        })
    }

actualizacombo=(e)=>{
    var valor=e.target.value;
    if(valor===""){
        this.setState({filtrouniversidades:[],show:false});
    }
    else{
        //console.log(json);
        var json=this.state.universidades;
        var arr=[];
            var jsontam=Object.keys(json).length;
            for(var i=0;i<jsontam;i++){
                var stri=json[i]["value"];
                if(stri.toLowerCase().includes(valor)||stri.toUpperCase().includes(valor))
                arr.push({"_id":json[i]["_id"],"value":json[i]["value"],"src":json[i]["src"]});
            }
            this.setState({
               filtrouniversidades:arr,
               show:true
            })
            if(arr.length===0)
                this.setState({show:false})
            console.log(arr);
        }
    }

    seleccionar(src,nom){
        console.log(src);
        var elemento= document.getElementById("bus");
        elemento.value=nom;
        this.setState({
            filtrouniversidades:[],
            mapa_scr:src,
            show:false
        })
        document.getElementById("sinmapa").style.display="none";
        document.getElementById("conmapa").style.display="block";
    }

    render(){
        return (

            <div className="container pl-0 pt-1">
                <div className="mt-3">
                    <div className="form-label-group">
                        <input id="bus" className="form-control mr-sm-2" onChange={this.actualizacombo}type="search" placeholder="Busca Tu universidad" aria-label="Search"/>
                        <label for="bus">Busca tu Universidad</label>
                    </div>

                    <div className="row">
                    <div className="col-12">
                    {this.state.show&&
                    <div className="col-md-12">
                        <ul className="nav nav-pills nav-stacked anyClass">
                            <li className="nav-item">
                                {this.state.filtrouniversidades.map(opcion=><div key={opcion._id} id="cb1" className="nav-link"  style={{cursor:"pointer"}} href="#" onClick={()=>this.seleccionar(opcion.src,opcion.value)} >{opcion.value}</div>)}
                            </li>
                        </ul>
                    </div>
                    }
                    </div>
                    </div>

                </div>
                <center>
                    <div id="sinmapa"  style={{ height:"450px",display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <span >Aqui va estar el mapa</span>
                    </div>
                </center>
                <div id="conmapa" style={{display:"none"}}>
                    <center>
                        <iframe src={this.state.mapa_scr} className="container-fluid" height="450px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe>
                    </center>                
                </div>
            </div>           
        ) 
    }    
}