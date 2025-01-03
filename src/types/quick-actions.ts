import { LucideIcon } from 'lucide-react';

export interface QuickActionItem {
  icon: LucideIcon;
  label: string;
  action: () => void;
}