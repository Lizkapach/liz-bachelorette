import type { ReactNode } from 'react';
import FloralDivider from './FloralDivider';

interface SectionHeaderProps {
  title: string;
  icon?: ReactNode;
}

export default function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {icon && <span className="section-header-icon">{icon}</span>}
      <h2 className="section-header-title">{title}</h2>
      <FloralDivider />
    </div>
  );
}
