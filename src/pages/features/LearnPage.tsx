import React from 'react';
import { GraduationCap, BookOpen, Trophy } from 'lucide-react';

export function LearnPage() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Learn</h1>
        <p className="text-gray-600 mt-2">Educational resources and interactive learning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Trophy className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Quizzes</h3>
          <p className="text-gray-600">Test your Islamic knowledge</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <BookOpen className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Library</h3>
          <p className="text-gray-600">Access Islamic books and resources</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <GraduationCap className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Courses</h3>
          <p className="text-gray-600">Structured learning paths</p>
        </div>
      </div>
    </div>
  );
}