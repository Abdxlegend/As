import {
  Compass,
  Book,
  MapPin,
  Calculator,
  Radio,
  Calendar
} from 'lucide-react';
import { type QuickActionItem } from '../types/quick-actions';

export const quickActions: QuickActionItem[] = [
  { icon: Compass, label: 'Qibla', action: () => console.log('Qibla') },
  { icon: Book, label: 'Quran', action: () => console.log('Quran') },
  { icon: MapPin, label: 'Mosques', action: () => console.log('Mosques') },
  { icon: Calculator, label: 'Zakat', action: () => console.log('Zakat') },
  { icon: Radio, label: 'Radio', action: () => console.log('Radio') },
  { icon: Calendar, label: 'Calendar', action: () => console.log('Calendar') },
];