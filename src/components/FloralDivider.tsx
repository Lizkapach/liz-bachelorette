interface FloralDividerProps {
  className?: string;
}

export default function FloralDivider({ className = '' }: FloralDividerProps) {
  const color = 'var(--burgundy, #6B1C2A)';
  return (
    <div className={`floral-divider ${className}`}>
      <svg viewBox="0 0 400 30" preserveAspectRatio="xMidYMid meet">
        <g fill={color} stroke={color} strokeWidth="0.5">
          {/* Center flower */}
          <circle cx="200" cy="15" r="4" opacity="0.8" />
          <ellipse cx="200" cy="9" rx="3" ry="5" opacity="0.6" />
          <ellipse cx="200" cy="21" rx="3" ry="5" opacity="0.6" />
          <ellipse cx="194" cy="15" rx="5" ry="3" opacity="0.6" />
          <ellipse cx="206" cy="15" rx="5" ry="3" opacity="0.6" />

          {/* Left vine */}
          <path d="M200,15 Q170,8 140,15 Q110,22 80,15 Q50,8 20,15" fill="none" strokeWidth="1.2" />
          {[60, 100, 140, 170].map((x, i) => (
            <ellipse key={`l${i}`} cx={x} cy={i % 2 === 0 ? 10 : 20} rx="6" ry="3" transform={`rotate(${i % 2 === 0 ? -25 : 25} ${x} ${i % 2 === 0 ? 10 : 20})`} opacity="0.6" />
          ))}

          {/* Right vine */}
          <path d="M200,15 Q230,22 260,15 Q290,8 320,15 Q350,22 380,15" fill="none" strokeWidth="1.2" />
          {[230, 260, 300, 340].map((x, i) => (
            <ellipse key={`r${i}`} cx={x} cy={i % 2 === 0 ? 20 : 10} rx="6" ry="3" transform={`rotate(${i % 2 === 0 ? 25 : -25} ${x} ${i % 2 === 0 ? 20 : 10})`} opacity="0.6" />
          ))}

          {/* Small dots */}
          {[80, 120, 280, 320].map((x, i) => (
            <circle key={`d${i}`} cx={x} cy={15} r="1.5" opacity="0.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}
