import React from 'react';
import { Shield, Swords, User } from 'lucide-react';
import { MEMBER_ROLES } from '../../constants/guild';

interface MemberRoleProps {
  role: string;
}

export default function MemberRole({ role }: MemberRoleProps) {
  const getRoleIcon = () => {
    switch (role) {
      case MEMBER_ROLES.GUILD_LEADER:
        return <Shield className="w-4 h-4 text-yellow-400" />;
      case MEMBER_ROLES.OFFICER:
        return <Swords className="w-4 h-4 text-blue-400" />;
      default:
        return <User className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRoleColor = () => {
    switch (role) {
      case MEMBER_ROLES.GUILD_LEADER:
        return 'text-yellow-300';
      case MEMBER_ROLES.OFFICER:
        return 'text-blue-300';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="flex items-center gap-1">
      {getRoleIcon()}
      <span className={getRoleColor()}>{role}</span>
    </div>
  );
}