import React from 'react';
import { Link } from 'react-router-dom';

interface ItemMenu {
  caminho: string;
  texto: string;
}

interface MenuDropdownProps {
  titulo: string;
  ativo: boolean;
  aoEntrar: () => void;
  aoSair: () => void;
  itens: ItemMenu[];
}

const MenuDropdown = ({ titulo, ativo, aoEntrar, aoSair, itens }: MenuDropdownProps) => {
  return (
    <div 
      className="relative"
      onMouseEnter={aoEntrar}
      onMouseLeave={aoSair}
    >
      <span className="cursor-pointer py-2">{titulo}</span>
      {ativo && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg">
          {itens.map((item, index) => (
            <Link 
              key={item.caminho}
              to={item.caminho} 
              className={`block px-4 py-2 hover:bg-gray-100 ${
                index !== itens.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {item.texto}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;