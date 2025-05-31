import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    { name: 'Company A', logo: 'https://via.placeholder.com/150x60?text=CompanyA' },
    { name: 'Company B', logo: 'https://via.placeholder.com/150x60?text=CompanyB' },
    { name: 'University C', logo: 'https://via.placeholder.com/150x60?text=UniversityC' },
    { name: 'Organization D', logo: 'https://via.placeholder.com/150x60?text=OrganizationD' },
    { name: 'Enterprise E', logo: 'https://via.placeholder.com/150x60?text=EnterpriseE' },
    { name: 'Corporation F', logo: 'https://via.placeholder.com/150x60?text=CorporationF' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dipercaya oleh Perusahaan Terkemuka</h2>
          <p className="text-gray-600">
            Bergabunglah dengan ribuan organisasi yang meningkatkan produktivitas dengan TaskFlow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;