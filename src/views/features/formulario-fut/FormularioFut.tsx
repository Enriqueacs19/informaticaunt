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
                        <input type="text" value="Alem Sebastian Sánchez Chunga" readOnly />

                        <label>DNI:</label>
                        <input type="text" value="75720362" readOnly />

                        <label>E-mail:</label>
                        <input type="email" value="alem20x@gmail.com" readOnly />

                        <label>Nº Matrícula / Cod. Trabajador:</label>
                        <input type="text" value="1512700921" readOnly />

                        <label>Facultad / Oficina:</label>
                        <input type="text" value="Ciencias Físicas y Matemáticas" readOnly />

                        <label>Escuela / Departamento:</label>
                        <input type="text" value="Informática" readOnly />

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