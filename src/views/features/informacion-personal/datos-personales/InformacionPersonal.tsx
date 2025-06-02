import { Link } from 'react-router-dom';
import styles from './InformacionPersonal.module.css';
import { Sidebar } from '../../../components';
import perfilPlaceHolder from '../../../assets/perfilPlaceHolder.png'


function InformacionPersonal() {

  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <h2 className={styles.title}>Información Personal</h2>
            <Link to='/cambiar-contrasena'>
              <button className={styles.buttonTopRight} > Cambiar Contraseña</button>
            </Link>
          </div>
          <div className={styles.section}>
            <h3 className={styles.subtitle}>Foto de Perfil</h3>
            <div className={styles.profileContainer}>
              <img src={perfilPlaceHolder} alt="Perfil" className={styles.profileImage} />
              <div className={styles.instructions}>
                <p>Solamente permitido formatos JPEG, JPG y PNG.</p>
                <p>Máximo 10MB.</p>
                <div className={styles.imageButtons}>
                  <button className={styles.button}>Eliminar Imagen</button>
                  <button className={styles.button}>Cargar Imagen</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.subContainer}>
            <h3 className={styles.subtitle}>Datos Personales</h3>
            <Link to='/editar-datos'>
              <button className={styles.buttonTopRight} > Editar Información</button>
            </Link>
            </div>
            <div className={styles.form}>
              <label>Nombres
                <input type="text" disabled />
              </label>
              <label>Apellido Paterno
                <input type="text" disabled />
              </label>
              <label>Apellido Materno
                <input type="text" disabled />
              </label>
              <label>DNI
                <input type="text" disabled />
              </label>
              <label>Fecha de Nacimiento
                <input type="date" disabled />
              </label>
              <label>Número de Celular
                <input type="text" disabled />
              </label>
              <label>Código de Matrícula
                <input type="text" disabled />
              </label>
              <label>Correo Institucional
                <input type="email" disabled />
              </label>
              <label>Año de Ingreso
                <input type="number" disabled />
              </label>
              <div className={styles.selectRow}>
                <label>Sede
                  <select disabled>
                    <option>Seleccionar Sede</option>
                  </select>
                </label>
                <label>Currícula
                  <select disabled>
                    <option>Seleccionar Currícula</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformacionPersonal;
