import React from 'react';
import { Layers, Instagram, Twitter, Facebook, Linkedin, Mail, Send } from 'lucide-react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Produk',
      links: [
        { name: 'Fitur', href: '#features' },
        { name: 'Harga', href: '#pricing' },
        { name: 'Integrasi', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { name: 'Tentang Kami', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Karir', href: '#' },
        { name: 'Berita', href: '#' },
        { name: 'Kontak', href: '#' },
      ],
    },
    {
      title: 'Sumber Daya',
      links: [
        { name: 'Dokumentasi', href: '#' },
        { name: 'Template', href: '#' },
        { name: 'Tutorial', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Kebijakan Privasi', href: '#' },
        { name: 'Syarat & Ketentuan', href: '#' },
        { name: 'Kebijakan Cookie', href: '#' },
        { name: 'Keamanan', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Layers className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">TaskFlow</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Platform manajemen tugas yang membantu tim menyelesaikan pekerjaan lebih cepat, berkolaborasi lebih efektif, dan mencapai tujuan bersama.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} TaskFlow. All rights reserved.
              </p>
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Email anda"
                    className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                  />
                  <Button primary className="rounded-l-none">
                    <Mail className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;