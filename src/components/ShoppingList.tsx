import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useSharedData, type Task } from '../hooks/useSharedData';
import { useToast } from './Toast';
import SectionHeader from './SectionHeader';
import {
  Wine,
  Cookie,
  Camera,
  Package,
  ShoppingBag,
  X,
} from '@phosphor-icons/react';
import type { ComponentType } from 'react';

type PhosphorIcon = ComponentType<{ size?: number; weight?: 'thin' | 'light' | 'regular' | 'bold'; color?: string }>;

const CATEGORY_LABELS: Record<string, string> = {
  drinks: 'שתייה',
  food: 'נשנושים',
  gear: 'ציוד',
  other: 'אחר',
};

const CATEGORY_ICONS: Record<string, PhosphorIcon> = {
  drinks: Wine,
  food: Cookie,
  gear: Camera,
  other: Package,
};

const CATEGORY_ORDER = ['food', 'drinks', 'gear', 'other'];

export default function ShoppingList() {
  const { currentUser, isAdmin } = useUser();
  const { tasks, refresh } = useSharedData();
  const { showToast } = useToast();
  const [showAdd, setShowAdd] = useState(false);
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState('other');

  if (!currentUser) return null;

  const grouped = tasks.reduce<Record<string, Task[]>>((acc, t) => {
    const cat = t.category || 'other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(t);
    return acc;
  }, {});

  async function handleClaim(id: number) {
    try {
      const res = await fetch(`/api/tasks/${id}/claim`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: currentUser!.name }),
      });
      if (res.ok) {
        showToast('לקחת על עצמך!', 'success');
        refresh();
      }
    } catch {
      showToast('שגיאה', 'error');
    }
  }

  async function handleUnclaim(id: number) {
    try {
      const res = await fetch(`/api/tasks/${id}/claim`, { method: 'DELETE' });
      if (res.ok) {
        showToast('ביטלת', 'info');
        refresh();
      }
    } catch {
      showToast('שגיאה', 'error');
    }
  }

  async function handleAdd() {
    if (!newDesc.trim()) return;
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newDesc.trim(), category: newCategory }),
      });
      if (res.ok) {
        showToast('נוסף!', 'success');
        setNewDesc('');
        setShowAdd(false);
        refresh();
      }
    } catch {
      showToast('שגיאה', 'error');
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast('נמחק', 'info');
        refresh();
      }
    } catch {
      showToast('שגיאה', 'error');
    }
  }

  return (
    <section className="shopping-section reveal">
      <SectionHeader title="Who's Bringing What?" icon={<ShoppingBag size={24} weight="thin" color="var(--gold)" />} />

      {isAdmin && (
        <div className="shopping-admin">
          {showAdd ? (
            <div className="shopping-add-form card">
              <input
                type="text"
                className="shopping-input"
                placeholder="תיאור הפריט..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              />
              <select
                className="shopping-select"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              >
                {Object.entries(CATEGORY_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <div className="shopping-add-actions">
                <button className="ripple-btn" onClick={handleAdd}>הוספה</button>
                <button className="ripple-btn secondary" onClick={() => setShowAdd(false)}>ביטול</button>
              </div>
            </div>
          ) : (
            <button className="ripple-btn secondary" onClick={() => setShowAdd(true)}>
              + הוספת פריט
            </button>
          )}
        </div>
      )}

      <div className="shopping-categories">
        {CATEGORY_ORDER
          .filter((cat) => grouped[cat] && grouped[cat].length > 0)
          .map((cat) => {
          const items = grouped[cat];
          const CatIcon = CATEGORY_ICONS[cat] ?? Package;
          return (
          <div key={cat} className="shopping-category">
            <h4 className="shopping-category-title">
              <CatIcon size={22} weight="thin" color="var(--burgundy)" />
              <span style={{ marginInlineStart: '0.5rem' }}>{CATEGORY_LABELS[cat] || cat}</span>
            </h4>
            <div className="shopping-items">
              {items.map((item) => (
                <div key={item.id} className={`shopping-item card ${item.claimed_by ? 'claimed' : ''}`}>
                  <span className="shopping-item-desc">{item.description}</span>
                  <div className="shopping-item-action">
                    {item.claimed_by ? (
                      <>
                        <span className="shopping-claimed-by">{item.claimed_by}</span>
                        {(item.claimed_by === currentUser.name || isAdmin) && (
                          <button className="shopping-unclaim-btn" onClick={() => handleUnclaim(item.id)}>
                            ביטול
                          </button>
                        )}
                      </>
                    ) : (
                      <button className="ripple-btn shopping-claim-btn" onClick={() => handleClaim(item.id)}>
                        אני לוקחת
                      </button>
                    )}
                    {isAdmin && (
                      <button className="shopping-delete-btn" onClick={() => handleDelete(item.id)}>
                        <X size={14} weight="bold" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
