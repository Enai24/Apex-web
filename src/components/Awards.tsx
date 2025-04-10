import React from 'react';
import { Award, Star, Shield, Trophy } from 'lucide-react';

const awards = [
  {
    name: 'Excellence in Digital Innovation',
    organization: 'Technology Innovation Awards',
    year: '2024',
    icon: Star,
  },
  {
    name: 'Best Consulting Firm',
    organization: 'Business Excellence Awards',
    year: '2023',
    icon: Trophy,
  },
  {
    name: 'Top Technology Solutions Provider',
    organization: 'Industry Leaders Forum',
    year: '2023',
    icon: Shield,
  },
];

export default function Awards() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Recognition</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Awards & Achievements
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment to excellence has been recognized by leading industry organizations.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {awards.map((award) => (
              <div key={award.name} className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-lg bg-blue-600/10 p-4">
                  <award.icon className="h-8 w-8 text-blue-600" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {award.name}
                </dt>
                <dd className="mt-4 flex flex-col gap-y-3 text-base leading-7 text-gray-600">
                  <span>{award.organization}</span>
                  <span className="font-semibold text-blue-600">{award.year}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}