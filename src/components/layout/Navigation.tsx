import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Book, Brain, Coffee, GraduationCap, Users } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/prayer', icon: Compass, label: 'Prayer' },
  { to: '/quran', icon: Book, label: 'Quran' },
  { to: '/ai-imam', icon: Brain, label: 'AI Imam' },
  { to: '/lifestyle', icon: Coffee, label: 'Lifestyle' },
  { to: '/learn', icon: GraduationCap, label: 'Learn' },
  { to: '/about', icon: Users, label: 'About' },
];

export function Navigation() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex space-x-8">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-2 py-4 text-sm font-medium transition-colors
                 ${isActive 
                   ? 'text-emerald-600 border-b-2 border-emerald-600' 
                   : 'text-gray-500 hover:text-gray-900'
                 }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}