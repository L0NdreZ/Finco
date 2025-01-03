import React from 'react';
import { FileText, Calculator, PieChart } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Contabil = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Serviços Contábeis</h1>
          <p className="text-xl">Soluções contábeis especializadas para profissionais da saúde</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={FileText}
            title="Produção de Relatórios"
            description="Relatórios detalhados e personalizados para análise financeira, incluindo balancetes, DRE e fluxo de caixa."
          />
          <ServiceCard
            icon={Calculator}
            title="Lançamentos"
            description="Registro preciso de todas as operações financeiras, garantindo conformidade e organização."
          />
          <ServiceCard
            icon={PieChart}
            title="Apurações"
            description="Análise e apuração de resultados mensais, com foco em indicadores relevantes para área médica."
          />
        </div>
      </div>
    </div>
  );
}

export default Contabil;