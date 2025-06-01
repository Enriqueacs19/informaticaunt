import styles from './paginaInicio.module.css';
import { Sidebar } from '../../components';


function PaginaInicio() {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        {/* Contenido principal */}
        <h1>Bienvenido a la página de inicio</h1>
        <p>Aquí va el contenido principal...</p>
      </div>
    </div>
  );
}

export default PaginaInicio;
