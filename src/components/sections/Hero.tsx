import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-indigo-600">TaskFlow</span> – Manajemen Tugas Tanpa Ribet
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Selesaikan to-do kamu lebih cepat, kolaborasi lebih mudah, dan pantau progress tim secara real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button primary large>
                Coba Gratis 14 Hari
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button secondary large>
                Lihat Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Tidak perlu kartu kredit</span>
              <span className="mx-2">•</span>
              <span>Daftar kurang dari 2 menit</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="TaskFlow Dashboard"
              className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;