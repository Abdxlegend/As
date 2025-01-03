import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PrayerPage } from './pages/features/PrayerPage';
import { QuranPage } from './pages/features/QuranPage';
import { AIImamPage } from './pages/features/AIImamPage';
import { LifestylePage } from './pages/features/LifestylePage';
import { LearnPage } from './pages/features/LearnPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="prayer" element={<PrayerPage />} />
          <Route path="quran" element={<QuranPage />} />
          <Route path="ai-imam" element={<AIImamPage />} />
          <Route path="lifestyle" element={<LifestylePage />} />
          <Route path="learn" element={<LearnPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;