import React from 'react';
import { Globe, Database, Lock, Cpu } from 'lucide-react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="h-12 w-12 mb-4 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            ¿Qué es API Dominicana?
          </h2>
          <p className="text-lg text-gray-600">
            Una plataforma centralizada que facilita el acceso a datos abiertos 
            del gobierno dominicano mediante APIs estándar, seguras y documentadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<Database size={24} />}
            title="Datos Oficiales"
            description="Accede a datos reales y actualizados directamente de instituciones gubernamentales."
          />
          <Feature 
            icon={<Globe size={24} />}
            title="Estándares Abiertos"
            description="APIs RESTful con documentación completa y ejemplos de código."
          />
          <Feature 
            icon={<Lock size={24} />}
            title="Seguridad"
            description="Autenticación mediante tokens JWT y cifrado SSL para todas las conexiones."
          />
          <Feature 
            icon={<Cpu size={24} />}
            title="Escalabilidad"
            description="Diseñado para soportar desde proyectos pequeños hasta aplicaciones de alto tráfico."
          />
        </div>
      </div>
    </section>
  );
};

export default About;