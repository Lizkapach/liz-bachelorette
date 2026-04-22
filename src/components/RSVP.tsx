import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useSharedData } from '../hooks/useSharedData';
import { useToast } from './Toast';
import SectionHeader from './SectionHeader';
import { Envelope, Heart, Check, Flower } from '@phosphor-icons/react';

export default function RSVP() {
  const { currentUser } = useUser();
  const { rsvps, refresh } = useSharedData();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  if (!currentUser) return null;

  const hasRsvped = rsvps.some((r) => r.name === currentUser.name);

  async function handleRsvp() {
    if (!currentUser) return;
    setLoading(true);
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: currentUser.name }),
      });
      if (res.ok) {
        showToast('אישרת הגעה!', 'success');
        refresh();
      }
    } catch {
      showToast('שגיאה, נסי שוב', 'error');
    } finally {
      setLoading(false);
    }
  }

  async function handleCancel() {
    if (!currentUser) return;
    setLoading(true);
    try {
      const res = await fetch('/api/rsvp', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: currentUser.name }),
      });
      if (res.ok) {
        showToast('ביטלת את האישור', 'info');
        refresh();
      }
    } catch {
      showToast('שגיאה, נסי שוב', 'error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rsvp-section reveal">
      <SectionHeader title="RSVP" icon={<Envelope size={24} weight="thin" color="var(--gold)" />} />

      <div className="rsvp-content">
        {hasRsvped ? (
          <div className="rsvp-confirmed">
            <p className="rsvp-status">
              את מגיעה! <Check size={18} weight="bold" color="var(--burgundy)" style={{ verticalAlign: 'middle' }} />
            </p>
            <button className="ripple-btn secondary" onClick={handleCancel} disabled={loading}>
              ביטול אישור
            </button>
          </div>
        ) : (
          <button className="ripple-btn rsvp-btn" onClick={handleRsvp} disabled={loading}>
            {loading ? '...' : (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                אני מגיעה! <Heart size={18} weight="fill" color="currentColor" />
              </span>
            )}
          </button>
        )}

        {rsvps.length > 0 && (
          <div className="rsvp-list">
            <h4 className="rsvp-list-title">מגיעות ({rsvps.length})</h4>
            <div className="rsvp-avatars">
              {rsvps.map((r) => (
                <div key={r.name} className="rsvp-avatar-chip">
                  <span className="rsvp-chip-icon">
                    <Flower size={14} weight="thin" color="var(--burgundy)" />
                  </span>
                  <span>{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
