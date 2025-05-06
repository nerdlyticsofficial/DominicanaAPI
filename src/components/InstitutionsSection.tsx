import React from 'react';
import { Building2, Database, FileText, Users } from 'lucide-react';

interface Institution {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  endpoints: number;
  tag: string;
}

const institutions: Institution[] = [
  {
    id: 1,
    name: "DGII",
    description: "Datos tributarios, registros de contribuyentes y estadísticas fiscales",
    icon: <Building2 size={32} />,
    endpoints: 12,
    tag: "Finanzas"
  },
  {
    id: 2,
    name: "JCE",
    description: "Información sobre cédulas, actas de nacimiento y electoral",
    icon: <FileText size={32} />,
    endpoints: 8,
    tag: "Identidad"
  },
  {
    id: 3,
    name: "Ministerio de Salud",
    description: "Estadísticas de salud, centros médicos y programas sanitarios",
    icon: <Users size={32} />,
    endpoints: 15,
    tag: "Salud"
  },
  {
    id: 4,
    name: "ONE",
    description: "Datos demográficos, económicos y sociales del país",
    icon: <Database size={32} />,
    endpoints: 20,
    tag: "Estadísticas"
  }
];

const InstitutionsSection: React.FC = () => {
  return (
    <section id="instituciones" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Instituciones Disponibles
          </h2>
          <p className="text-lg text-gray-600">
            Conecta con datos de las principales instituciones gubernamentales 
            a través de nuestras APIs estandarizadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {institutions.map((institution) => (
            <div 
              key={institution.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    {institution.icon}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                    {institution.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{institution.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{institution.description}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {institution.endpoints} endpoints
                  </span>
                  <a 
                    href={`#${institution.name.toLowerCase()}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Ver documentación →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encuentras la institución que necesitas?
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Solicitar una nueva integración
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;