import React from 'react';
import { Building2, Calculator, FileBarChart } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Patrimonial = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Gestão Patrimonial</h1>
          <p className="text-xl">Controle eficiente do patrimônio da sua clínica</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Building2}
            title="Classificação Patrimonial"
            description="Identificação e classificação adequada de todos os bens e equipamentos."
          />
          <ServiceCard
            icon={Calculator}
            title="Cálculo de Depreciação"
            description="Cálculo mensal da depreciação dos ativos conforme legislação."
          />
          <ServiceCard
            icon={FileBarChart}
            title="Relatórios Patrimoniais"
            description="Relatórios detalhados sobre a situação patrimonial da empresa."
          />
        </div>
      </div>
    </div>
  );
}

export default Patrimonial;