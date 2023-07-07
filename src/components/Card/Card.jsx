import { Link } from "react-router-dom"; //EJ9-4-1
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import style from './Card.module.css'

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {
   
   const [ isFav, setIsFav ] = useState(false)
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } // recordar q las props q reciben son de las actions
      else{
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.divCard}>

         <button className={style.botFav} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
   
         <button className={style.buttonCard} onClick={() => {onClose(id)}}>❌ </button>

         <Link to={`/detail/${id}`}> {/*EJ9-4-2 */}
         <h2> {name} </h2>
         </Link>

         <div className={style.div}>
         <h2> {status} </h2>
         <h2> {species} </h2>
         <h2> {gender} </h2>
         <h2> {origin} </h2>
         </div>

         <img src={image} alt={name} /> 

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)