import { useState } from "react";
import validation from "../Validation/Validation.js"
import style from './Form.module.css'

const Form = ({ login }) => {

    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({ // aca piso el objeto
            ...userData, // copia del estado
            [event.target.name]: event.target.value
        })

        setErrors(validation({ // aca llamo a validation, q retorna un obj y necesito guardarlo en el estado errors, a validation le paso un obj q va a validar, q sera el obj donde estoy guardando toda la informacion q esta ingresando el usuario, por eso le paso la copia del estado(...userData) y si hay algun cambio (handleChange), le aviso q tiene q modificarse una de esas propiedades ([event.target.name]: event.target.value), pero en escencia lo q me retorna validation(), va a ser un obj q si encuentra algun error en la propiedad email: '', este objeto va a tener una propiedad email {email:} q va a tener un mensaje de error y este obj q retorna validation() se va a guardar en el estado errors y luego me va a permitir mostrar ese mensaje de error (en resumen validation(), retorna un objeto q si encuentra un erro, crea una propiedad con un mensaje y este objeto se guarda en errors) // a validation({...userData, [event.target.name]: event.target.value, le paso el objeto a validar)
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // para q no se recargue la pagina
        login(userData);
    }

    return(
        <div className={style.divForm}>

        <form className={style.form} onSubmit={handleSubmit} >

            <div className={style.inputContainer}> 

            <label className={style.label} htmlFor="email">Email: </label>
            
            <input className={style.input}type="text" name="email" value={userData.email} onChange={handleChange}/>

            {errors.email && <p className={style.errors}>{errors.email}</p>}
            
            </div>




            <div className={style.inputContainer}>
            <label className={style.label} htmlFor="password">Password: </label>
            <input className={style.input} type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p className={style.errors} >{errors.password}</p>}
            </div>


            <button className={style.button}>Login</button>
        </form>

        </div>
    )
}

export default Form;