import React from 'react';
import { Member } from '../../types/member';
import MemberRole from './MemberRole';
import MemberStats from './MemberStats';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={member.avatarUrl}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {member.name}
            </h3>
            <MemberRole role={member.role} />
          </div>
        </div>
        
        <MemberStats 
          level={member.level}
          class={member.class}
          joinDate={member.joinDate}
        />
      </div>
    </div>
  );
}