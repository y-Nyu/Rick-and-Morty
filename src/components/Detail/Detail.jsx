import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

const Detail = () => {
    
    const { id } = useParams()
        
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.container}>

        <div className={style.backgroundImage}>

        <div className={style.characterCard}>
            <h3 className={style.characterName}>{character?.name}</h3>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img className={style.characterImage}src={character?.image} alt={character?.name}/>
        </div>

        </div>
        </div>
    )
}

export default Detail;

// Renderizado Condicional

// Primera forma para englobar a todos
// { character && <div> 
//  <h2> {character.name} </h2>
//  <h2> {character.status} </h2>
// </div>} }

// Segunda Forma
// { character ? <h2>{character.name}</h2> :null }
// ? => if(true)
// : => else

// Tercera Forma // mas corto
// <h2>{character?.name}</h2>
// character? => si hay algo en character muestra el .name

// Cuarta forma
// <h2>{character && character.name}</h2>
// && si hay algo en character, muestra character.name