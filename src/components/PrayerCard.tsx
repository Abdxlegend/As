import React from 'react';
import { Clock } from 'lucide-react';

type PrayerTime = {
  name: string;
  time: string;
  isNext: boolean;
};

export function PrayerCard({ name, time, isNext }: PrayerTime) {
  return (
    <div className={`p-4 rounded-lg ${isNext ? 'bg-emerald-50 border-2 border-emerald-500' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
        {isNext && (
          <div className="flex items-center text-emerald-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">Next Prayer</span>
          </div>
        )}
      </div>
    </div>
  );
}