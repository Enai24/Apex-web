import React from 'react';

interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  {
    name: 'Tech Mahindra',
    src: '/logos/tech-mahindra.svg',
  },
  {
    name: 'Reliance Industries',
    src: '/logos/reliance-industries.svg',
  },
  {
    name: 'HDFC Bank',
    src: '/logos/hdfc-bank.svg',
  },
  {
    name: 'Amul',
    src: '/logos/amul.png',
  },
  {
    name: 'MDH',
    src: '/logos/mdh.png',
  },
  {
    name: 'Bajaj',
    src: '/logos/bajaj.svg',
  },
];

export default function ClientLogoStrip() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
            Our Pan-India Client Network
          </h2>
          <p className="text-lg text-gray-600">
            Serving clients across the country with local expertise
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 