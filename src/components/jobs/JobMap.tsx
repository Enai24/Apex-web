import React from 'react';
import { MapPin } from 'lucide-react';

export default function JobMap() {
  return (
    <div className="h-[400px] bg-gray-100 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-8 w-8 text-gray-400 mx-auto" />
          <p className="mt-2 text-sm text-gray-500">Interactive map coming soon</p>
        </div>
      </div>
    </div>
  );
}