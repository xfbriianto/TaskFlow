import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <p className="text-lg text-gray-600">
            Kami adalah tim yang berdedikasi untuk membantu organisasi mencapai potensi terbaik mereka
            melalui solusi manajemen tugas yang inovatif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visi */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Visi</h3>
            <p className="text-gray-600">
              Menjadi platform manajemen tugas terdepan yang membantu organisasi mencapai efisiensi maksimal.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Misi</h3>
            <p className="text-gray-600">
              Menyediakan solusi yang inovatif dan mudah digunakan untuk meningkatkan produktivitas tim.
            </p>
          </div>

          {/* Nilai */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Nilai</h3>
            <p className="text-gray-600">
              Inovasi, Keandalan, dan Komitmen untuk memberikan layanan terbaik kepada pelanggan kami.
            </p>
          </div>
        </div>

        {/* Tim */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Tim Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', position: 'CEO & Founder', image: 'https://via.placeholder.com/150' },
              { name: 'Jane Smith', position: 'CTO', image: 'https://via.placeholder.com/150' },
              { name: 'Mike Johnson', position: 'Head of Product', image: 'https://via.placeholder.com/150' },
              { name: 'Sarah Williams', position: 'Head of Design', image: 'https://via.placeholder.com/150' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 