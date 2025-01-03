import React from 'react';
import { DollarSign, TrendingDown, BarChart } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Custos = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Controle de Custos e Precificação</h1>
          <p className="text-xl">Otimização de custos e definição estratégica de preços</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={DollarSign}
            title="Análise de Custos"
            description="Identificação e classificação de custos fixos e variáveis."
          />
          <ServiceCard
            icon={TrendingDown}
            title="Otimização"
            description="Estratégias para redução de custos e aumento de eficiência."
          />
          <ServiceCard
            icon={BarChart}
            title="Precificação"
            description="Definição de preços baseada em dados e análise de mercado."
          />
        </div>
      </div>
    </div>
  );
}

export default Custos;