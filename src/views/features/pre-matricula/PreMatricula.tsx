import styles from './PreMatricula.module.css';
import {Sidebar} from '../../components/';
import iconFiltro from '../../assets/iconFiltro.png'; 



function PaginaPreMatricula() {

    const handleSelect = () => {
        //navigate('/ConfirmacionCerrarSesion'); 
    };
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.container}>
        <h1>Pre-Matrícula</h1>
        <div className ={styles.subTitle}> Cursos Disponibles
            <img src={iconFiltro} alt="iconFiltro" className={styles.icons}/>
        </div>
        <div className={styles.cursosDisponibles}>
            <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Docente</th>
              <th>Ciclo</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                {/*FALTA AGREGAR LÓGICA PARA OBTENER LOS DATOS */}
              <td colSpan={4} className={styles.placeholderCell}>Cargando cursos disponibles...</td>
            </tr>
          </tbody>
        </table>
            <button 
                type="button" 
                className={styles.botonSelect}
                onClick={handleSelect}
            >
                Seleccionar
        </button> 
        </div>
        {/*CURSOS SELECCIONADO */}
        <div className ={styles.subTitle}> Cursos Seleccionados
            
        </div>
        <div className={styles.cursosSeleccionados}>
            <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Docente</th>
              <th>Ciclo</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                {/*FALTA AGREGAR LÓGICA PARA OBTENER LOS DATOS */}
              <td colSpan={4} className={styles.placeholderCell}>Cargando cursos disponibles...</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className={styles.final}> 
            <h2>TOTAL CRÉDITOS: </h2>
            {/*AÑADIR CANTIDAD DE CRÉDITOS EN FUNCIÓN DE LO QUE SE SELECCIONA */}
            <button 
                type="button" 
                className={styles.botonConfirmar}
                onClick={handleSelect}
            >
                Confirmar Pre-Matrícula
        </button> 
        </div>         
      </div>
    </div>
  );
}

export default PaginaPreMatricula;
