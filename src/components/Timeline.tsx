import { SCHEDULE_THURSDAY, SCHEDULE_FRIDAY, type ScheduleItem } from '../data';
import SectionHeader from './SectionHeader';
import {
  CarSimple,
  Wine,
  HandHeart,
  Dress,
  Gift,
  PersonSimpleTaiChi,
  Bread,
  MapTrifold,
  Sparkle,
  Fish,
} from '@phosphor-icons/react';
import type { ComponentType } from 'react';

// Map schedule title (Hebrew) to a Phosphor icon component
const ICON_MAP: Record<string, ComponentType<{ size?: number; weight?: 'thin' | 'light' | 'regular' | 'bold'; color?: string }>> = {
  'הגעה לעינות ספיר': CarSimple,
  'בריכה וג\'קוזי': Wine,
  'עיסוי לכלה': HandHeart,
  'מתלבשות': Dress,
  'ארוחת ערב': Fish,
  'משחקים ומתנות': Gift,
  'יוגה ליד הבריכה': PersonSimpleTaiChi,
  'קפה וארוחת בוקר': Bread,
  'סיבוב בירושלים': MapTrifold,
};

function TimelineDay({ title, items }: { title: string; items: ScheduleItem[] }) {
  return (
    <div className="timeline-day">
      <h3 className="timeline-day-title">{title}</h3>
      <div className="timeline-items">
        {items.map((item, i) => {
          const Icon = ICON_MAP[item.title] ?? Sparkle;
          return (
            <div key={i} className="timeline-item card">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-icon">
                <Icon size={28} weight="thin" color="var(--burgundy)" />
              </div>
              <div className="timeline-content">
                <h4 className="timeline-item-title">{item.title}</h4>
                <p className="timeline-item-desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="timeline-section reveal">
      <SectionHeader title="The Plan" icon={<Sparkle size={24} weight="thin" color="var(--gold)" />} />
      <TimelineDay title="Thursday" items={SCHEDULE_THURSDAY} />
      <TimelineDay title="Friday" items={SCHEDULE_FRIDAY} />
    </section>
  );
}
