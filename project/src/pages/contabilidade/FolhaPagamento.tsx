import React from 'react';
import { Users, Calendar, DollarSign, FileSpreadsheet } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FolhaPagamento = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Folha de Pagamento</h1>
          <p className="text-xl">Gestão completa da folha de pagamento para sua clínica</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={Users}
            title="Registro de Empregados"
            description="Gestão completa do cadastro e documentação dos colaboradores."
          />
          <ServiceCard
            icon={Calendar}
            title="Relatório de Férias"
            description="Controle e programação de férias dos funcionários."
          />
          <ServiceCard
            icon={DollarSign}
            title="Folha de Pagamento"
            description="Processamento mensal de salários e benefícios."
          />
          <ServiceCard
            icon={FileSpreadsheet}
            title="Guias de Impostos"
            description="Cálculo e emissão de guias de impostos sobre a folha."
          />
        </div>
      </div>
    </div>
  );
}

export default FolhaPagamento;