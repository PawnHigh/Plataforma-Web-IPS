import React, { Component } from 'react';
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index_table: this.props.columns,
            value_table: this.props.data,
            pagination: this.props.paginacion,
            numelementos: 0,
            index: 1,
            sizeperpage: 10,
            numpages: 0,
            next: true,
            doublenext: true,
            back: false,
            doubleback: false,
            indexselect: [],
            datashow: [],
            inicio: 0,
            fin: 0
        }
    }
    async componentDidMount() {
        await this.numberpages();
        await this.updateflechas(1);
        await this.updateshow();

    }
    async numberpages() {
        var sizeperpage = this.state.sizeperpage;
        var jsontam = Object.keys(this.state.value_table).length;
        var modul = jsontam % sizeperpage;
        console.log(modul);
        var numpages = modul == 0 ? parseInt(jsontam / sizeperpage) : parseInt(jsontam / sizeperpage) + 1;
        console.log(numpages);
        this.setState({ numpages: numpages, numelementos: jsontam });
    }
    async updateshow() {
        var json = this.state.value_table;
        var arr = [];
        var jsontam = Object.keys(json).length;
        var index = this.state.index - 1;
        var sizeperpage = this.state.sizeperpage;
        var inicio = index * sizeperpage + 1;
        var fin = inicio;
        for (var i = index * sizeperpage; i < index * sizeperpage + sizeperpage; i++) {
            if (json[i] != undefined) {
                arr.push(json[i]);
                fin++;
            }

        }
        this.setState({
            inicio: inicio,
            fin: fin - 1,
            datashow: arr
        });
    }
    actualizadatos = (e) => {
        e.preventDefault();
        var valor = e.target.id;
        var index;
        var jsontam = Object.keys(this.state.value_table).length;
        if (valor === "<<") {
            index = 1;
        } else if (valor === "<") {
            index = this.state.index - 1;
        } else if (valor === ">") {
            index = this.state.index + 1;
        } else if (valor === ">>") {
            index = this.state.numpages;
        } else {
            index = valor;
        }
        console.log("feclass");

        this.setState({
            index: parseInt(index)
        }, () => {
            this.updateflechas(index);
            this.updateshow();
        });
    }

    async updateflechas(index) {
        var i = parseInt(index);
        console.log(i);
        var numpages = this.state.numpages;

        var arr = [];
        if (i + 2 < numpages) {
            arr = [i, i + 1, i + 2];
        } else if (i + 2 == numpages) {
            arr = [i, i + 1, i + 2];
        } else {
            if (numpages > 2) {
                arr = [numpages - 2, numpages - 1, numpages];
            } else {
                for (var j = 1; j <= numpages; j++) {
                    arr.push(j);
                }
            }
        }
        this.setState({ indexselect: arr })
        if (numpages < 4) {
            this.setState({
                back: false,
                doubleback: false,
                next: false,
                doublenext: false
            });
        } else {
            if (i == 1) {
                this.setState({
                    back: false,
                    doubleback: false
                });
            } else {
                this.setState({
                    back: true,
                    doubleback: true
                });
            }
            if (i + 2 >= numpages) {
                this.setState({
                    next: false,
                    doublenext: false
                });
            } else {
                this.setState({
                    next: true,
                    doublenext: true
                });
            }
        }
    }
    cambiasizepage(id) {
        const valor = document.getElementById(id).value;
        this.setState({ sizeperpage: parseInt(valor), index: 1 }, async () => {
            await this.numberpages();
            await this.updateflechas(1);
            await this.updateshow();
        });


    }
    toGetColor(c) {
        return this.state.index == c ? 'nav-link text-light bg-dark rounded' : 'nav-link text-dark bg-light rounded';
    }
    render() {
        return (
            <div className="containerTable mb-3">
                <div className="tabledata row">
                    <div className=" d-flex col-12 col-sm-7 py-auto">
                        <div className="m-4 p-0">
                            Mostrar  {" " + this.state.inicio + " "} a {" " + this.state.fin + " filas"} de {" " + this.state.numelementos + " elementos"}
                        </div>
                        <select id="size" className="col-3 col-md-auto bg-dark text-light" onChange={() => this.cambiasizepage("size")}>
                            <option value="10" >10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div className="d-flex col-12 col-sm-5 m-0 p-0">
                        <nav className="d-flex navbar navbar-expand bg-light text-light m-auto">
                            <div className="m-auto p-0">
                                <ul className="navbar-nav d-flex">
                                    {this.state.doubleback &&
                                        <li className="nav-item p-1">
                                            <a id="<<" href='#' onClick={this.actualizadatos} className="bg-dark text-light nav-link">{"<<"}</a>
                                        </li>
                                    }
                                    {this.state.back &&
                                        <li className=" nav-item p-1">
                                            <a id="<" href='#' onClick={this.actualizadatos} className="bg-dark text-light nav-link">{"<"}</a>
                                        </li>
                                    }
                                    {this.state.indexselect.map(fila =>
                                        <li className="nav-item p-1">
                                            <a id={fila} href='#' onClick={this.actualizadatos} className={this.toGetColor(fila)}>
                                                {fila}
                                            </a>
                                        </li>)
                                    }
                                    {this.state.next &&
                                        <li className=" nav-item p-1">
                                            <a id=">" href='#' onClick={this.actualizadatos} className="bg-dark text-light nav-link">{">"}</a>
                                        </li>
                                    }
                                    {this.state.doublenext &&
                                        <li className=" nav-item p-1">
                                            <a id=">>" href='#' onClick={this.actualizadatos} className="bg-dark text-light nav-link">{">>"}</a>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>

                </div>


                <div className="table-responsive">
                    <table className="table table">
                        <tr>
                            {this.state.index_table.map(indice => <th key={indice.id} >{indice.value}</th>)}
                        </tr>
                        {this.state.datashow.map(entrada => <tr>
                            {this.state.index_table.map(indice =>
                                <td>{entrada[indice.rep]}</td>
                            )}
                        </tr>)}
                    </table>
                </div>

            </div>
        )
    }
}
