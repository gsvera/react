import React, {Component} from 'react'
import Card from './Card'
import axios from 'axios'
import withLoader from './HOC/withLoader'

const cursos = [
    {
        "id"    : 1,
        "titulo": "Reac",
        "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "precio": 40,
        "profesor": "Betito Q."
    },
    {
        "id"    : 2,
        "titulo": "Java",
        "image" : "https://drupal.ed.team/sites/default/files/2018-11/java-especialidad.jpg",
        "precio": 30,
        "profesor": "Alexis L."
    },
    {
        "id"    : 3,
        "titulo": "JS",
        "image" : "https://drupal.ed.team//sites/default/files/2018-06/especializacion-js.jpg",
        "precio": 35,
        "profesor": "Alvaro F."
    }
]


 class CourseGrid extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        axios.get('')
        .then(resp => this.setState({
            courses: resp.data
        }))
    }
    
    render() {
        const {courses} = this.state
         return (
            <div className= "ed-grid m-grid-4">
            {/* para hacer un loder */}
            {courses.length === 0 
            ? <h1 className="t3">Cargando...</h1>
            : cursos.map(c => (
                <Card 
                key = {c.id}
                id = {c.id}
                title = {c.titulo}
                image = {c.image}
                precio = {c.precio}
                profesor = {c.profesor}
                />          
            ))}
        </div>
         )
     }
 }
    
 

 export default withLoader("courses",CourseGrid)