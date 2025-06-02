import styles from './PaginaPerfil.module.css';
import { Sidebar } from '../../components';
import imgPerfil from '../../assets/iconoPerfil.png'

function PaginaPerfil() {

    return (
        <>
            <div className={styles.contenedor}>
                <Sidebar></Sidebar>
                <div className={styles.contenedorInterior}>
                    <img className={styles.imgPerfil} src={imgPerfil} alt="Imagen de Perfil de Usuario" />
                    <h2>Bienvenido Nuevamente ______________</h2>
                </div>
            </div>
        </>
    )
}

export default PaginaPerfil