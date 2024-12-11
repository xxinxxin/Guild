import React from 'react';
import MembersList from '../components/members/MembersList';
import { Users } from 'lucide-react';

export default function Members() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-10 h-10 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white">Guild Members</h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the amazing adventurers who make FriendshipMelody an incredible community.
          </p>
        </div>
        
        <MembersList />
      </div>
    </div>
  );
}