import styles from './BarraNavegacion.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/vite.svg'
import userIcon from '../../assets/login.png';
import { useAuth } from '../../context/AuthContext';

function BarraNavegacion() {
    
    const { logueado } = useAuth();

    return(
        <>
            <nav className={styles.barraNavegacion}>
                <div className={styles.logoNavegacion}>
                    <Link to='/'>
                        <img src={logo} alt="Logo de Informatica"/>
                    </Link>
                </div>
                <button className={styles.botonNavegacion}>Inicio</button>
                <button className={styles.botonNavegacion}>Noticias</button>
                <button className={styles.botonNavegacion}>Convenios</button>
                <button className={styles.botonNavegacion}>Docentes</button>
                <button className={styles.botonNavegacion}>Malla Curricular</button>
                <div className={styles.botonIniciarSesion} >
                    {!logueado ? (
                        <Link to='/IniciarSesion'>
                            <button className={styles.botonIniciarSesionLog}>
                                Iniciar Sesión
                                <img className={styles.iconoSesion} src={userIcon} alt="Icono Usuario" />
                            </button>
                        </Link>
                    ) : (
                        <Link to='/IniciarSesion'>
                            <button>
                                <img className={styles.iconoSesion} src={userIcon} alt="Icono Usuario" />
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    )
}

export default BarraNavegacion