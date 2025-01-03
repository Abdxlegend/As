import React from 'react';
import { Moon, Clock } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-emerald-600 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Islamic Compass</h1>
          <div className="flex items-center space-x-2">
            <Moon className="w-5 h-5" />
            <span>23 Ramadan, 1445</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>Next Prayer: Dhuhr in 2:15</span>
        </div>
      </div>
    </header>
  );
}