import styles from './CambiarContraseña.module.css';
import {Sidebar} from '../../../components';
import { Link } from 'react-router-dom';

function CambiarContrasena() {

  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.title}>Cambiar Contraseña</h2>

          <form className={styles.passwordForm}>
            <div className={styles.passwordField}>
              <label htmlFor="actual">Contraseña actual</label>
              <input type="password" id="actual" />
            </div>
            <div className={styles.passwordField}>
              <label htmlFor="nueva">Nueva contraseña</label>
              <input type="password" id="nueva" />
            </div>
            <div className={styles.passwordField}>
              <label htmlFor="confirmar">Confirmar nueva contraseña</label>
              <input type="password" id="confirmar" />
            </div>

            <div className={styles.buttonGroup}>
                <Link to='/informacion-personal'>
                    <button className={`${styles.button} ${styles.cancelButton}`}>
                    Cancelar
                    </button>
                </Link>
                <button className={styles.button}>
                    Guardar
                </button>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CambiarContrasena;
