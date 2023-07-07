import style from './About.module.css'
import image from './ah.jpg'

const About = () => { // EJ2
    return(
        <section className={style.about}>
            <div className={style.main}>
            <img src={image} alt='Image' />
            
            <div className={style.text}>
            <h1>About Us</h1>
            <h2>Rodrigo Orellana</h2>
            <p>Insertar algo...</p>
            </div>

            </div>
        </section>
    )
}

export default About; 
