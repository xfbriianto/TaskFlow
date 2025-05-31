import React from 'react';
import { AlertCircle, CheckCircle, ClipboardList, MessagesSquare, Clock, Users } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: <ClipboardList className="h-8 w-8 text-red-500" />,
      title: 'Tugas tercecer di banyak aplikasi',
      description: 'Sulit melacak tugas yang tersebar di berbagai platform dan aplikasi.',
    },
    {
      icon: <MessagesSquare className="h-8 w-8 text-red-500" />,
      title: 'Komunikasi kurang transparan',
      description: 'Tim tidak mengetahui status tugas dan progress pekerjaan antar anggota.',
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: 'Deadline sering terlewat',
      description: 'Sulit mengatur prioritas dan memantau tenggat waktu yang mendekati.',
    },
  ];

  const solutions = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: 'Semua tugas dalam satu platform',
      description: 'TaskFlow mengintegrasikan semua tugas dalam satu dashboard yang mudah diakses.',
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Kolaborasi tim yang transparan',
      description: 'Lihat status tugas tim secara real-time dengan komentar dan update instan.',
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: 'Pengingat dan timeline otomatis',
      description: 'Sistem notifikasi pintar memastikan semua deadline terpantau dan terpenuhi.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Masalah yang Kami Pecahkan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TaskFlow dirancang untuk menyelesaikan masalah manajemen tugas yang paling umum dihadapi tim modern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h3 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
              <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
              Pain Points yang Umum Dihadapi
            </h3>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mr-4">{problem.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h4>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <h3 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Solusi TaskFlow
            </h3>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500"
              >
                <div className="flex-shrink-0 mr-4">{solution.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h4>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;