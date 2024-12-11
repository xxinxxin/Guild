import React from 'react';
import { Shield, Target, Heart, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
    title: 'Supportive Community',
    description: 'A welcoming environment where members help each other grow and succeed.',
  },
  {
    icon: <Target className="w-8 h-8 text-indigo-400" />,
    title: 'Regular Events',
    description: 'Weekly boss raids, leveling parties, and social gatherings.',
  },
  {
    icon: <Heart className="w-8 h-8 text-indigo-400" />,
    title: 'Friendly Atmosphere',
    description: 'No pressure, just fun and friendship while enjoying the game together.',
  },
  {
    icon: <Trophy className="w-8 h-8 text-indigo-400" />,
    title: 'Growth & Progress',
    description: 'Resources and guidance to help you achieve your in-game goals.',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Join FriendshipMelody?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience Toram Online with a community that values friendship and mutual growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}