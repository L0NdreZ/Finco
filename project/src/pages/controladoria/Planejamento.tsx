import React from 'react';
import { TrendingUp, PieChart, Target } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Planejamento = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Planejamento Tributário Especializado</h1>
          <p className="text-xl">Estratégias fiscais otimizadas para a área médica</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={TrendingUp}
            title="Análise Fiscal"
            description="Avaliação detalhada da atual situação tributária da empresa."
          />
          <ServiceCard
            icon={PieChart}
            title="Otimização Tributária"
            description="Identificação de oportunidades de economia fiscal dentro da lei."
          />
          <ServiceCard
            icon={Target}
            title="Planejamento Estratégico"
            description="Desenvolvimento de estratégias para redução da carga tributária."
          />
        </div>
      </div>
    </div>
  );
}

export default Planejamento;