import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import {IniciarSesion, PaginaInicio} from './views/features/index.tsx';
import { BarraNavegacion } from './views/components/index.tsx';
import { AuthProvider } from './views/context/AuthContext';
import PaginaPreMatricula from './views/features/pre-matricula/PreMatricula.tsx';
import PaginaFormularioFut from './views/features/formulario-fut/FormularioFut.tsx';


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
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
