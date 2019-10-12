import React, {Component} from 'react'

class Formulario extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarFecha () {
        this.setState({
            fecha: new Date()
        })
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1 id="elemento">Formulario {this.props.name}</h1>
                <h4>La fecha es: {Math.ceil(this.state.fecha/1000)} </h4>
                <form>
                <div className="ed-grid m-grid-2">
            
                <div className="form__item">
                    <label>Nombre completo</label>
                    <input id="nombre" onChange={this.cambiarNombre} type="text"/>
                </div>
                <div className="form__item">
                    <label>Correo Electronico</label>
                    <input id="correo" onChange={this.cambiarCorreo} type="email"/>                    
                </div>      
                            
                </div>
                </form>
            <div>
                <h2>{`Hola ${this.state.nombre}`}</h2>
                <span>{`Tu correo es: ${this.state.correo}`}</span>
            </div>
            </div>
        )
    }
//     componentDidMount() {
//         let elemento = document.getElementById("elemento")

//         this.intervaloFecha = setInterval(() => {
//             this.cambiarFecha()
//             console.log(new Date())
//         },1000)
//     }
//     componentDidUpdate(prevProps, prevState) {
    
//     }
//     componentWillUnMount(){
//         clearInterval(this.intervaloFecha)
//     }
// }
}
export default Formulario