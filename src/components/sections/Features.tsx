import React from 'react';
import { Calendar, Bell, BarChart3, Shuffle, Globe, Shield, Clock, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="h-10 w-10 text-indigo-600" />,
      title: 'Integrasi Kalender',
      description:
        'Sinkronisasi dengan Google Calendar, Outlook, dan Apple Calendar untuk manajemen jadwal yang lebih baik.',
    },
    {
      icon: <Bell className="h-10 w-10 text-indigo-600" />,
      title: 'Notifikasi Real-Time',
      description:
        'Dapatkan update instan tentang perubahan tugas, komentar baru, dan deadline yang mendekat.',
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-indigo-600" />,
      title: 'Laporan Analitik',
      description:
        'Visualisasi performa tim dan individu dengan grafik yang mudah dipahami dan laporan yang dapat disesuaikan.',
    },
    {
      icon: <Shuffle className="h-10 w-10 text-indigo-600" />,
      title: 'Integrasi Aplikasi',
      description:
        'Terhubung dengan Slack, Microsoft Teams, dan 50+ aplikasi lainnya untuk alur kerja yang mulus.',
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-600" />,
      title: 'Akses dari Mana Saja',
      description:
        'Bekerja dari desktop, mobile, atau tablet dengan sinkronisasi penuh antar semua perangkat.',
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      title: 'Keamanan Enterprise',
      description:
        'Enkripsi end-to-end, kontrol akses berbasis peran, dan kepatuhan terhadap standar industri.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 mb-4">
            <Sparkles className="h-5 w-5 mr-2" />
            <span className="font-medium">Fitur Unggulan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Semua yang Kamu Butuhkan untuk Produktivitas Maksimal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TaskFlow menggabungkan fitur terbaik untuk membantu tim Anda bekerja lebih cepat, lebih terorganisir, dan lebih efisien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-4 bg-indigo-50 inline-block rounded-lg mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;