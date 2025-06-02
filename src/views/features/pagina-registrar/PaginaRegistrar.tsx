import { useState } from 'react';
import styles from './PaginaRegistrar.module.css';
import logoGoogle from '../../assets/iconoGoogle.png';
import ocultarContraseña from '../../assets/ocultarContraseña.png';
import mostrarContraseña from '../../assets/mostrarContraseña.png';

function PaginaRegistrarse() {
    const [mostrar, setMostrar] = useState(false);

    const toggleMostrarContraseña = () => {
        setMostrar(!mostrar);
    };

    return (
        <section className={styles.contenedor}>
            <div className={styles.tituloIntro}>
                <h1>Registrarse</h1>
                <p>¿Ya posees una cuenta? <a href="/iniciar-sesion">Iniciar Sesión</a></p>
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

            <form>
                <div>
                    <p>Correo electrónico</p>
                    <input type="email" placeholder="Ingrese su correo electrónico institucional" />
                </div>

                <div>
                    <p>Nombres</p>
                    <input type="text" placeholder="Ingrese sus nombres" />
                </div>

                <div>
                    <p>Apellidos</p>
                    <input type="text" placeholder="Ingrese sus apellidos" />
                </div>

                <div>
                    <p>Fecha de nacimiento</p>
                    <div className={styles.parteInputIcono}>
                        <input type="date" />
                    </div>
                </div>

                <div>
                    <p>Contraseña</p>
                    <div className={styles.parteInputIcono}>
                        <input
                        type={mostrar ? 'text' : 'password'}
                        placeholder="Ingrese su contraseña"
                        />
                        <img
                        src={mostrar ? mostrarContraseña : ocultarContraseña}
                        className={styles.iconoInput}
                        alt="Mostrar/Ocultar contraseña"
                        onClick={toggleMostrarContraseña}
                        />
                    </div>
                </div>

                <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <label>Acepto las Políticas De Privacidad y los Términos y Condiciones</label>
                </div>

                <button type="submit">Ingresar</button>
            </form>
        </section>
    );
}

export default PaginaRegistrarse;
