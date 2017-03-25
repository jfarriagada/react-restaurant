import React, { Component } from 'react'
import './css/Platillos.css'
import logo from './logo.svg'
import tienda_controller from './TiendaController'
import Ordenar from './Ordenar'


class Bebidas extends Component {
    render(){
        let bebidas_div = []

        const llenar_array_bebidas = tienda_controller.bebidas.forEach(
            (value, index) => (
                bebidas_div.push(
                    <div className="list-group-item" key={index}>
                        <div className="panel-body">
                            <img role="presentation" src={logo} className="ImagenPlatillo"/>
                            <h2 className="TitlePlatillo">{value.nombre}</h2>
                            <div className="DescripcionPlatillo">
                                {value.descripcion}
                            </div>
                            <Ordenar
                                precio={value.precio}
                                indice={index}
                                hacerPedido={(indide_d, evento_d) => {
                                    tienda_controller.bebidasEnLaOrden(indide_d, evento_d)
                                } }/>
                        </div>
                    </div>
                )
            )
        )


        return(
            <div className="container col-md-6">
                <div>
                    <div className="panel panel-primary">
                        <div className="list-group Platillo-Menu">
                            {bebidas_div}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bebidas