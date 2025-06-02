import styles from './PaginaInicio.module.css';


function PaginaInicio() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        {/* Contenido principal */}
        <h1>Bienvenido a la página de inicio</h1>
        <p>Aquí va el contenido principal...</p>
      </div>
    </div>
  );
}

export default PaginaInicio;
