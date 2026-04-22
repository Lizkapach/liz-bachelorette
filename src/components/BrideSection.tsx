import SectionHeader from './SectionHeader';
import { BRIDESMAIDS } from '../data';
import { Crown } from '@phosphor-icons/react';

export default function BrideSection() {
  const liz = BRIDESMAIDS.find((b) => b.isBride);
  return (
    <section className="bride-section reveal">
      <SectionHeader title="Our Bride" icon={<Crown size={24} weight="thin" color="var(--gold)" />} />
      <div className="bride-card card">
        <div className="bride-avatar-wrapper">
          {liz && (
            <img src={liz.image} alt={liz.name} className="bride-avatar-img" loading="lazy" />
          )}
        </div>
        <blockquote className="bride-message">
          מחכה לחגוג איתכן את מסיבת הרווקות שלי, ומתרגשת להתחיל איתכם את חודש החגיגות!
        </blockquote>
        <p className="bride-tagline">I can't say I do without you!</p>
      </div>
    </section>
  );
}
