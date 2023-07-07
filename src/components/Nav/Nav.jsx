import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'; //EJ9-1
import style from './Nav.module.css';

const Nav = ({ onSearch, setAccess }) => { //EJ5-2 se le pasa como props a Nav

    const handleLogOut = () => {
        setAccess(false);
    }
    
    return (
        <nav className={style.container}>
            

        <div className={style}>
        <Link to='/about' className={style.navLink}>About</Link> {/*EJ9-2*/}
        <Link to='/home' className={style.navLink}>Home</Link> {/*EJ9-2*/}
        <Link to='/favorites' className={style.navLink}>Favorites</Link>
            </div>

        <button className={style.navLink}onClick={handleLogOut}>Log Out</button>
        
        <div className={style.divNav}>
        <SearchBar className={style.bar} onSearch={onSearch}/> {/*EJ5-2 => al pasarsela a <Nav/>, ahora se la pasa a SearchBar*/}
        </div>
        </nav>
    )
}

export default Nav;