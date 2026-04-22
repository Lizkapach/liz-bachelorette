import { useState } from 'react';
import type { Bridesmaid } from '../data';

interface BridesmaidCardProps {
  bridesmaid: Bridesmaid;
}

export default function BridesmaidCard({ bridesmaid }: BridesmaidCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`bridesmaid-card card bridesmaid-card-flip ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="bridesmaid-card-inner">
        <div className="bridesmaid-card-front">
          <div className="bridesmaid-avatar-wrapper">
            <img
              src={bridesmaid.image}
              alt={bridesmaid.name}
              className="bridesmaid-avatar-img"
              loading="lazy"
            />
          </div>
          <h4 className="bridesmaid-name">{bridesmaid.name}</h4>
          <span className="bridesmaid-flip-hint">tap to reveal</span>
        </div>
        <div className="bridesmaid-card-back">
          <div className="bridesmaid-avatar-back">
            <img
              src={bridesmaid.image}
              alt={bridesmaid.name}
              className="bridesmaid-avatar-back-img"
              loading="lazy"
            />
          </div>
          <h4 className="bridesmaid-name-back">{bridesmaid.name}</h4>
          <p className="bridesmaid-dedication">
            {bridesmaid.dedication.split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={i} />;
              // Bold the label portion before ":"
              const colonIdx = trimmed.indexOf(':');
              if (colonIdx > -1) {
                const label = trimmed.slice(0, colonIdx + 1);
                const rest = trimmed.slice(colonIdx + 1);
                return (
                  <span key={i} className="bridesmaid-dedication-line">
                    <strong>{label}</strong>
                    {rest}
                  </span>
                );
              }
              return <span key={i} className="bridesmaid-dedication-line">{trimmed}</span>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
