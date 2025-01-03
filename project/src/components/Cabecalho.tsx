import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Stethoscope, Instagram, Linkedin } from 'lucide-react';
import MenuDropdown from './MenuDropdown';
import ModalCliente from './ModalCliente';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalClienteVisivel, setModalClienteVisivel] = useState(false);
  const [dropdownAtivo, setDropdownAtivo] = useState<string | null>(null);

  const alternarMenu = () => setMenuAberto(!menuAberto);

  const aoEntrarMouse = (menu: string) => {
    setDropdownAtivo(menu);
  };

  const aoSairMouse = () => {
    setTimeout(() => {
      setDropdownAtivo(null);
    }, 100);
  };
  
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">MedControl</span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <MenuDropdown 
              titulo="Contabilidade"
              ativo={dropdownAtivo === 'contabilidade'}
              aoEntrar={() => aoEntrarMouse('contabilidade')}
              aoSair={aoSairMouse}
              itens={[
                { caminho: '/contabil', texto: 'Contábil' },
                { caminho: '/tributario', texto: 'Tributário' },
                { caminho: '/folha', texto: 'Folha de Pagamento' },
                { caminho: '/patrimonial', texto: 'Patrimonial' },
                { caminho: '/empresas', texto: 'Abertura e Alterações' }
              ]}
            />

            <MenuDropdown 
              titulo="Controladoria"
              ativo={dropdownAtivo === 'controladoria'}
              aoEntrar={() => aoEntrarMouse('controladoria')}
              aoSair={aoSairMouse}
              itens={[
                { caminho: '/planejamento', texto: 'Planejamento Tributário' },
                { caminho: '/orcamento', texto: 'Controle Orçamentário' },
                { caminho: '/custos', texto: 'Controle de Custos' }
              ]}
            />

            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-blue-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-pink-600" />
              </a>
            </div>

            <Link to="/como-funciona" className="text-blue-600 hover:text-blue-700">
              Como Funciona
            </Link>

            <button
              onClick={() => setModalClienteVisivel(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Área do Cliente
            </button>
          </div>

          <button className="md:hidden" onClick={alternarMenu}>
            {menuAberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuAberto && (
          <div className="md:hidden mt-4 border-t border-gray-100">
            <Link to="/contabil" className="block px-4 py-2 hover:bg-gray-100">Contábil</Link>
            <Link to="/tributario" className="block px-4 py-2 hover:bg-gray-100">Tributário</Link>
            <Link to="/folha" className="block px-4 py-2 hover:bg-gray-100">Folha de Pagamento</Link>
            <Link to="/patrimonial" className="block px-4 py-2 hover:bg-gray-100">Patrimonial</Link>
            <Link to="/empresas" className="block px-4 py-2 hover:bg-gray-100">Abertura e Alterações</Link>
            <Link to="/planejamento" className="block px-4 py-2 hover:bg-gray-100">Planejamento Tributário</Link>
            <Link to="/orcamento" className="block px-4 py-2 hover:bg-gray-100">Controle Orçamentário</Link>
            <Link to="/custos" className="block px-4 py-2 hover:bg-gray-100">Controle de Custos</Link>
            <Link to="/como-funciona" className="block px-4 py-2 hover:bg-gray-100">Como Funciona</Link>
          </div>
        )}

        <ModalCliente 
          visivel={modalClienteVisivel} 
          aoFechar={() => setModalClienteVisivel(false)} 
        />
      </nav>
    </header>
  );
};

export default Cabecalho;