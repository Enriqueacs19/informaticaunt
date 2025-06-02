import styles from './PreMatricula.module.css';
import {Sidebar} from '../../components/';
import iconFiltro from '../../assets/iconFiltro.png'; 



function PaginaPreMatricula() {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.Container}>
        <h1>Pre-Matrícula</h1>
        <div className ={styles.SubTitle}> Cursos Disponibles
            <img src={iconFiltro} alt="iconFiltro" className={styles.icons}/>
        </div>
      </div>
    </div>
  );
}

export default PaginaPreMatricula;
