import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from './Notfound';
import "./App.css"

const PageLayout = lazy(() => import('./PagesLayout'));
const Home = lazy(() => import('./Componentes/Home/Home'));
const Sobre = lazy(() => import('./Componentes/Sobre/Sobre'));
const Equipe = lazy(() => import('./Componentes/Sobre/Equipe'));
const Contatos = lazy(() => import('./Componentes/Contatos/Contatos'));

const App = () => {
  
  return (
    <BrowserRouter>
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '20px' }}>
           Carregando...
          </div>
        }>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contatos' element={<Contatos />} />
          <Route path='/equipe/:id/:cargo/:idade/:nome' element={<Equipe />} />
        </Route>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;