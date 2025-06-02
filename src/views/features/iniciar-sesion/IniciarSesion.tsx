import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './IniciarSesion.module.css';
import logoGoogle from '../../assets/iconoGoogle.png';
import ocultarContraseña from '../../assets/ocultarContraseña.png';
import mostrarContraseña from '../../assets/mostrarContraseña.png';

function IniciarSesion() {
    const [mostrar, setMostrar] = useState(false);
    const { login } = useAuth();               // <-- accedemos al login del contexto
    const navigate = useNavigate();            // <-- para redirigir al home

    const toggleMostrarContraseña = () => {
        setMostrar(!mostrar);
    };

    const handleLogin = () => {
        login();                // Simula que el usuario está autenticado
        navigate('/');          // Redirige al inicio
    };

    return (
        <section className={styles.contenedor}>
            <div>
                <h1>Iniciar Sesión</h1>
                <p>¿No posees una cuenta? <a href="/registrarse">Registrate</a></p>
                <button className={styles.botonGoogle}>
                    <img src={logoGoogle} alt="Logo de Google" className={styles.logoGoogle} />
                    Google
                </button>
            </div>

            <div className={styles.divisor}>
                <hr />
                <p>O con correo y contraseña</p>
                <hr />
            </div>

            <div>
                <div>
                    <p>Correo electrónico</p>
                    <input type="text" placeholder='Ingresar Correo Institucional' />
                </div>
                <div>
                    <p>Contraseña</p>
                    <div className={styles.parteInputContraseña}>
                        <input
                            type={mostrar ? 'text' : 'password'}
                            placeholder='Ingresar Contraseña'
                        />
                        <img
                            className={styles.iconoContraseña}
                            src={mostrar ? mostrarContraseña : ocultarContraseña}
                            alt="Toggle contraseña"
                            onClick={toggleMostrarContraseña}
                        />
                    </div>
                </div>
                <button onClick={handleLogin}>Ingresar</button>
            </div>
        </section>
    );
}

export default IniciarSesion;
