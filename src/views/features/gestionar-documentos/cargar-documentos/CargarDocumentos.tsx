import styles from './CargarDocumentos.module.css';
import { Sidebar } from '../../../components';

function PaginaCargarDocumentos() {
    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <div className={styles.mainContent}>
                <h1 className={styles.title}>Cargar Documentos</h1>
                <div className={styles.formWrapper}>
                </div>
            </div>
        </div>
    );
}

export default PaginaCargarDocumentos;