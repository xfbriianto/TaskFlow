import React from 'react';
import { Users, CheckCircle, Clock, Award } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      value: '10,000+',
      label: 'Pengguna Aktif',
      suffix: '+',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
      value: '500+',
      label: 'Perusahaan',
      suffix: '+',
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      value: '1,000,000',
      label: 'Tugas Selesai',
      suffix: '+',
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      value: '99.9',
      label: 'Uptime',
      suffix: '%',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-indigo-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Angka yang Berbicara
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            TaskFlow telah membantu ribuan tim di seluruh dunia untuk meningkatkan produktivitas mereka.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-indigo-800 rounded-lg p-8 text-center hover:bg-indigo-900 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-2">
                {stat.value}
                <span className="text-indigo-300">{stat.suffix}</span>
              </div>
              <p className="text-indigo-200 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;