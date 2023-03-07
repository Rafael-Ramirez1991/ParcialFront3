import React from 'react'

const Card = ({nombre, posicion, equipo}) => {
  return (
    <div className='mensaje'>

        <h2>El jugador: {nombre} </h2>
        <h2>Juega para el equipo: {equipo}</h2>
        <h2>Y su mejor momento lo vivio jugando de: {posicion}</h2>


    </div>
  )
}

export default Card