import styles from './CargarDocumentos.module.css';
import { Sidebar } from '../../../components';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // <- Añade esto si usas React Router


function PaginaCargarDocumentos() {
    const [archivo, setArchivo] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const manejarCarga = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setArchivo(file);
        }
    };

    const abrirSelector = () => {
        inputRef.current?.click();
    };

    const quitarArchivo = () => {
        setArchivo(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <div className={styles.mainContent}>
                <div className={styles.tabSelector}>
                    <span className={styles.activeTab}>Cargar Documentos</span>
                    <span className={styles.inactiveTab} onClick={() => navigate("/eliminar-documentos")} >Eliminar Documentos</span>
                </div>

                <div className={styles.formWrapper}>
                    <div className={styles.previewBox}>
                        {archivo ? <p>{archivo.name}</p> : <div className={styles.placeholder}></div>}
                    </div>

                    <div className={styles.buttonGroup}>
                        <button type="button" onClick={abrirSelector}>Cargar</button>
                        <button type="button" onClick={quitarArchivo}>Quitar</button>
                        <input
                            type="file"
                            ref={inputRef}
                            onChange={manejarCarga}
                            style={{ display: 'none' }}
                        />
                    </div>

                    <form className={styles.formulario}>
                        <label>Nombre :</label>
                        <input type="text" />

                        <label>Fecha :</label>
                        <input type="date" />

                        <label>Tipo :</label>
                        <select>
                            <option value="">Seleccione</option>
                            <option value="noticias">Noticias</option>
                            <option value="convenios">Convenios</option>
                            <option value="silabos">Sílabos</option>
                        </select>

                        <label>Descripción</label>
                        <textarea rows={5} />

                        <button type="submit" className={styles.registrarBtn}>Registrar Archivo</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaginaCargarDocumentos;
