import React from 'react';
import { PageHeader } from '../../components/shared/PageHeader';
import { FeatureGrid } from '../../components/shared/FeatureGrid';
import { PrayerTimesSection } from '../../components/prayer/PrayerTimesSection';
import { prayerFeatures } from '../../data/features/prayer-features';
import { prayerTimes } from '../../data/prayer-times';

export function PrayerPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Prayer & Worship"
        description="Tools for your daily worship and spiritual practices"
      />
      <PrayerTimesSection prayerTimes={prayerTimes} />
      <FeatureGrid features={prayerFeatures} columns={3} />
    </div>
  );
}