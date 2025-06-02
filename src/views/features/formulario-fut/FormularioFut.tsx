import styles from './FormularioFut.module.css';
import { Sidebar } from '../../components';

function PaginaFormularioFut() {
    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <div className={styles.mainContent}>
                <h1 className={styles.title}>Formulario FUT</h1>
                <div className={styles.formWrapper}>
                    <form className={styles.formulario}>
                        <label>Dirigido a:</label>
                        <input type="text" />

                        <label>Nombre:</label>
                        <input type="text" defaultValue="Alem Sebastian Sánchez Chunga" />

                        <label>DNI:</label>
                        <input type="text" defaultValue="75720362" />

                        <label>E-mail:</label>
                        <input type="email" defaultValue="alem20x@gmail.com" />

                        <label>Nº Matrícula / Cod. Trabajador:</label>
                        <input type="text" defaultValue="1512700921" />

                        <label>Facultad / Oficina:</label>
                        <input type="text" defaultValue="Ciencias Físicas y Matemáticas" />

                        <label>Escuela / Departamento:</label>
                        <input type="text" defaultValue="Informática" />

                        <label>Fecha :</label>
                        <div className={styles.dateGroup}>
                            <input type="text" placeholder="Día" />
                            <input type="text" placeholder="Mes" />
                            <input type="text" placeholder="Año" />
                        </div>

                        <label>Dirección:</label>
                        <input type="text" />

                        <label>Ciclo / Año:</label>
                        <input type="text" />

                        <label>Asunto :</label>
                        <textarea rows={4}></textarea>

                        <label>Firma:</label>
                        <input type="file" />

                        <button type="submit">Generar FUT</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaginaFormularioFut;