import { useState } from 'react';
import styles from './MallaCurricular.module.css';
import CursoBox from './CursoBox';

type Curso = {
    id: string;
    nombre: string;
    ciclo: number;
    fila: number;
    prerequisitos: string[];
};

const cursos: Curso[] = [
    // Ciclo 1
    { id: 'DP', nombre: 'Desarrollo Personal', ciclo: 1, fila: 1, prerequisitos: [] },
    { id: 'LR', nombre: 'Lectura crítica y redacción de textos académicos', ciclo: 1, fila: 2, prerequisitos: [] },
    { id: 'FG', nombre: 'Física General', ciclo: 1, fila: 3, prerequisitos: [] },
    { id: 'AP', nombre: 'Algoritmos y Programación', ciclo: 1, fila: 4, prerequisitos: [] },
    { id: 'DPLO', nombre: 'Desarrollo del Pensamiento Lógico Matemático', ciclo: 1, fila: 5, prerequisitos: [] },
    { id: 'IAM', nombre: 'Introducción al Análisis Matemático', ciclo: 1, fila: 6, prerequisitos: [] },
    { id: 'TLT', nombre: 'Taller de liderazgo y trabajo en equipo', ciclo: 1, fila: 7, prerequisitos: [] },

    // Ciclo 2
    { id: 'EC', nombre: 'Ética, Convivencia Humana y Ciudadanía', ciclo: 2, fila: 1, prerequisitos: [] },
    { id: 'SCE', nombre: 'Sociedad, Cultura y Ecología', ciclo: 2, fila: 2, prerequisitos: [] },
    { id: 'CIPC', nombre: 'Cultura investigativa y pensamiento crítico', ciclo: 2, fila: 3, prerequisitos: [] },
    { id: 'ED', nombre: 'Estructura de Datos', ciclo: 2, fila: 4, prerequisitos: ['AP'] },
    { id: 'EG', nombre: 'Estadística General', ciclo: 2, fila: 5, prerequisitos: [] },
    { id: 'AM', nombre: 'Análisis Matemático', ciclo: 2, fila: 6, prerequisitos: ['IAM'] },
    { id: 'TIC', nombre: 'Taller de manejo de TIC', ciclo: 2, fila: 7, prerequisitos: [] },

    // Ciclo 3
    { id: 'GA', nombre: 'Geometría Analítica', ciclo: 3, fila: 1, prerequisitos: [] },
    { id: 'PLP', nombre: 'Paradigmas de Lenguajes de Programación', ciclo: 3, fila: 2, prerequisitos: ['ED'] },
    { id: 'EA', nombre: 'Estrategias Algorítmicas', ciclo: 3, fila: 3, prerequisitos: ['ED'] },
    { id: 'MD', nombre: 'Matemática Discreta', ciclo: 3, fila: 4, prerequisitos: [] },
    { id: 'FCC', nombre: 'Física para Ciencia de la Computación', ciclo: 3, fila: 5, prerequisitos: ['FG'] },
    { id: 'AN', nombre: 'Análisis Numérico', ciclo: 3, fila: 6, prerequisitos: ['AM'] },

    // Ciclo 4
    { id: 'CG', nombre: 'Computación Gráfica', ciclo: 4, fila: 1, prerequisitos: ['GA'] },
    { id: 'OA', nombre: 'Organización de Archivos', ciclo: 4, fila: 2, prerequisitos: ['ED'] },
    { id: 'AC', nombre: 'Algoritmos y Complejidad', ciclo: 4, fila: 3, prerequisitos: ['EA'] },
    { id: 'ISW1', nombre: 'Ingeniería de Software I', ciclo: 4, fila: 4, prerequisitos: [] },
    { id: 'LFA', nombre: 'Lenguajes Formales y Autómatas', ciclo: 4, fila: 5, prerequisitos: [] },
    { id: 'ECOM', nombre: 'Electrónica para Computación', ciclo: 4, fila: 6, prerequisitos: [] },
    { id: 'IE', nombre: 'Innovación y Emprendimiento', ciclo: 4, fila: 7, prerequisitos: [] },

    // Ciclo 5
    { id: 'BD1', nombre: 'Base de Datos I', ciclo: 5, fila: 1, prerequisitos: ['OA'] },
    { id: 'ISW2', nombre: 'Ingeniería de Software II', ciclo: 5, fila: 2, prerequisitos: ['ISW1'] },
    { id: 'IA1', nombre: 'Inteligencia Artificial I', ciclo: 5, fila: 3, prerequisitos: [] },
    { id: 'CMP', nombre: 'Compiladores', ciclo: 5, fila: 4, prerequisitos: ['LFA'] },
    { id: 'TDC', nombre: 'Técnicas Digitales para Computación', ciclo: 5, fila: 5, prerequisitos: ['ECOM'] },
    { id: 'MIC', nombre: 'Metodología de la Investigación Científica', ciclo: 5, fila: 6, prerequisitos: [] },

    // Ciclo 6
    { id: 'CGA', nombre: 'Computación Gráfica Avanzada', ciclo: 6, fila: 1, prerequisitos: ['CG'] },
    { id: 'BD2', nombre: 'Base de Datos II', ciclo: 6, fila: 2, prerequisitos: ['BD1'] },
    { id: 'ISW3', nombre: 'Ingeniería de Software III', ciclo: 6, fila: 3, prerequisitos: ['ISW2'] },
    { id: 'IA2', nombre: 'Inteligencia Artificial II', ciclo: 6, fila: 4, prerequisitos: ['IA1'] },
    { id: 'CD', nombre: 'Comunicación de Datos', ciclo: 6, fila: 5, prerequisitos: [] },
    { id: 'AOC', nombre: 'Arquitectura y Organización de Computadoras', ciclo: 6, fila: 6, prerequisitos: ['TDC'] },

    // Ciclo 7
    { id: 'BDA', nombre: 'Base de Datos Avanzada', ciclo: 7, fila: 1, prerequisitos: ['BD2'] },
    { id: 'DSW', nombre: 'Desarrollo de Software', ciclo: 7, fila: 2, prerequisitos: ['ISW3'] },
    { id: 'PVC', nombre: 'Percepción y Visión por Computadora', ciclo: 7, fila: 3, prerequisitos: ['IA2'] },
    { id: 'RC1', nombre: 'Redes de Computadoras I', ciclo: 7, fila: 4, prerequisitos: ['CD'] },
    { id: 'SO1', nombre: 'Sistemas Operativos I', ciclo: 7, fila: 5, prerequisitos: ['AOC'] },
    { id: 'GPI', nombre: 'Gestión de Proyectos Informáticos', ciclo: 7, fila: 6, prerequisitos: ['ISW3'] },

    // Ciclo 8
    { id: 'ROB', nombre: 'Robótica', ciclo: 8, fila: 1, prerequisitos: ['PVC'] },
    { id: 'RC2', nombre: 'Redes de Computadoras II', ciclo: 8, fila: 2, prerequisitos: ['RC1'] },
    { id: 'SO2', nombre: 'Sistemas Operativos II', ciclo: 8, fila: 3, prerequisitos: ['SO1'] },
    { id: 'PPP', nombre: 'Prácticas Pre-Profesionales', ciclo: 8, fila: 4, prerequisitos: ['SO2'] },

    // Ciclo 9
    { id: 'IHC', nombre: 'Interacción Humano Computador', ciclo: 9, fila: 1, prerequisitos: ['CGA'] },
    { id: 'TBD', nombre: 'Tópicos en Base de Datos', ciclo: 9, fila: 2, prerequisitos: ['BDA'] },
    { id: 'TISW', nombre: 'Tópicos en Ing de Software', ciclo: 9, fila: 3, prerequisitos: ['DSW'] },
    { id: 'ISA', nombre: 'Ing. de Software Avanzada', ciclo: 9, fila: 4, prerequisitos: ['DSW'] },
    { id: 'SI', nombre: 'Seguridad Informática', ciclo: 9, fila: 5, prerequisitos: ['RC2'] },

    // Ciclo 10
    { id: 'TI', nombre: 'Tópicos en Tecnologías Inmersivas', ciclo: 10, fila: 1, prerequisitos: ['IHC'] },
    { id: 'SI2', nombre: 'Sistemas de Información', ciclo: 10, fila: 2, prerequisitos: [] },
    { id: 'ETI', nombre: 'Ética para Profesionales en Informática', ciclo: 10, fila: 3, prerequisitos: [] },
    { id: 'PC', nombre: 'Proyecto de competencia', ciclo: 10, fila: 4, prerequisitos: [] },
    { id: 'PT', nombre: 'Proyecto de Tesis', ciclo: 10, fila: 5, prerequisitos: ['GPI'] },
    { id: 'TES', nombre: 'Tesis', ciclo: 10, fila: 6, prerequisitos: ['PT'] },
];

function MallaCurricular(): JSX.Element {
    const [cursosActivos, setCursosActivos] = useState<string[]>([]);

    function toggleCurso(id: string, prerequisitos: string[]): boolean {
        if (cursosActivos.includes(id)) return false;

        const cumplePrerequisitos = prerequisitos.every(pr => cursosActivos.includes(pr));

        if (cumplePrerequisitos) {
            setCursosActivos(prev => [...prev, id]);
            return true;
        }

        alert('Debes seleccionar los prerrequisitos primero.');
        return false;
    }

    <div className={styles.gridHeader}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(ciclo => (
            <div key={ciclo} className={styles.cicloHeader}>Ciclo {ciclo}</div>
        ))}
    </div>


    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>Malla Curricular</h1>
                <div className={styles.cuadroMalla}>
                    <div className={styles.mallaContainer}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(ciclo => (
                            <div key={ciclo} className={styles.cicloRow}>
                                <div className={styles.cicloLabel}>Ciclo {ciclo}</div>
                                <div className={styles.cursosRow}>
                                    {cursos
                                        .filter(curso => curso.ciclo === ciclo)
                                        .sort((a, b) => a.fila - b.fila)
                                        .map(curso => (
                                            <CursoBox
                                                key={curso.id}
                                                curso={curso}
                                                activo={cursosActivos.includes(curso.id)}
                                                onClick={() => toggleCurso(curso.id, curso.prerequisitos)}
                                            />
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MallaCurricular;
