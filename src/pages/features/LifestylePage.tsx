import React from 'react';
import { Calculator, MapPin, Coins } from 'lucide-react';

export function LifestylePage() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Islamic Lifestyle</h1>
        <p className="text-gray-600 mt-2">Tools for living an Islamic lifestyle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Calculator className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Zakat Calculator</h3>
          <p className="text-gray-600">Calculate your annual Zakat</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <MapPin className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Halal Finder</h3>
          <p className="text-gray-600">Find halal restaurants and shops nearby</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Coins className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Islamic Finance</h3>
          <p className="text-gray-600">Learn about halal financial practices</p>
        </div>
      </div>
    </div>
  );
}