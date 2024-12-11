import React from 'react';
import { formatDate } from '../../utils/date';

interface MemberStatsProps {
  level: number;
  class: string;
  joinDate: string;
}

export default function MemberStats({ level, class: className, joinDate }: MemberStatsProps) {
  return (
    <div className="mt-4 space-y-2">
      <StatRow label="Level" value={level.toString()} />
      <StatRow label="Class" value={className} />
      <StatRow label="Joined" value={formatDate(joinDate)} />
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-gray-400">
      <span>{label}:</span>
      <span className="text-white">{value}</span>
    </div>
  );
}