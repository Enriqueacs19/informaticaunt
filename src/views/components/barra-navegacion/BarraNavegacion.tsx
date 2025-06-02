import styles from './BarraNavegacion.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import userIcon from '../../assets/login.png';
import { useAuth } from '../../context/AuthContext';

function BarraNavegacion() {
    
    const { logueado } = useAuth();

    return(
        <>
            <nav className={styles.barraNavegacion}>

                <div className={styles.logoNavegacion}>
                    <Link to='/'>
                        <img className={styles.imgLogo} src={logo} alt="Logo de Informatica"/>
                    </Link>
                </div>

                <Link to='/' style={{textDecoration: 'none'}}>
                    <p className={styles.botonNavegacion}>Inicio</p>
                </Link>

                <Link to='/noticias' style={{textDecoration: 'none'}}>
                    <p className={styles.botonNavegacion}>Noticias</p>
                </Link>

                <Link to='/convenios' style={{textDecoration: 'none'}}>
                    <p className={styles.botonNavegacion}>Convenios</p>
                </Link>

                <Link to='/docentes' style={{textDecoration: 'none'}}>
                    <p className={styles.botonNavegacion}>Docentes</p>
                </Link>

                <Link to='/malla-curricular' style={{textDecoration: 'none'}}>
                    <p className={styles.botonNavegacion}>Malla Curricular</p>
                </Link>

                <div className={styles.botonIniciarSesion}>
                    {!logueado ? (
                        <Link to='/iniciar-sesion'>
                            <button className={styles.botonIniciarSesionLog}>
                                <p>Iniciar Sesión</p>
                                <img className={styles.iconoSesion} src={userIcon} alt="Icono Usuario" />
                            </button>
                        </Link>
                    ) : (
                        <Link to='/iniciar-sesion'>
                            <button className={styles.botonIniciarSesionLogin}>
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