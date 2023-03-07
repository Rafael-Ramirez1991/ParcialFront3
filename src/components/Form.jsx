import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [jugador,setJugador]= useState({
        nombre:"",
        posicion:"",
        peso:"",
        equipoActual:""
    });

    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState (false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(jugador.nombre.length >3 && jugador.nombre.trim() && jugador.posicion.length > 5){
            setMostrar(true)
            setError(false)
        }else{
            setMostrar(false)
            setError(true)
        }

    }


  return (
<div>

    <form onSubmit={handleSubmit} className="formulario">
        <label >Nombre</label>
        <input type="text" value={jugador.nombre} onChange={(e) => setJugador({...jugador, nombre: e.target.value})}/>
        <label >Posicion</label>
        <input type="text" value={jugador.posicion} onChange={(e) => setJugador({...jugador, posicion: e.target.value})} />
        <label>Peso</label>
        <input type="text" value={jugador.peso} onChange={(e) => setJugador({...jugador, peso: e.target.value})}/>
        <label >Equipo Actual</label>
        <input type="text" value={jugador.equipoActual} onChange={(e) => setJugador({...jugador, equipoActual: e.target.value})}/>

        <button>Registrar</button>
        {error && 'El jugador no esta registrado o se encuentra sin equipo actualmente'}

    </form>


    {mostrar && <Card nombre={jugador.nombre} posicion={jugador.posicion} equipo={jugador.equipoActual}/>}

</div>
    
)
}

export default Form