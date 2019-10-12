import React from 'react'


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


const Course = ({match}) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <div className = "ed-grid m-gid-3">
            {
                cursoActual ? (
                <>
                <h1 className="m-cols-3">{cursoActual.titulo}</h1>
                <img className="m-cols-1" src = {cursoActual.image} alt = {cursoActual.titulo}/>
                <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
                </>
                ) :
                
        <h1>El curso no existe</h1>
                
            }           
        </div>
        )


}
export default Course