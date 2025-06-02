import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { IniciarSesion, PaginaInicio, PaginaPreMatricula, PaginaFormularioFut, PaginaCargarDocumentos, PaginaEliminarDocumentos } from './views/features/index.tsx';
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
          <Route path='/IniciarSesion' element={<IniciarSesion></IniciarSesion>}></Route>
          <Route path='/PreMatricula' element={<PaginaPreMatricula></PaginaPreMatricula>}></Route>
          <Route path='/FormularioFut' element={<PaginaFormularioFut></PaginaFormularioFut>}></Route>
          <Route path='/cargar-documentos' element={<PaginaCargarDocumentos></PaginaCargarDocumentos>}></Route>
          <Route path='/eliminar-documentos' element={<PaginaEliminarDocumentos></PaginaEliminarDocumentos>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
