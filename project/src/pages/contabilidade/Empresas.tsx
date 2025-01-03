import React from 'react';
import { FileText, FileEdit, FileX } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Empresas = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Abertura e Alterações de Empresas</h1>
          <p className="text-xl">Suporte completo para todas as etapas da sua empresa</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={FileText}
            title="Abertura de Empresas"
            description="Assessoria completa para abertura de clínicas e consultórios médicos."
          />
          <ServiceCard
            icon={FileEdit}
            title="Alterações Contratuais"
            description="Suporte em modificações societárias e atualizações cadastrais."
          />
          <ServiceCard
            icon={FileX}
            title="Encerramento"
            description="Processo completo de baixa e encerramento de atividades quando necessário."
          />
        </div>
      </div>
    </div>
  );
}

export default Empresas;