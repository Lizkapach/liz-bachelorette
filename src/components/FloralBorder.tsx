interface FloralBorderProps {
  className?: string;
}

export default function FloralBorder({ className = '' }: FloralBorderProps) {
  return (
    <div className={`floral-border ${className}`}>
      <svg viewBox="0 0 800 40" preserveAspectRatio="none" className="floral-border-top">
        <FloralVine />
      </svg>
      <svg viewBox="0 0 40 800" preserveAspectRatio="none" className="floral-border-right">
        <FloralVineSide />
      </svg>
      <svg viewBox="0 0 800 40" preserveAspectRatio="none" className="floral-border-bottom">
        <FloralVine />
      </svg>
      <svg viewBox="0 0 40 800" preserveAspectRatio="none" className="floral-border-left">
        <FloralVineSide />
      </svg>
      {/* Corner ornaments */}
      <svg viewBox="0 0 60 60" className="floral-corner floral-corner-tr">
        <CornerOrnament />
      </svg>
      <svg viewBox="0 0 60 60" className="floral-corner floral-corner-tl">
        <CornerOrnament />
      </svg>
      <svg viewBox="0 0 60 60" className="floral-corner floral-corner-br">
        <CornerOrnament />
      </svg>
      <svg viewBox="0 0 60 60" className="floral-corner floral-corner-bl">
        <CornerOrnament />
      </svg>
    </div>
  );
}

function FloralVine() {
  const color = 'var(--burgundy, #6B1C2A)';
  return (
    <g fill={color} stroke={color} strokeWidth="0.5">
      {/* Continuous vine */}
      <path d="M0,20 Q50,8 100,20 Q150,32 200,20 Q250,8 300,20 Q350,32 400,20 Q450,8 500,20 Q550,32 600,20 Q650,8 700,20 Q750,32 800,20" fill="none" strokeWidth="1.5" />
      {/* Leaves along the vine */}
      {[50, 150, 250, 350, 450, 550, 650, 750].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy={i % 2 === 0 ? 12 : 28} rx="8" ry="4" transform={`rotate(${i % 2 === 0 ? -30 : 30} ${x} ${i % 2 === 0 ? 12 : 28})`} opacity="0.8" />
          <ellipse cx={x + 15} cy={i % 2 === 0 ? 14 : 26} rx="6" ry="3" transform={`rotate(${i % 2 === 0 ? 20 : -20} ${x + 15} ${i % 2 === 0 ? 14 : 26})`} opacity="0.6" />
        </g>
      ))}
      {/* Small berries/flowers */}
      {[100, 200, 300, 400, 500, 600, 700].map((x, i) => (
        <circle key={`b${i}`} cx={x} cy={20} r="2.5" opacity="0.7" />
      ))}
    </g>
  );
}

function FloralVineSide() {
  const color = 'var(--burgundy, #6B1C2A)';
  return (
    <g fill={color} stroke={color} strokeWidth="0.5">
      <path d="M20,0 Q8,50 20,100 Q32,150 20,200 Q8,250 20,300 Q32,350 20,400 Q8,450 20,500 Q32,550 20,600 Q8,650 20,700 Q32,750 20,800" fill="none" strokeWidth="1.5" />
      {[50, 150, 250, 350, 450, 550, 650, 750].map((y, i) => (
        <g key={i}>
          <ellipse cx={i % 2 === 0 ? 12 : 28} cy={y} rx="4" ry="8" transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? 12 : 28} ${y})`} opacity="0.8" />
          <ellipse cx={i % 2 === 0 ? 14 : 26} cy={y + 15} rx="3" ry="6" transform={`rotate(${i % 2 === 0 ? 20 : -20} ${i % 2 === 0 ? 14 : 26} ${y + 15})`} opacity="0.6" />
        </g>
      ))}
      {[100, 200, 300, 400, 500, 600, 700].map((y, i) => (
        <circle key={`b${i}`} cx={20} cy={y} r="2.5" opacity="0.7" />
      ))}
    </g>
  );
}

function CornerOrnament() {
  const color = 'var(--burgundy, #6B1C2A)';
  return (
    <g fill={color} stroke={color} strokeWidth="0.5">
      <path d="M5,30 Q10,10 30,5" fill="none" strokeWidth="2" />
      <ellipse cx="12" cy="15" rx="6" ry="3.5" transform="rotate(-45 12 15)" opacity="0.8" />
      <ellipse cx="20" cy="10" rx="5" ry="3" transform="rotate(-30 20 10)" opacity="0.7" />
      <ellipse cx="10" cy="22" rx="5" ry="3" transform="rotate(-60 10 22)" opacity="0.7" />
      <circle cx="15" cy="15" r="2.5" opacity="0.6" />
      <circle cx="8" cy="8" r="1.5" opacity="0.5" />
    </g>
  );
}
