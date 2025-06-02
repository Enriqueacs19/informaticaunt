import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { IniciarSesion, PaginaInicio, PaginaPreMatricula, PaginaFormularioFut, PaginaCargarDocumentos } from './views/features/index.tsx';
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
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
