import { useState, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { useSharedData } from '../hooks/useSharedData';
import { useToast } from './Toast';
import SectionHeader from './SectionHeader';
import { Camera, Plus, X } from '@phosphor-icons/react';

export default function Gallery() {
  const { currentUser, isAdmin } = useUser();
  const { photos, refresh } = useSharedData();
  const { showToast } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!currentUser) return null;

  async function handleUpload() {
    const file = fileRef.current?.files?.[0];
    if (!file || !currentUser) return;
    setUploading(true);
    try {
      const form = new FormData();
      form.append('image', file);
      form.append('uploadedBy', currentUser.name);
      form.append('caption', caption);
      const res = await fetch('/api/photos', { method: 'POST', body: form });
      if (res.ok) {
        showToast('התמונה עלתה!', 'success');
        setCaption('');
        if (fileRef.current) fileRef.current.value = '';
        refresh();
      }
    } catch {
      showToast('שגיאה בהעלאה', 'error');
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`/api/photos/${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast('התמונה נמחקה', 'info');
        refresh();
      }
    } catch {
      showToast('שגיאה', 'error');
    }
  }

  const lightboxPhoto = lightbox !== null ? photos.find((p) => p.id === lightbox) : null;

  return (
    <section className="gallery-section reveal">
      <SectionHeader title="Gallery" icon={<Camera size={24} weight="thin" color="var(--gold)" />} />

      {/* Upload form */}
      <div className="gallery-upload card">
        <label className="gallery-upload-label">
          <span className="gallery-upload-icon">
            <Plus size={20} weight="thin" color="var(--burgundy)" />
          </span>
          <span>העלאת תמונה</span>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="gallery-file-input"
            onChange={() => {
              if (fileRef.current?.files?.length) handleUpload();
            }}
          />
        </label>
        <input
          type="text"
          className="gallery-caption-input"
          placeholder="כיתוב (אופציונלי)..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        {uploading && <p className="gallery-uploading">מעלה...</p>}
      </div>

      {/* Masonry grid */}
      {photos.length > 0 ? (
        <div className="gallery-grid">
          {photos.map((p) => (
            <div key={p.id} className="gallery-item" onClick={() => setLightbox(p.id)}>
              <img src={p.url} alt={p.caption || 'תמונה'} loading="lazy" />
              {p.caption && <p className="gallery-item-caption">{p.caption}</p>}
              {isAdmin && (
                <button
                  className="gallery-delete-btn"
                  onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }}
                >
                  <X size={14} weight="bold" />
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '1rem' }}>
          עדיין אין תמונות - היי הראשונה להעלות!
        </p>
      )}

      {/* Lightbox */}
      {lightboxPhoto && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              <X size={20} weight="bold" />
            </button>
            <img src={lightboxPhoto.url} alt={lightboxPhoto.caption || 'תמונה'} />
            {lightboxPhoto.caption && (
              <p className="lightbox-caption">{lightboxPhoto.caption}</p>
            )}
            <p className="lightbox-author">העלתה: {lightboxPhoto.uploadedBy}</p>
          </div>
        </div>
      )}
    </section>
  );
}
