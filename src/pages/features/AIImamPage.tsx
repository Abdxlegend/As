import React from 'react';
import { MessageSquare, BookOpen, Brain } from 'lucide-react';

export function AIImamPage() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">AI Imam</h1>
        <p className="text-gray-600 mt-2">Get instant guidance on Islamic matters</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <MessageSquare className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Ask Questions</h3>
          <p className="text-gray-600">Get answers based on Quran and Hadith</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Brain className="w-6 h-6 text-emerald-600 mb-3" />
          <h3 className="text-lg font-semibold mb-2">Personal Guidance</h3>
          <p className="text-gray-600">Receive tailored spiritual advice</p>
        </div>
      </div>
    </div>
  );
}