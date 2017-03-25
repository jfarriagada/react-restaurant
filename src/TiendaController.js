import { extendObservable } from 'mobx'

class TiendaController {
    constructor(){
        extendObservable(this,
            {
                platillos: [
                    {
                        nombre: "nombre1",
                        descripcion: "rico",
                        precio: 100,
                        cantidad: 0
                    },
                    {
                        nombre: "nombre2",
                        descripcion: "rico",
                        precio: 100,
                        cantidad: 0
                    },
                    {
                        nombre: "nombre3",
                        descripcion: "rico",
                        precio: 100,
                        cantidad: 0
                    }
                ],
                bebidas: [
                    {
                        nombre: "bebida1",
                        descripcion: "rico",
                        precio: 160,
                        cantidad: 0
                    },
                    {
                        nombre: "bebida2",
                        descripcion: "rico",
                        precio: 70,
                        cantidad: 0
                    },
                    {
                        nombre: "bebida3",
                        descripcion: "rico",
                        precio: 190,
                        cantidad: 0
                    }
                ]
            })
    }

    // actializar el precio dependiendo de la cantidad de platillos
    ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
        this.platillos.forEach((value, index) => {
                if (indicePlatillo === index) {
                    this.platillos[index].cantidad = cantidadPlatillo
                }
            }
        )
    }

    // actializar el precio dependiendo de la cantidad de platillos
    bebidasEnLaOrden(indiceBedida, cantidadBedida){
        this.bebidas.forEach((value, index) => {
                if (indiceBedida === index) {
                    this.bebidas[index].cantidad = cantidadBedida
                }
            }
        )
    }
}

var tienda_controller = new TiendaController
export default tienda_controller