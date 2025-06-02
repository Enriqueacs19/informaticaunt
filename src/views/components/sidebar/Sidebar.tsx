import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css'; 
import iconInfo from '../../assets/iconPersonalInfo.png';
import logo from '../../assets/logo.png';
import iconPreMa from '../../assets/iconPreMatricula.png';
import iconGestionDocs from '../../assets/iconGestionDocs.png';
import iconCursosDocente from '../../assets/iconCursosDocente.png';
import iconTramitesFut from '../../assets/iconTramitesFut.png';
import { useUser } from '../../context/userContext';
import iconInfoDocente from '../../assets/iconDocenteInfo.png';
import iconInfoAdmin from '../../assets/iconAdminInfo.png';

const Sidebar = () => {
    const navigate = useNavigate();
    const { userType } = useUser(); 

    const handleCerrarSesion = () => {
        navigate('/ConfirmacionCerrarSesion'); 
    };

    return (
        <div className={styles.sidebar}>
            <img src={logo} alt="Logo" className={styles.logoSidebar} />
            <h2>NOMBRE USUARIO</h2>
            <nav>
                <ul>
                    <li onClick={() => navigate('/informacion-personal')} className={styles.item}>
                        {(userType === 'estudiante') && (
                            <img src={iconInfo} alt="iconPersonalInfo" className={styles.icons} />
                        )}
                        {(userType === 'admin') && (
                            <img src={iconInfoAdmin} alt="iconPersonalInfoAdmin" className={styles.icons} />
                        )}
                        {(userType === 'docente') && (
                            <img src={iconInfoDocente} alt="iconPersonalInfoDocente" className={styles.icons} />
                        )}
                        <span>Información Personal</span>
                    </li>
                    {(userType === 'estudiante' || userType === 'admin') && (
                        <li onClick={() => navigate('/PreMatricula')} className={styles.item}>
                            <img src={iconPreMa} alt="iconPreMatricula" className={styles.icons} />
                            <span>Pre-Matrícula</span>
                        </li>
                    )}
                    {(userType === 'estudiante' || userType === 'docente' || userType === 'admin') && (
                        <li onClick={() => navigate('/tramites-fut')} className={styles.item}>
                            <img src={iconTramitesFut} alt="iconTramitesFut" className={styles.icons} />
                            <span>Trámites FUT</span>
                        </li>
                    )}
                    {userType === 'admin' && (
                        <>
                        <li onClick={() => navigate('/gestionar-documentos')} className={styles.item}>
                            <img src={iconGestionDocs} alt="iconGestionDocs" className={styles.icons} />
                            <span>Gestionar Documentos</span>
                        </li>
                        <li onClick={() => navigate('/asignar-curso-docente')} className={styles.item}>
                            <img src={iconCursosDocente} alt="iconCursoDocente" className={styles.icons} />
                            <span>Asignar Curso Docente</span>
                        </li>
                        </>
                    )}
                </ul>
            </nav>
            <button 
                type="button" 
                className={styles.botonCerrarSesion}
                onClick={handleCerrarSesion}
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Sidebar;
