import React from 'react';
import { QuickAction } from './QuickAction';
import { type QuickActionItem } from '../../types/quick-actions';

interface QuickActionsSectionProps {
  actions: QuickActionItem[];
}

export function QuickActionsSection({ actions }: QuickActionsSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {actions.map((action) => (
          <QuickAction
            key={action.label}
            icon={action.icon}
            label={action.label}
            onClick={action.action}
          />
        ))}
      </div>
    </section>
  );
}