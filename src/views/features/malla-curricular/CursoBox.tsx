import React from 'react';
import styles from './MallaCurricular.module.css';

type Props = {
    curso: {
        id: string;
        nombre: string;
    };
    activo: boolean;
    onClick: () => void;
};

const CursoBox: React.FC<Props> = ({ curso, activo, onClick }) => {
    return (
        <div
            className={`${styles.cursoBox} ${activo ? styles.activo : styles.inactivo}`}
            onClick={onClick}
        >
            {curso.nombre}
        </div>
    );
};

export default CursoBox;
