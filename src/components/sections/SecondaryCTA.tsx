import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, HelpCircle } from 'lucide-react';

const SecondaryCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <HelpCircle className="h-6 w-6 text-indigo-200 mr-2" />
                <span className="text-indigo-100 font-medium">Masih Ragu?</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Coba TaskFlow secara gratis selama 14 hari tanpa kartu kredit
              </h3>
              <p className="text-indigo-100 text-lg mb-0">
                Rasakan manfaat peningkatan produktivitas tim dengan TaskFlow dan lihat perbedaannya sendiri.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button primary large light className="min-w-48">
                Mulai Trial Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-indigo-200 text-sm mt-4">
                Tidak ada komitmen. Batalkan kapan saja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTA;