import React from 'react';
import Button from '../ui/Button';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '49.000',
      description: 'Untuk individu atau tim kecil yang baru memulai',
      features: [
        'Hingga 10 anggota tim',
        '3 proyek aktif',
        'Integrasi Kalender',
        'Notifikasi tugas',
        'Aplikasi mobile (iOS & Android)',
      ],
      buttonText: 'Mulai Gratis',
      buttonVariant: 'secondary',
      popular: false,
    },
    {
      name: 'Pro',
      price: '99.000',
      description: 'Untuk tim yang berkembang dengan kebutuhan kolaborasi',
      features: [
        'Hingga 50 anggota tim',
        'Proyek tak terbatas',
        'Integrasi dengan 20+ aplikasi',
        'Laporan analitik dasar',
        'Kontrol akses berbasis peran',
        'Prioritas dukungan pelanggan',
        'Pengingat otomatis',
      ],
      buttonText: 'Coba 14 Hari Gratis',
      buttonVariant: 'primary',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '249.000',
      description: 'Untuk organisasi besar dengan kebutuhan lanjutan',
      features: [
        'Anggota tim tak terbatas',
        'Proyek tak terbatas',
        'Integrasi dengan 50+ aplikasi',
        'Laporan analitik lanjutan',
        'API kustom',
        'Enkripsi end-to-end',
        'Dukungan 24/7',
        'Onboarding khusus',
        'SLA 99.9% uptime',
      ],
      buttonText: 'Hubungi Sales',
      buttonVariant: 'secondary',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Harga yang Sesuai untuk Setiap Kebutuhan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang paling sesuai dengan ukuran tim dan kebutuhan proyek Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 relative ${
                plan.popular ? 'border-2 border-indigo-500 z-10' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-indigo-500 py-2 text-white text-center text-sm font-medium flex items-center justify-center">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  Paling Populer
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Rp {plan.price}</span>
                  <span className="text-gray-600 ml-1">/bulan</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button
                  primary={plan.buttonVariant === 'primary'}
                  secondary={plan.buttonVariant === 'secondary'}
                  fullWidth
                >
                  {plan.buttonText}
                </Button>
              </div>
              <div className="bg-gray-50 p-8 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Fitur yang didapatkan:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;