import React from 'react';
import { Users, Building2, Award, MapPin, Briefcase, ThumbsUp, TrendingUp, GraduationCap, Handshake } from 'lucide-react';

const stats = [
  { id: 1, name: 'Associates Deployed', value: '280,000+', icon: Users },
  { id: 2, name: 'Client Companies', value: '3,500+', icon: Building2 },
  { id: 3, name: 'Years of Excellence', value: '20+', icon: Award },
  { id: 4, name: 'Cities Present', value: '75+', icon: MapPin },
  { id: 5, name: 'Industries Served', value: '22+', icon: Briefcase },
  { id: 6, name: 'Client Satisfaction', value: '98%', icon: ThumbsUp },
  { id: 7, name: 'Annual Growth Rate', value: '25%', icon: TrendingUp },
  { id: 8, name: 'Training Centers', value: '2000+', icon: GraduationCap },
  { id: 9, name: 'Successful Placements', value: '1M+', icon: Handshake }
];

export default function Statistics() {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Leading Organizations
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Two decades of excellence in delivering comprehensive business solutions
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                <dt className="text-sm font-semibold leading-6 text-blue-100">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  <stat.icon className="h-8 w-8 mx-auto mb-4" />
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}