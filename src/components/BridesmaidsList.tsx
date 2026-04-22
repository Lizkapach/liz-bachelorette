import { BRIDESMAIDS } from '../data';
import SectionHeader from './SectionHeader';
import BridesmaidCard from './BridesmaidCard';
import { Flower } from '@phosphor-icons/react';

export default function BridesmaidsList() {
  const bridesmaids = BRIDESMAIDS.filter((b) => !b.isBride);

  return (
    <section className="bridesmaids-section reveal">
      <SectionHeader title="The Bridesmaids" icon={<Flower size={24} weight="thin" color="var(--gold)" />} />
      <div className="bridesmaids-grid">
        {bridesmaids.map((b) => (
          <BridesmaidCard key={b.key} bridesmaid={b} />
        ))}
      </div>
    </section>
  );
}
