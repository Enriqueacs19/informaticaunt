import {Sidebar} from '../../../components';
import styles from '../editar-datos/EditarDatos.module.css';
import { Link } from 'react-router-dom';

function EditarDatos() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.title}>Editar Datos</h2>

          <div className={styles.section}>
            <h3 className={styles.subtitle}>Datos Personales</h3>
            <div className={styles.form}>
              <label>Nombres
                <input type="text" defaultValue="José Alfredo" />
              </label>
              <label>Apellido Paterno
                <input type="text" defaultValue="Ramírez" />
              </label>
              <label>Apellido Materno
                <input type="text" defaultValue="Vega" />
              </label>
              <label>DNI
                <input type="text" defaultValue="12345678" />
              </label>
              <label>Fecha de Nacimiento
                <input type="date" defaultValue="2000-01-01" />
              </label>
              <label>Número de Celular
                <input type="text" defaultValue="987654321" />
              </label>
              <label>Código de Matrícula
                <input type="text" defaultValue="2020123456" />
              </label>
              <label>Correo Institucional
                <input type="email" value="correo@univ.edu" disabled />
              </label>
              <label>Año de Ingreso
                <input type="number" defaultValue="2020" />
              </label>
              <div className={styles.selectRow}>
                <label>Sede
                  <select defaultValue="default">
                    <option value="default" disabled>Seleccionar Sede</option>
                    <option value="trujillo">Trujillo</option>
                    <option value="lima">Lima</option>
                  </select>
                </label>
                <label>Currícula
                  <select defaultValue="default">
                    <option value="default" disabled>Seleccionar Currícula</option>
                    <option value="2018">2018</option>
                    <option value="2021">2021</option>
                  </select>
                </label>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarDatos;
