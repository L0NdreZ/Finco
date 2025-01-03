import React from 'react';

interface CampoFormularioProps {
  rotulo: string;
  tipo: string;
  valor: string;
  aoMudar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nome?: string;
}

const CampoFormulario = ({ rotulo, tipo, valor, aoMudar, nome }: CampoFormularioProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{rotulo}</label>
      <input
        type={tipo}
        name={nome}
        value={valor}
        onChange={aoMudar}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default CampoFormulario;