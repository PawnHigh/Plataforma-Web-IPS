import React,{Component} from 'react'
import {Link} from 'react-router-dom';
export default class NavLat extends Component{
    constructor(props) {
        //para tomar las funcionalidades del componente
        super(props);
        this.state = {
          name:'React',
          op:this.props.color,
          requirementKey:Math.random(),
          show:this.props.mostrar,
          texto:"Licenciamiento de Universidades"
        }
        this.cambiacolor=this.cambiacolor.bind(this);
      }
      
      toGetColor(c){
    
            //aquí tambien modifica las clases de bootstrap
            return this.state.op===c?'list-group-item list-group-item-action active':'list-group-item list-group-item-action';
      }
      cambiacolor(c,text){
        this.setState({
            op:c,
            texto:text,
            requirementKey:Math.random()
        });
        
      }
      render() {
     
        const {op,show}=this.state;   
        return (
            
              <div className='col-3'>
              {show && (  
              <div className='fixed-left'>
                <Link className={this.toGetColor(1)} to="/licenciamiento">Licenciamiento de Universidades</Link>
                <Link className={this.toGetColor(2)} to="/programasacademicos">Programas Académicos</Link>
                <Link className={this.toGetColor(3)} >Programa Nacional de Becas</Link>
                <Link className={this.toGetColor(4)} to="/ubicacionuniversidades">Ubicación de Universidades</Link>
                <Link className={this.toGetColor(5)} to={"/cantidadingresantes"}>Cantidad de Ingresantes</Link>
              </div>
            )}
            </div>
            

          )
      }

}