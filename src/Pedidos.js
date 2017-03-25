import React, { Component } from 'react'
import tienda_controller from './TiendaController'
import { observer } from 'mobx-react'

// observer, osea que va a detectar cambios de otro componente
// y va hacer render

class Pedidos extends Component {
    render(){
        let PlatillosPedidos = []
        let PlatillosBebidas = []

        const llevar_PlatillosPedidos = tienda_controller.platillos.forEach(
            (value, index) => {
                if(value.cantidad != 0) {
                    PlatillosPedidos.push(
                        <div className="list-group-item" key={index}>
                            <div className="panel-body">
                                <h4>{value.nombre}</h4><br/>
                                <div className="APrecioCantidad">
                                    <span>Cantidad : {value.cantidad}</span>
                                    <span className="PrecioPlatillo">
                                    Precio : {value.cantidad * value.precio}
                                </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        )

        const llevar_PlatillosBebidas = tienda_controller.bebidas.forEach(
            (value, index) => {
                if(value.cantidad != 0) {
                    PlatillosBebidas.push(
                        <div className="list-group-item" key={index}>
                            <div className="panel-body">
                                <h4>{value.nombre}</h4><br/>
                                <div className="APrecioCantidad">
                                    <span>Cantidad : {value.cantidad}</span>
                                    <span className="PrecioPlatillo">
                                    Precio : {value.cantidad * value.precio}
                                </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        )

        return(
            <div className="container col-md-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Pedidos-Menu">
                            {PlatillosPedidos}
                            {PlatillosBebidas}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Pedidos)