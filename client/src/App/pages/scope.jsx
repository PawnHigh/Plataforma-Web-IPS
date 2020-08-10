import React,{Component} from 'react';
import Bar from './chart/bar';
import Pie from './chart/pie';
import Doughnut from './chart/doughnut';
import Line from './chart/line';


class Scope extends Component{
    
        state={
            selectedOption:'bar'
        }
        handleOnchange=(e)=>{
            this.setState({
                selectedOption:e.target.id
            })
        }
    
    render(){
        const {selectedOption}=this.state;
        const{ posing:{pos,ing,agnos,colorA,title}}=this.props;
        
        return(
            <div className="container est">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto px-0">
                        <div className="card">
                            <div className="header">

                            </div>
                            <div className="card-body p-0">
                                {selectedOption==='bar'?
                                <Bar data={pos} datados={ing} labels ={agnos} backgroundColor={colorA} title={title}/>
                                :selectedOption==='line'?                  
                                <Line data={pos} datados={ing} labels ={agnos} backgroundColor={colorA} title={title}/>
                                :selectedOption==='doughnut'?
                                <Doughnut data={pos} datados={ing} labels ={agnos} backgroundColor={colorA} title={title}/>
                                :                           
                                <Pie data={pos} datados={ing} labels ={agnos} backgroundColor={colorA} title={title}/>
                                }
                            </div>
                            < div className="card-footer">
                                <form action='' className='form-inline justify-content-center align-items-center'>
                                   {/*
                                    <div className='form-group'>
                                        <label htmlFor='id_pie'>
                                            <input 
                                                id='id_pie'
                                                type='radio'
                                                value='pie'
                                                checked={selectedOption==='pie'}
                                                onChange={this.handleOnchange}
                                                className='form-control'
                                            />
                                            Pie
                                        </label>
                                    </div>
                                    */}
                                    <div className='form-group p-2 text-center'>
                                    <i 
                                                id='line' 
                                                aria-hidden="true"
                                                className={selectedOption==='line'?'fa fa-line-chart btn btn-primary text-light p-1 border':'fa fa-line-chart btn btn-light p-1 border'}
                                                onClick={this.handleOnchange}    
                                            ></i>
                                    </div>
                                    {/*
                                    <div className='form-group'>
                                        <label htmlFor='id_doughnut'>
                                            <input 
                                                id='id_doughnut'
                                                type='radio'
                                                value='doughnut'
                                                checked={selectedOption==='doughnut'}
                                                onChange={this.handleOnchange}
                                                className='form-control'
                                            />
                                            Doughnut
                                        </label>
                                    </div>
                                    */ }        
                                    <div className='form-group p-2 text-center'>
                                        
                                            <i 
                                                id='bar' 
                                                aria-hidden="true"
                                                className={selectedOption==='bar'?'fa fa-bar-chart btn btn-primary text-light p-1 border':'fa fa-bar-chart btn btn-light p-1 border'}
                                                onClick={this.handleOnchange}    
                                            ></i>
                    
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Scope;