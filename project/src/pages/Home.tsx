import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Transformando Números em Estratégia Médica
          </h1>
          <p className="text-xl text-center mb-8">
            Contabilidade especializada e controladoria estratégica para profissionais da saúde
          </p>
        </div>
      </section>

      {/* Services Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contabilidade Tradicional</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-gray-400" />
                  <span>Lançamentos contábeis básicos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-gray-400" />
                  <span>Geração de guias de impostos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-gray-400" />
                  <span>Folha de pagamento</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">Controladoria MedControl</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-blue-600" />
                  <span>Análise estratégica dos dados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-blue-600" />
                  <span>Planejamento tributário especializado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-blue-600" />
                  <span>Gestão de custos e precificação</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="text-blue-600" />
                  <span>Indicadores de performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefone</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
              >
                <span>Enviar Mensagem</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;