import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contabil from './pages/contabilidade/Contabil';
import Tributario from './pages/contabilidade/Tributario';
import FolhaPagamento from './pages/contabilidade/FolhaPagamento';
import Patrimonial from './pages/contabilidade/Patrimonial';
import Empresas from './pages/contabilidade/Empresas';
import Planejamento from './pages/controladoria/Planejamento';
import Orcamento from './pages/controladoria/Orcamento';
import Custos from './pages/controladoria/Custos';
import ComoFunciona from './pages/ComoFunciona';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contabil" element={<Contabil />} />
            <Route path="/tributario" element={<Tributario />} />
            <Route path="/folha" element={<FolhaPagamento />} />
            <Route path="/patrimonial" element={<Patrimonial />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/planejamento" element={<Planejamento />} />
            <Route path="/orcamento" element={<Orcamento />} />
            <Route path="/custos" element={<Custos />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;