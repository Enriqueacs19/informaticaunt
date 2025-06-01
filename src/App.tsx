import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import {IniciarSesion, PaginaInicio} from './views/features/index.tsx';


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
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path='/' element={<PaginaInicio></PaginaInicio>}></Route>
      </Routes>
    </Router>
  )
}

export default App
