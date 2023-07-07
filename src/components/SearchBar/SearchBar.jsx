import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState(''); //EJ6-1 estado local con string vacio

   const handleChange = (event) => { //EJ6-2
      setId(event.target.value) //EJ6-3 establece el id, con el valor q se escriba en el input
      
   }
   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/> {/*EJ6-3 el value del input tiene q ser id*/}
         <button className={style.agregar}onClick={() => {onSearch(id); setId('')}}>Agregar</button> {/*EJ6-4 hay q pasarsela como callback, asi cuando hace click se ejecuta la cb y esta ejecuta la funcion*/}
      </div> // y no se ejecuta onSearch (no se puede ejecutar una funcion cuando se lea el codigo, por eso se pone como cb)
   );
}

// const [id, setId] = useState(')
// value={} => atributo deinput
// ; setId('') => cambia el id a string vacio, tiene q ejecutarse despues de q se ejecute onSearch