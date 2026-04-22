import { useEffect } from 'react';
import { useUser } from './context/UserContext';
import { ToastProvider } from './components/Toast';
import UserSelect from './components/UserSelect';
import Hero from './components/Hero';
import BrideSection from './components/BrideSection';
import BridesmaidsList from './components/BridesmaidsList';
import Timeline from './components/Timeline';
import Poll from './components/Poll';
import ShoppingList from './components/ShoppingList';
import RSVP from './components/RSVP';
import MessageWall from './components/MessageWall';
import Gallery from './components/Gallery';
import FloralDivider from './components/FloralDivider';

function AppContent() {
  const { currentUser, clearUser } = useUser();

  // IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentUser]);

  if (!currentUser) {
    return <UserSelect />;
  }

  return (
    <>
      {/* Header bar */}
      <header className="header-bar">
        <div className="user-info">
          <div className="user-avatar" style={{
            backgroundColor: 'var(--cream-dark)',
            backgroundImage: `url(${currentUser.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <span>{currentUser.name}</span>
        </div>
        <button className="switch-user" onClick={clearUser}>
          החלפת משתמשת
        </button>
      </header>

      {/* Main content */}
      <main className="container">
        <Hero />

        <FloralDivider />

        <BrideSection />

        <FloralDivider />

        <BridesmaidsList />

        <FloralDivider />

        <Timeline />

        <FloralDivider />

        <Poll />

        <FloralDivider />

        <ShoppingList />

        <FloralDivider />

        <RSVP />

        <FloralDivider />

        <Gallery />

        <FloralDivider />

        <MessageWall />

        {/* Footer */}
        <footer className="site-footer">
          <FloralDivider />
          <p className="footer-quote">I can't say I do without you!</p>
          <p className="footer-details">14-15 מאי 2026 | עינות ספיר B&B, קריית ענבים</p>
        </footer>
      </main>
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
