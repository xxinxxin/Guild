import React from 'react';
import MemberCard from './MemberCard';
import { members } from '../../data/members';

export default function MembersList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}