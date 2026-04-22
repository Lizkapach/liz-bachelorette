import { useUser } from '../context/UserContext';
import { useSharedData } from '../hooks/useSharedData';
import { useToast } from './Toast';
import SectionHeader from './SectionHeader';
import { MapPin } from '@phosphor-icons/react';

const POLL_QUESTION = 'איפה בא לכן לטייל בירושלים?';

const POLL_OPTIONS = [
  { key: 'a', label: 'פארק כרמים, לא רחוק מהקפה' },
  { key: 'b', label: 'ממילא' },
  { key: 'c', label: 'מחנה יהודה' },
  { key: 'd', label: 'רוצות להתפלל בכותל' },
];

export default function Poll() {
  const { currentUser } = useUser();
  const { pollVotes, refresh } = useSharedData();
  const { showToast } = useToast();

  if (!currentUser) return null;

  const myVote = pollVotes.find((v) => v.name === currentUser.name);
  const totalVotes = pollVotes.length;

  async function castVote(option: string) {
    try {
      const res = await fetch('/api/polls/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: currentUser!.name, option }),
      });
      if (res.ok) {
        showToast('הצבעתך נשמרה!', 'success');
        refresh();
      }
    } catch {
      showToast('שגיאה', 'error');
    }
  }

  async function cancelVote() {
    try {
      const res = await fetch('/api/polls/vote', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: currentUser!.name }),
      });
      if (res.ok) {
        showToast('ההצבעה בוטלה', 'info');
        refresh();
      }
    } catch {
      showToast('שגיאה', 'error');
    }
  }

  function handleOptionClick(option: string) {
    if (myVote?.option === option) {
      cancelVote();
    } else {
      castVote(option);
    }
  }

  return (
    <section className="poll-section reveal">
      <SectionHeader
        title="Where Should We Wander?"
        icon={<MapPin size={24} weight="thin" color="var(--gold)" />}
      />

      <p className="poll-question">{POLL_QUESTION}</p>

      <div className="poll-options">
        {POLL_OPTIONS.map((opt) => {
          const voters = pollVotes.filter((v) => v.option === opt.key);
          const count = voters.length;
          const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
          const isMine = myVote?.option === opt.key;
          return (
            <button
              key={opt.key}
              className={`poll-option card ${isMine ? 'selected' : ''}`}
              onClick={() => handleOptionClick(opt.key)}
            >
              <div className="poll-option-bar" style={{ width: `${pct}%` }} />
              <div className="poll-option-content">
                <div className="poll-option-main">
                  <span className="poll-option-label">
                    <span className="poll-option-letter">{opt.key.toUpperCase()}.</span>
                    {opt.label}
                  </span>
                  <span className="poll-option-count">
                    {count > 0 ? `${count} (${pct}%)` : ''}
                  </span>
                </div>
                {voters.length > 0 && (
                  <div className="poll-option-voters">
                    {voters.map((v) => (
                      <span key={v.name} className="poll-voter-chip">
                        {v.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {myVote && (
        <p className="poll-footer">
          הצבעת כבר - לחיצה על אותה אופציה תבטל, לחיצה על אופציה אחרת תשנה
        </p>
      )}
    </section>
  );
}
