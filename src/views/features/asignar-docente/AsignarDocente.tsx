import styles from './AsignarDocente.module.css';
import { Sidebar } from '../../components/';
import { useState } from 'react';

function AsignarDocente() {
  const [semestre, setSemestre] = useState('');
  const [ciclo, setCiclo] = useState('');

  const cursos = [
    { codigo: 3819, creditos: 4, nombre: 'Interacción Humano-computador' },
    { codigo: 3820, creditos: 4, nombre: 'Ingeniería de Software Avanzado' },
    { codigo: 3821, creditos: 4, nombre: 'Proyecto de tesis' },
    { codigo: 3822, creditos: 4, nombre: 'Tópicos de Base de Datos' },
    { codigo: 3823, creditos: 4, nombre: 'Tópicos de Software' },
    { codigo: 3824, creditos: 4, nombre: 'Seguridad Informática' },
  ];

  const docentes = [
    "Carlos Enrique Castillo",
    "Edwin Raúl Mendoza"
  ];

  const isReady = semestre && ciclo;

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1>Asignar Docente a Curso</h1>
        
        <div className={styles.selectRow}>
          <select value={semestre} onChange={e => setSemestre(e.target.value)}>
            <option value="">Seleccione semestre</option>
            <option value="2025-I">2025 - I</option>
            <option value="2025-II">2025 - II</option>
          </select>
          <select value={ciclo} onChange={e => setCiclo(e.target.value)}>
            <option value="">Seleccione ciclo</option>
            <option value="IX">Ciclo - IX</option>
            <option value="X">Ciclo - X</option>
          </select>
        </div>

        {isReady && (
          <>
            <div className={styles.tableContainer}>
              <table className={styles.coursesTable}>
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Créditos</th>
                    <th>Nombre</th>
                    <th>Seleccionar docente</th>
                  </tr>
                </thead>
                <tbody>
                  {cursos.map(curso => (
                    <tr key={curso.codigo}>
                      <td>{curso.codigo}</td>
                      <td>{curso.creditos}</td>
                      <td>{curso.nombre}</td>
                      <td>
                        <select>
                          <option>Seleccionar docente</option>
                          {docentes.map(docente => (
                            <option key={docente} value={docente}>{docente}</option>
                          ))}
                          <option value="No asignar docente" style={{ color: 'red', fontWeight: 'bold' }}>No asignar docente</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className={styles.saveButton}>Guardar</button>
          </>
        )}
      </div>
    </div>
  );
}

export default AsignarDocente;
