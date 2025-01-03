import React from 'react';
import { Calculator, FileCheck, ClipboardList } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Tributario = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Planejamento Tributário</h1>
          <p className="text-xl">Otimização fiscal especializada para a área médica</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Calculator}
            title="Apuração dos Impostos"
            description="Cálculo preciso de tributos com foco na redução da carga tributária dentro da legalidade."
          />
          <ServiceCard
            icon={FileCheck}
            title="Geração de Guias"
            description="Emissão e controle de todas as guias de pagamento de impostos e contribuições."
          />
          <ServiceCard
            icon={ClipboardList}
            title="Obrigações Acessórias"
            description="Gestão completa das declarações e obrigações fiscais exigidas pela legislação."
          />
        </div>
      </div>
    </div>
  );
}

export default Tributario;