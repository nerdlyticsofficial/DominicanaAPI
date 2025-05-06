import React, { useState } from 'react';
import { Mail, Bell } from 'lucide-react';
import Button from './Button';

interface FormData {
  email: string;
  organization: string;
  useCase: string;
}

const WaitlistSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    organization: '',
    useCase: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist form submitted:', formData);
    setFormData({ email: '', organization: '', useCase: '' });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Lista de Espera
            </h2>
            <p className="text-lg text-gray-600">
              Sé el primero en acceder a nuestras APIs cuando estén disponibles.
              Te notificaremos cuando tu institución de interés esté lista.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organización
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nombre de tu organización"
                  required
                />
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1">
                  ¿Cómo planeas utilizar nuestras APIs?
                </label>
                <textarea
                  id="useCase"
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Cuéntanos sobre tu caso de uso..."
                  required
                />
              </div>

              <Button type="submit" fullWidth>
                Unirme a la Lista de Espera
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                Al unirte, recibirás actualizaciones sobre el lanzamiento y nuevas APIs disponibles.
                Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;