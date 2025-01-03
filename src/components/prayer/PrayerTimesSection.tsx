import React from 'react';
import { PrayerCard } from './PrayerCard';
import { type PrayerTime } from '../../types/prayer';

interface PrayerTimesSectionProps {
  prayerTimes: PrayerTime[];
}

export function PrayerTimesSection({ prayerTimes }: PrayerTimesSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Prayer Times</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {prayerTimes.map((prayer) => (
          <PrayerCard
            key={prayer.name}
            name={prayer.name}
            time={prayer.time}
            isNext={prayer.isNext}
          />
        ))}
      </div>
    </section>
  );
}