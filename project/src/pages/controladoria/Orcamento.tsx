import React from 'react';
import { LineChart, BarChart2, TrendingUp } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Orcamento = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Controle Orçamentário</h1>
          <p className="text-xl">Gestão financeira especializada para clínicas e consultórios</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={LineChart}
            title="Projeções Financeiras"
            description="Elaboração de projeções e cenários financeiros para tomada de decisão."
          />
          <ServiceCard
            icon={BarChart2}
            title="Controle de Gastos"
            description="Monitoramento e otimização de despesas operacionais."
          />
          <ServiceCard
            icon={TrendingUp}
            title="Análise de Performance"
            description="Acompanhamento de indicadores e metas financeiras."
          />
        </div>
      </div>
    </div>
  );
}

export default Orcamento;