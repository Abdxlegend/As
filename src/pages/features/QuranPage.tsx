import React from 'react';
import { PageHeader } from '../../components/shared/PageHeader';
import { FeatureGrid } from '../../components/shared/FeatureGrid';
import { quranFeatures } from '../../data/features/quran-features';

export function QuranPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Quran & Teachings"
        description="Access the Holy Quran with translations and audio"
      />
      <FeatureGrid features={quranFeatures} columns={3} />
    </div>
  );
}