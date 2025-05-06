import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-1 rounded-full bg-blue-50 text-blue-600">
              República Dominicana
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Datos públicos al alcance de tu código
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Conecta tu aplicación con APIs oficiales del gobierno dominicano 
            y transforma los datos en soluciones innovadoras para el país.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Explora las APIs
            </Button>
            <Button size="lg" variant="secondary">
              Ver Documentación
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="text-sm text-gray-800 bg-gray-50 px-4 py-2 rounded-md font-mono">
                <span className="text-blue-600">GET</span> /api/instituciones
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="text-sm text-gray-800 bg-gray-50 px-4 py-2 rounded-md font-mono overflow-x-auto">
                {`{ "status": "success", "data": [...] }`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;