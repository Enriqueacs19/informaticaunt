import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { IniciarSesion, PaginaInicio, PaginaPreMatricula, PaginaFormularioFut, PaginaCargarDocumentos, PaginaEliminarDocumentos, AsignarDocente, MallaCurricular, PaginaRegistrarse, PaginaPerfil } from './views/features/index.tsx';
import { BarraNavegacion } from './views/components/index.tsx';
import { AuthProvider } from './views/context/AuthContext';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop></ScrollToTop>
        <BarraNavegacion></BarraNavegacion>
        <Routes>
          <Route path='/' element={<PaginaInicio></PaginaInicio>}></Route>
          <Route path='/iniciar-sesion' element={<IniciarSesion></IniciarSesion>}></Route>
          <Route path='/PreMatricula' element={<PaginaPreMatricula></PaginaPreMatricula>}></Route>
          <Route path='/FormularioFut' element={<PaginaFormularioFut></PaginaFormularioFut>}></Route>
          <Route path='/cargar-documentos' element={<PaginaCargarDocumentos></PaginaCargarDocumentos>}></Route>
          <Route path='/asignar-docente' element={<AsignarDocente></AsignarDocente>}></Route>
          <Route path='/eliminar-documentos' element={<PaginaEliminarDocumentos></PaginaEliminarDocumentos>}></Route>
          <Route path='/malla-curricular' element={<MallaCurricular></MallaCurricular>}></Route>
          <Route path='/registrarse' element={<PaginaRegistrarse></PaginaRegistrarse>}></Route>
          <Route path='/perfil' element={<PaginaPerfil></PaginaPerfil>}></Route>
          <Route path='/registrarse' element={<PaginaRegistrarse></PaginaRegistrarse>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
