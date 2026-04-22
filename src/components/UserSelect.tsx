import { BRIDESMAIDS } from '../data';
import { useUser } from '../context/UserContext';

export default function UserSelect() {
  const { setUser } = useUser();

  return (
    <div className="user-select-screen animate-fade-in">
      <h1>Bridesmaids Club</h1>
      <p>הרווקות של ליז</p>
      <p style={{ marginBottom: '2rem', color: 'var(--muted)' }}>מי את?</p>
      <div className="user-select-grid">
        {BRIDESMAIDS.map((b) => (
          <button
            key={b.key}
            className="user-select-card"
            onClick={() => setUser(b.key)}
          >
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${b.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {b.name}
          </button>
        ))}
      </div>
    </div>
  );
}
