import './App.css';
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

import { useState, useEffect } from 'react';
import axios from 'axios'; //EJ7-1
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'; //EJ9-3


const email = 'nyu@gmail.com'
const password = 'zxc000'

function App() {
   const location = useLocation(); // solo me interesa pathname:
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]); //EJ3-2 importar useState / EJ3-3 characters => estado local - q inicia como un array useState([ ])
   const [access, setAccess] = useState(false)

   const login = (userData) => { 
      if(userData.email === email && userData.password === password){
      setAccess(true); // si cambia el estado, se ejecuta useEffect
         navigate('./home');
      }
   }

   useEffect(() => {
      !access && navigate('/') // si access no cambia queda en false, pero negandolo queda true y funciona navigate('/')
   }, [access]) // cuando cambie access, ejecuta lo de adentro
   
   const onSearch = (id) => { //EJ7-2
      axios(`https://rickandmortyapi.com/api/character/${id}`) // hace una peticion a la api con el id q escriba el usuario
      .then(({ data }) => { // cuando tiene respuesta, lo recibe .then (metodo) / axios retorna un objeto, se hace destructuring de {data} 
         if (data.name) { // si encuentra un personaje modifica el estado setCharacters
            const isCharacterExist = characters.find(
               (character) => character.id === data.id
             );
             if (isCharacterExist) {
               window.alert('Ese personaje ya esta agregado');
             }else {
            setCharacters((oldChars) => [...oldChars, data])}; // oldChars => recibe toda la informacion q tenia mi estado /concat al estado, data
            
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => { //EJ8-1 y recibe por parametro un id
      const charactersFiltered = characters.filter(character => character.id !== Number(id)) //EJ8-2 el id viene como string
      setCharacters(charactersFiltered) //EJ8-3 setear el array nuevo en el estado local characters 
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/> //EJ2-2 / EJ5-1 se lo pasa como un propiedad(atributo) // setAccess => Estado q se lo pasamos por prop a Nav
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/> {/*EJ11-5-2hay q pasarle la funcion como prop */}
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/> {/*EJ6-5 */}
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
      </div>
      
   );
}

export default App;

// <Nav/> => renderizar < ... />
// [...characters, example] => forma de concatenar estados, con ... hace una copia de characters agregandole example
// onSearch={onSearch} => atributo

// EJ7-1 npm i axios
/* EJ7-2 
const onSearch = () => { //EJ4-1
      setCharacters([...characters, example]) //EJ4-2 setCharacters para modificar el estado
   } // setCharacters devuelve el array characters y se lo concatenamos con ... 

*/
/*
const example = { //EJ4-2
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};
*/

