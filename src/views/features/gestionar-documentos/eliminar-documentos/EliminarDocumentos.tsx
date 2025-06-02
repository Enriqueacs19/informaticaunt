import styles from './EliminarDocumentos.module.css';
import { Sidebar } from '../../../components';
import { useState } from 'react';

function PaginaEliminarDocumentos() {
    const [vista, setVista] = useState("eliminar");

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <div className={styles.mainContent}>
                <div className={styles.tabSelector}>
                    <span
                        className={vista === "cargar" ? styles.activeTab : styles.inactiveTab}
                        onClick={() => window.location.href = "/cargar-documentos"}
                    >
                        Cargar Documentos
                    </span>
                    <span
                        className={vista === "eliminar" ? styles.activeTab : styles.inactiveTab}
                    >
                        Eliminar Documentos
                    </span>
                </div>

                <div className={styles.formWrapper}>
                    <form className={styles.formulario}>
                        <label>Buscar documento</label>
                        <input type="text" placeholder="Ingrese el nombre del documento" />

                        <label>Filtrar</label>
                        <select>
                            <option value="">Seleccione</option>
                            <option value="noticias">Noticias</option>
                            <option value="convenios">Convenios</option>
                            <option value="silabos">Sílabos</option>
                        </select>
                    </form>

                    <div className={styles.documentTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Fecha</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Documento 1</td>
                                    <td>Convenios</td>
                                    <td>2025-06-01</td>
                                    <td><button>Eliminar</button></td>
                                </tr>
                                <tr>
                                    <td>Documento 2</td>
                                    <td>Noticias</td>
                                    <td>2025-05-20</td>
                                    <td><button>Eliminar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaginaEliminarDocumentos;