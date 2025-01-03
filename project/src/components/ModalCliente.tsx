import React from 'react';

interface ModalClienteProps {
  visivel: boolean;
  aoFechar: () => void;
}

const ModalCliente = ({ visivel, aoFechar }: ModalClienteProps) => {
  if (!visivel) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Área do Cliente</h2>
        <p className="mb-4">Você já é cliente?</p>
        <div className="flex space-x-4">
          <a
            href="https://onvio.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Sim, fazer login
          </a>
          <button
            onClick={aoFechar}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Não, saber mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCliente;