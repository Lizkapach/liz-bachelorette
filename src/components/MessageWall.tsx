import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useSharedData } from '../hooks/useSharedData';
import { useToast } from './Toast';
import SectionHeader from './SectionHeader';
import { ChatsCircle } from '@phosphor-icons/react';

export default function MessageWall() {
  const { currentUser } = useUser();
  const { messages, refresh } = useSharedData();
  const { showToast } = useToast();
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);

  if (!currentUser) return null;

  async function handleSend() {
    if (!text.trim() || !currentUser) return;
    setSending(true);
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: currentUser.name, text: text.trim() }),
      });
      if (res.ok) {
        showToast('ההודעה נשלחה!', 'success');
        setText('');
        refresh();
      }
    } catch {
      showToast('שגיאה, נסי שוב', 'error');
    } finally {
      setSending(false);
    }
  }

  function formatDate(ts: string) {
    const d = new Date(ts);
    return d.toLocaleDateString('he-IL', { day: 'numeric', month: 'short' });
  }

  return (
    <section className="message-wall-section reveal">
      <SectionHeader title="What Feelings Are You Bringing?" icon={<ChatsCircle size={24} weight="thin" color="var(--gold)" />} />

      <div className="message-form card">
        <textarea
          className="message-textarea"
          placeholder="כתבי הודעה..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
        />
        <button className="ripple-btn message-send-btn" onClick={handleSend} disabled={sending || !text.trim()}>
          {sending ? '...' : 'שליחה'}
        </button>
      </div>

      {messages.length > 0 && (
        <div className="message-list">
          {[...messages].reverse().map((m) => (
            <div key={m.id} className="message-card card">
              <div className="message-header">
                <span className="message-author">{m.name}</span>
                <span className="message-date">{formatDate(m.timestamp)}</span>
              </div>
              <p className="message-text">{m.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
