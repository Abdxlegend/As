import { type PrayerTime } from '../types/prayer';

export const prayerTimes: PrayerTime[] = [
  { name: 'Fajr', time: '5:23 AM', isNext: false },
  { name: 'Dhuhr', time: '12:30 PM', isNext: true },
  { name: 'Asr', time: '3:45 PM', isNext: false },
  { name: 'Maghrib', time: '6:15 PM', isNext: false },
  { name: 'Isha', time: '7:45 PM', isNext: false },
];