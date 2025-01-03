import React from 'react';
import { LucideIcon } from 'lucide-react';

type QuickActionProps = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
};

export function QuickAction({ icon: Icon, label, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
    >
      <Icon className="w-6 h-6 text-emerald-600 mb-2" />
      <span className="text-sm text-gray-700">{label}</span>
    </button>
  );
}