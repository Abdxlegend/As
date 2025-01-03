import React from 'react';
import { Compass, Book, Brain, Coffee, Users, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Prayer & Worship',
    description: 'Accurate prayer times, Qibla direction, and spiritual tools.',
  },
  {
    icon: Book,
    title: 'Quran & Teachings',
    description: 'Interactive Quran with translations, tafseer, and audio.',
  },
  {
    icon: Brain,
    title: 'AI Imam',
    description: 'AI-powered guidance on Islamic matters and practices.',
  },
  {
    icon: Coffee,
    title: 'Lifestyle',
    description: 'Tools for Islamic lifestyle including halal food finder.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with local mosques and Islamic events.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Islamic learning resources and interactive quizzes.',
  },
];

export function FeaturesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Icon className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  );
}