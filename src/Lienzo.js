import React, { Component } from 'react'
import Platillos from './Platillos'
import Bebidas from './Bebidas'
import Pedidos from './Pedidos'


class Lienzo extends Component {
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h2>Tienda</h2>
                </div>
                <Bebidas/>
                <Pedidos/>
            </div>
        )
    }
}

export default Lienzo