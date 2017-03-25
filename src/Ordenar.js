import React, { Component } from 'react'


class Ordenar extends Component {
    actualizarCantidad(event){
        this.props.hacerPedido(this.props.indice, event.target.value)
    }

    render(){
        return(
            <div className="container col-md-6">
                <br/>
                <label> Cantidad : </label>
                <input onChange={this.actualizarCantidad.bind(this)} type="number" min="0" max="20"/>
                <label className="EspacioPlatillo">Precio : {this.props.precio}</label>
            </div>
        )
    }
}

export default Ordenar