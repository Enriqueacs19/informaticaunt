import styles from './PreMatricula.module.css';
import {Sidebar} from '../../components/';



function PaginaPreMatricula() {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        {/* Contenido principal */}
        <h1>PRE MATRICULA</h1>
        <p>Aquí va el contenido principal...</p>
      </div>
    </div>
  );
}

export default PaginaPreMatricula;
