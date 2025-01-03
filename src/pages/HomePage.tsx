import React from 'react';
import { PrayerTimesSection } from '../components/prayer/PrayerTimesSection';
import { QuickActionsSection } from '../components/quick-actions/QuickActionsSection';
import { FeaturedContent } from '../components/featured/FeaturedContent';
import { prayerTimes } from '../data/prayer-times';
import { quickActions } from '../data/quick-actions';

export function HomePage() {
  return (
    <>
      <PrayerTimesSection prayerTimes={prayerTimes} />
      <QuickActionsSection actions={quickActions} />
      <FeaturedContent />
    </>
  );
}