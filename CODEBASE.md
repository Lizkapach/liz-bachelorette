# CODEBASE EXPORT - Liz Bachelorette Party Site

Generated: Sat Apr 18 17:49:11     2026

## Project Overview

One-page React + Express bachelorette party website with Hebrew RTL, vintage styling, video hero, shared state via JSON file polling.

**Stack:** React 19 + Vite + TypeScript + Express 5 + Phosphor Icons + Multer

**Deployment:** Railway

---

## File Tree

```
  README.md
  index.html
  package.json
  railway.json
  server/index.ts
  src/App.tsx
  src/components/BrideSection.tsx
  src/components/BridesmaidCard.tsx
  src/components/BridesmaidsList.tsx
  src/components/Countdown.tsx
  src/components/FloralBorder.tsx
  src/components/FloralDivider.tsx
  src/components/Gallery.tsx
  src/components/Hero.tsx
  src/components/MessageWall.tsx
  src/components/RSVP.tsx
  src/components/SectionHeader.tsx
  src/components/ShoppingList.tsx
  src/components/Timeline.tsx
  src/components/Toast.tsx
  src/components/UserSelect.tsx
  src/context/UserContext.tsx
  src/data.ts
  src/hooks/useSharedData.tsx
  src/index.css
  src/main.tsx
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  tsconfig.server.json
  vite.config.ts
```

## Binary Assets (not included in this export)

- public/images/liz.jpeg, yahavit.jpeg, stavit.jpeg, gali.jpeg, nooniz.jpeg
- public/videos/cake.mp4, yoga.mp4

---

# Source Files


## `README.md`

```markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
```


## `index.html`

```html
<!doctype html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#6B1C2A" />
    <meta name="description" content="Bridesmaids Club - הרווקות של ליז | 14-15 מאי 2026" />
    <meta property="og:title" content="Bridesmaids Club - הרווקות של ליז" />
    <meta property="og:description" content="14-15 מאי 2026 | עינות ספיר B&B, קריית ענבים" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>Bridesmaids Club - הרווקות של ליז</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```


## `package.json`

```json
{
  "name": "liz-bachelorette",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "concurrently \"vite\" \"tsx watch server/index.ts\"",
    "dev:client": "vite",
    "dev:server": "tsx watch server/index.ts",
    "build": "tsc -b && vite build",
    "start": "tsx server/index.ts",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@phosphor-icons/react": "^2.1.10",
    "cors": "^2.8.5",
    "express": "^5.1.0",
    "multer": "^2.1.1",
    "react": "^19.2.4",
    "react-dom": "^19.2.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/cors": "^2.8.18",
    "@types/express": "^5.0.0",
    "@types/multer": "^2.1.0",
    "@types/node": "^24.12.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "concurrently": "^9.1.2",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "tsx": "^4.19.4",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.57.0",
    "vite": "^8.0.1"
  }
}
```


## `railway.json`

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```


## `server/index.ts`

```typescript
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- File uploads ---
const UPLOADS_DIR = path.join(__dirname, '..', 'public', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});

// Serve uploaded files
app.use('/uploads', express.static(UPLOADS_DIR));

// --- Data persistence ---

interface DataStore {
  tasks: Array<{
    id: number;
    description: string;
    category: string;
    claimed_by: string | null;
  }>;
  rsvps: Array<{
    name: string;
    timestamp: string;
  }>;
  messages: Array<{
    id: number;
    name: string;
    text: string;
    timestamp: string;
  }>;
  blessings: Array<{
    id: number;
    from: string;
    content: string;
    timestamp: string;
  }>;
  photos: Array<{
    id: number;
    url: string;
    uploadedBy: string;
    caption: string;
    timestamp: string;
  }>;
}

const DATA_FILE = path.join(__dirname, '..', 'data.json');

const DEFAULT_TASKS = [
  { id: 1, description: 'יין', category: 'drinks', claimed_by: null },
  { id: 2, description: 'פרוסקו/שמפניה', category: 'drinks', claimed_by: null },
  { id: 3, description: 'נשנושים ודברי כיבוד', category: 'food', claimed_by: null },
  { id: 4, description: 'קישוטים ובלונים', category: 'decor', claimed_by: null },
  { id: 5, description: 'מזרני יוגה (למי שאין)', category: 'gear', claimed_by: null },
  { id: 6, description: 'רמקול בלוטות\'', category: 'gear', claimed_by: null },
  { id: 7, description: 'מצלמת פולארויד + סרטים', category: 'gear', claimed_by: null },
  { id: 8, description: 'משחקי קלפים/קופסא', category: 'games', claimed_by: null },
  { id: 9, description: 'אביזרי צילום (כתר כלה, שלטים)', category: 'decor', claimed_by: null },
];

function loadData(): DataStore {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw) as DataStore;
    }
  } catch {
    // fall through to defaults
  }
  return {
    tasks: [...DEFAULT_TASKS],
    rsvps: [],
    messages: [],
    blessings: [],
    photos: [],
  };
}

function saveData(data: DataStore): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// --- API Routes ---

// Unified endpoint
app.get('/api/all', (_req, res) => {
  const data = loadData();
  res.json(data);
});

// Tasks (shopping list)
app.get('/api/tasks', (_req, res) => {
  const data = loadData();
  res.json(data.tasks);
});

app.post('/api/tasks/:id/claim', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id);
  const { name } = req.body as { name: string };
  const task = data.tasks.find((t) => t.id === id);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  task.claimed_by = name;
  saveData(data);
  res.json(data.tasks);
});

app.delete('/api/tasks/:id/claim', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id);
  const task = data.tasks.find((t) => t.id === id);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  task.claimed_by = null;
  saveData(data);
  res.json(data.tasks);
});

app.post('/api/tasks', (req, res) => {
  const data = loadData();
  const { description, category } = req.body as { description: string; category: string };
  const maxId = data.tasks.reduce((max, t) => Math.max(max, t.id), 0);
  data.tasks.push({
    id: maxId + 1,
    description,
    category: category || 'other',
    claimed_by: null,
  });
  saveData(data);
  res.json(data.tasks);
});

app.delete('/api/tasks/:id', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id);
  data.tasks = data.tasks.filter((t) => t.id !== id);
  saveData(data);
  res.json(data.tasks);
});

// RSVP
app.get('/api/rsvp', (_req, res) => {
  const data = loadData();
  res.json(data.rsvps);
});

app.post('/api/rsvp', (req, res) => {
  const data = loadData();
  const { name } = req.body as { name: string };
  if (data.rsvps.some((r) => r.name === name)) {
    res.json(data.rsvps);
    return;
  }
  data.rsvps.push({ name, timestamp: new Date().toISOString() });
  saveData(data);
  res.json(data.rsvps);
});

app.delete('/api/rsvp', (req, res) => {
  const data = loadData();
  const { name } = req.body as { name: string };
  data.rsvps = data.rsvps.filter((r) => r.name !== name);
  saveData(data);
  res.json(data.rsvps);
});

// Messages
app.get('/api/messages', (_req, res) => {
  const data = loadData();
  res.json(data.messages);
});

app.post('/api/messages', (req, res) => {
  const data = loadData();
  const { name, text } = req.body as { name: string; text: string };
  const maxId = data.messages.reduce((max, m) => Math.max(max, m.id), 0);
  data.messages.push({
    id: maxId + 1,
    name,
    text,
    timestamp: new Date().toISOString(),
  });
  saveData(data);
  res.json(data.messages);
});

// Blessings
app.get('/api/blessings', (_req, res) => {
  const data = loadData();
  res.json(data.blessings);
});

app.post('/api/blessings', (req, res) => {
  const data = loadData();
  const { from, content } = req.body as { from: string; content: string };
  const maxId = data.blessings.reduce((max, b) => Math.max(max, b.id), 0);
  data.blessings.push({
    id: maxId + 1,
    from,
    content,
    timestamp: new Date().toISOString(),
  });
  saveData(data);
  res.json(data.blessings);
});

app.put('/api/blessings/:id', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id);
  const { content } = req.body as { content: string };
  const blessing = data.blessings.find((b) => b.id === id);
  if (!blessing) {
    res.status(404).json({ error: 'Blessing not found' });
    return;
  }
  blessing.content = content;
  saveData(data);
  res.json(data.blessings);
});

// Photos
app.get('/api/photos', (_req, res) => {
  const data = loadData();
  res.json(data.photos);
});

app.post('/api/photos', upload.single('image'), (req, res) => {
  const data = loadData();
  const file = req.file;
  if (!file) {
    res.status(400).json({ error: 'No image uploaded' });
    return;
  }
  const uploadedBy = (req.body as { uploadedBy?: string }).uploadedBy || '';
  const caption = (req.body as { caption?: string }).caption || '';
  const maxId = data.photos.reduce((max, p) => Math.max(max, p.id), 0);
  data.photos.push({
    id: maxId + 1,
    url: `/uploads/${file.filename}`,
    uploadedBy,
    caption,
    timestamp: new Date().toISOString(),
  });
  saveData(data);
  res.json(data.photos);
});

app.delete('/api/photos/:id', (req, res) => {
  const data = loadData();
  const id = parseInt(req.params.id);
  data.photos = data.photos.filter((p) => p.id !== id);
  saveData(data);
  res.json(data.photos);
});

// --- Serve static files in production ---
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// SPA fallback - must be after all API routes and static files
app.get('{*path}', (_req, res) => {
  if (fs.existsSync(distPath)) {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```


## `src/App.tsx`

```typescript
import { useEffect } from 'react';
import { useUser } from './context/UserContext';
import { ToastProvider } from './components/Toast';
import UserSelect from './components/UserSelect';
import Hero from './components/Hero';
import BrideSection from './components/BrideSection';
import BridesmaidsList from './components/BridesmaidsList';
import Timeline from './components/Timeline';
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
```


## `src/components/BrideSection.tsx`

```typescript
import SectionHeader from './SectionHeader';
import { BRIDESMAIDS } from '../data';
import { Crown } from '@phosphor-icons/react';

export default function BrideSection() {
  const liz = BRIDESMAIDS.find((b) => b.isBride);
  return (
    <section className="bride-section reveal">
      <SectionHeader title="Our Bride" icon={<Crown size={24} weight="thin" color="var(--gold)" />} />
      <div className="bride-card card">
        <div className="bride-avatar-wrapper">
          {liz && (
            <img src={liz.image} alt={liz.name} className="bride-avatar-img" loading="lazy" />
          )}
        </div>
        <blockquote className="bride-message">
          Join me for two days of fun as a token of appreciation for being my bridesmaids.
        </blockquote>
        <p className="bride-tagline">I can't say I do without you!</p>
      </div>
    </section>
  );
}
```


## `src/components/BridesmaidCard.tsx`

```typescript
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
          <p className="bridesmaid-dedication">{bridesmaid.dedication}</p>
        </div>
      </div>
    </div>
  );
}
```


## `src/components/BridesmaidsList.tsx`

```typescript
import { BRIDESMAIDS } from '../data';
import SectionHeader from './SectionHeader';
import BridesmaidCard from './BridesmaidCard';
import { Flower } from '@phosphor-icons/react';

export default function BridesmaidsList() {
  const bridesmaids = BRIDESMAIDS.filter((b) => !b.isBride);

  return (
    <section className="bridesmaids-section reveal">
      <SectionHeader title="The Bridesmaids" icon={<Flower size={24} weight="thin" color="var(--gold)" />} />
      <div className="bridesmaids-grid">
        {bridesmaids.map((b) => (
          <BridesmaidCard key={b.key} bridesmaid={b} />
        ))}
      </div>
    </section>
  );
}
```


## `src/components/Countdown.tsx`

```typescript
import { useState, useEffect } from 'react';
import { EVENT_DATE } from '../data';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units: Array<{ label: string; value: number }> = [
    { label: 'ימים', value: timeLeft.days },
    { label: 'שעות', value: timeLeft.hours },
    { label: 'דקות', value: timeLeft.minutes },
    { label: 'שניות', value: timeLeft.seconds },
  ];

  return (
    <div className="countdown">
      {units.map((u) => (
        <div key={u.label} className="countdown-unit">
          <span className="countdown-value">{String(u.value).padStart(2, '0')}</span>
          <span className="countdown-label">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
```


## `src/components/FloralBorder.tsx`

```typescript
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
```


## `src/components/FloralDivider.tsx`

```typescript
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
```


## `src/components/Gallery.tsx`

```typescript
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
```


## `src/components/Hero.tsx`

```typescript
import { useState, useEffect, useRef } from 'react';
import FloralBorder from './FloralBorder';
import Countdown from './Countdown';

const VIDEOS = ['/videos/cake.mp4', '/videos/yoga.mp4'];
const CROSSFADE_DURATION = 2000; // ms
const VIDEO_DISPLAY_TIME = 8000; // ms per video before crossfade

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current
      setOpacity(0);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
        setOpacity(1);
      }, CROSSFADE_DURATION);
    }, VIDEO_DISPLAY_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section reveal">
      {/* Video background layer */}
      <div className="hero-video-layer">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[i] = el; }}
            className="hero-video"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            style={{
              opacity: i === activeIndex ? opacity : 0,
            }}
          />
        ))}
        <div className="hero-video-overlay" />
      </div>

      {/* Content on top */}
      <div className="hero-inner">
        <FloralBorder />
        <div className="hero-content">
          <h1 className="hero-title">Bridesmaids Club</h1>
          <p className="hero-subtitle">YOU ARE INVITED TO</p>
          <h2 className="hero-bride-name">liz's</h2>
          <p className="hero-event-name">BACHELORETTE DAY'S</p>
          <div className="hero-details">
            <p>14-15 TH MAY 2026</p>
            <p>EYANOT SAPIR B&B</p>
            <p>KIRYAT ANAVIM, JERUSALEM</p>
          </div>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
```


## `src/components/MessageWall.tsx`

```typescript
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
```


## `src/components/RSVP.tsx`

```typescript
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
```


## `src/components/SectionHeader.tsx`

```typescript
import type { ReactNode } from 'react';
import FloralDivider from './FloralDivider';

interface SectionHeaderProps {
  title: string;
  icon?: ReactNode;
}

export default function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {icon && <span className="section-header-icon">{icon}</span>}
      <h2 className="section-header-title">{title}</h2>
      <FloralDivider />
    </div>
  );
}
```


## `src/components/ShoppingList.tsx`

```typescript
import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useSharedData, type Task } from '../hooks/useSharedData';
import { useToast } from './Toast';
import SectionHeader from './SectionHeader';
import {
  Wine,
  ForkKnife,
  Flower,
  Camera,
  GameController,
  Package,
  ShoppingBag,
  X,
} from '@phosphor-icons/react';
import type { ComponentType } from 'react';

type PhosphorIcon = ComponentType<{ size?: number; weight?: 'thin' | 'light' | 'regular' | 'bold'; color?: string }>;

const CATEGORY_LABELS: Record<string, string> = {
  drinks: 'שתייה',
  food: 'אוכל',
  decor: 'קישוטים',
  gear: 'ציוד',
  games: 'משחקים',
  other: 'אחר',
};

const CATEGORY_ICONS: Record<string, PhosphorIcon> = {
  drinks: Wine,
  food: ForkKnife,
  decor: Flower,
  gear: Camera,
  games: GameController,
  other: Package,
};

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
        {Object.entries(grouped).map(([cat, items]) => {
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
```


## `src/components/Timeline.tsx`

```typescript
import { SCHEDULE_THURSDAY, SCHEDULE_FRIDAY, type ScheduleItem } from '../data';
import SectionHeader from './SectionHeader';
import {
  CarSimple,
  Wine,
  HandHeart,
  Dress,
  ForkKnife,
  Gift,
  PersonSimpleTaiChi,
  Coffee,
  MapTrifold,
  Sparkle,
} from '@phosphor-icons/react';
import type { ComponentType } from 'react';

// Map schedule title (Hebrew) to a Phosphor icon component
const ICON_MAP: Record<string, ComponentType<{ size?: number; weight?: 'thin' | 'light' | 'regular' | 'bold'; color?: string }>> = {
  'הגעה לעינות ספיר': CarSimple,
  'בריכה וג\'קוזי': Wine,
  'עיסוי לכלה': HandHeart,
  'מתלבשות': Dress,
  'ארוחת ערב': ForkKnife,
  'משחקים ומתנות': Gift,
  'יוגה ליד הבריכה': PersonSimpleTaiChi,
  'קפה וארוחת בוקר': Coffee,
  'סיור': MapTrifold,
};

function TimelineDay({ title, items }: { title: string; items: ScheduleItem[] }) {
  return (
    <div className="timeline-day">
      <h3 className="timeline-day-title">{title}</h3>
      <div className="timeline-items">
        {items.map((item, i) => {
          const Icon = ICON_MAP[item.title] ?? Sparkle;
          return (
            <div key={i} className="timeline-item card">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-icon">
                <Icon size={28} weight="thin" color="var(--burgundy)" />
              </div>
              <div className="timeline-content">
                <h4 className="timeline-item-title">{item.title}</h4>
                <p className="timeline-item-desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="timeline-section reveal">
      <SectionHeader title="The Plan" icon={<Sparkle size={24} weight="thin" color="var(--gold)" />} />
      <TimelineDay title="Thursday" items={SCHEDULE_THURSDAY} />
      <TimelineDay title="Friday" items={SCHEDULE_FRIDAY} />
    </section>
  );
}
```


## `src/components/Toast.tsx`

```typescript
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface ToastMessage {
  id: number;
  text: string;
  type: 'info' | 'success' | 'error';
}

interface ToastContextType {
  showToast: (text: string, type?: 'info' | 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((text: string, type: 'info' | 'success' | 'error' = 'info') => {
    const id = nextId++;
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.type}`}>
            {t.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextType {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
```


## `src/components/UserSelect.tsx`

```typescript
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
```


## `src/context/UserContext.tsx`

```typescript
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { BRIDESMAIDS, type Bridesmaid } from '../data';

const STORAGE_KEY = 'bachelorette_user';

interface UserContextType {
  currentUser: Bridesmaid | null;
  setUser: (key: string) => void;
  clearUser: () => void;
  isAdmin: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<Bridesmaid | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const found = BRIDESMAIDS.find((b) => b.key === saved);
      return found ?? null;
    }
    return null;
  });

  const setUser = useCallback((key: string) => {
    const found = BRIDESMAIDS.find((b) => b.key === key);
    if (found) {
      localStorage.setItem(STORAGE_KEY, key);
      setCurrentUser(found);
    }
  }, []);

  const clearUser = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setCurrentUser(null);
  }, []);

  const isAdmin = currentUser?.isBride ?? false;

  return (
    <UserContext.Provider value={{ currentUser, setUser, clearUser, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
```


## `src/data.ts`

```typescript
export interface Bridesmaid {
  key: string;
  name: string;
  isBride: boolean;
  dedication: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  desc: string;
}

export interface ShoppingItem {
  id: number;
  description: string;
  category: string;
  claimed_by: string | null;
}

export const BRIDESMAIDS: Bridesmaid[] = [
  { key: 'liz', name: 'LIZ', isBride: true, dedication: '', image: '/images/liz.jpeg' },
  { key: 'yahavit', name: 'YAHAVIT', isBride: false, dedication: '[הקדשה מליז]', image: '/images/yahavit.jpeg' },
  { key: 'stavit', name: 'STAVIT', isBride: false, dedication: '[הקדשה מליז]', image: '/images/stavit.jpeg' },
  { key: 'gali', name: 'GALI', isBride: false, dedication: '[הקדשה מליז]', image: '/images/gali.jpeg' },
  { key: 'nooniz', name: 'NOONIZ', isBride: false, dedication: '[הקדשה מליז]', image: '/images/nooniz.jpeg' },
];

export const SCHEDULE_THURSDAY: ScheduleItem[] = [
  { time: '15:00', title: 'הגעה לעינות ספיר', desc: 'מגיעות ומתארגנות!' },
  { time: '15:30', title: 'בריכה וג\'קוזי', desc: 'יין, נשנושים, והתחלה מפנקת.' },
  { time: '18:00', title: 'עיסוי לכלה', desc: 'פינוק מיוחד לליז.' },
  { time: '19:00', title: 'מתלבשות', desc: 'לוק לבן - כולנו בלבן!' },
  { time: '20:00', title: 'ארוחת ערב', desc: 'סושי, מסיבה ויין.' },
  { time: '21:00', title: 'משחקים ומתנות', desc: 'הפתעות וצחוקים.' },
];

export const SCHEDULE_FRIDAY: ScheduleItem[] = [
  { time: '8:00', title: 'יוגה ליד הבריכה', desc: 'להביא מזרן!' },
  { time: '9:00', title: 'מתלבשות', desc: 'שוב לוק לבן.' },
  { time: '10:00', title: 'קפה וארוחת בוקר', desc: 'קפה הרים' },
  { time: '12:00', title: 'סיור', desc: 'פארק כרמים או ממילא/הכותל.' },
];

export const DEFAULT_SHOPPING_ITEMS: ShoppingItem[] = [
  { id: 1, description: 'יין', category: 'drinks', claimed_by: null },
  { id: 2, description: 'פרוסקו/שמפניה', category: 'drinks', claimed_by: null },
  { id: 3, description: 'נשנושים ודברי כיבוד', category: 'food', claimed_by: null },
  { id: 4, description: 'קישוטים ובלונים', category: 'decor', claimed_by: null },
  { id: 5, description: 'מזרני יוגה (למי שאין)', category: 'gear', claimed_by: null },
  { id: 6, description: 'רמקול בלוטות\'', category: 'gear', claimed_by: null },
  { id: 7, description: 'מצלמת פולארויד + סרטים', category: 'gear', claimed_by: null },
  { id: 8, description: 'משחקי קלפים/קופסא', category: 'games', claimed_by: null },
  { id: 9, description: 'אביזרי צילום (כתר כלה, שלטים)', category: 'decor', claimed_by: null },
];

export const EVENT_DATE = new Date('2026-05-14T15:00:00+03:00');
```


## `src/hooks/useSharedData.tsx`

```typescript
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

export interface Task {
  id: number;
  description: string;
  category: string;
  claimed_by: string | null;
}

export interface Rsvp {
  name: string;
  timestamp: string;
}

export interface Message {
  id: number;
  name: string;
  text: string;
  timestamp: string;
}

export interface Blessing {
  id: number;
  from: string;
  content: string;
  timestamp: string;
}

export interface Photo {
  id: number;
  url: string;
  uploadedBy: string;
  caption: string;
  timestamp: string;
}

interface SharedData {
  tasks: Task[];
  rsvps: Rsvp[];
  messages: Message[];
  blessings: Blessing[];
  photos: Photo[];
  loading: boolean;
  refresh: () => void;
}

const SharedDataContext = createContext<SharedData | null>(null);

const POLL_INTERVAL = 5000;

export function SharedDataProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = useCallback(async () => {
    try {
      const res = await fetch('/api/all');
      if (!res.ok) return;
      const data = await res.json();
      setTasks(data.tasks ?? []);
      setRsvps(data.rsvps ?? []);
      setMessages(data.messages ?? []);
      setBlessings(data.blessings ?? []);
      setPhotos(data.photos ?? []);
    } catch {
      // silent fail on polling
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchAll]);

  return (
    <SharedDataContext.Provider value={{ tasks, rsvps, messages, blessings, photos, loading, refresh: fetchAll }}>
      {children}
    </SharedDataContext.Provider>
  );
}

export function useSharedData(): SharedData {
  const ctx = useContext(SharedDataContext);
  if (!ctx) throw new Error('useSharedData must be used within SharedDataProvider');
  return ctx;
}
```


## `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Heebo:wght@300;400;500;700&display=swap');

:root {
  --burgundy: #6B1C2A;
  --burgundy-light: #8B2E3D;
  --gold: #B8860B;
  --gold-light: #DAA520;
  --gold-dim: rgba(184, 134, 11, 0.12);
  --cream: #F5EDDA;
  --cream-dark: #EDE5CF;
  --deep-green: #2D5A3D;
  --dark-red: #8B0000;
  --text: #3D2B1F;
  --muted: #7A6B5D;
  --border: #D4C5B2;
  --card: #FAF5ED;
  --card-hover: #F5EFE5;
  --green: #27AE60;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  direction: rtl;
  font-family: 'Heebo', sans-serif;
  font-weight: 300;
  background-color: var(--cream);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 56px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  color: var(--burgundy);
}

#root {
  width: 100%;
  min-height: 100vh;
}

/* Container */
.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade animations */
.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.animate-fade-up {
  animation: fadeUp 0.6s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button styles */
.ripple-btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--burgundy);
  color: var(--cream);
}

.ripple-btn:hover {
  background-color: var(--burgundy-light);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(107, 28, 42, 0.3);
}

.ripple-btn:active {
  transform: translateY(0);
}

.ripple-btn.secondary {
  background-color: var(--card);
  color: var(--burgundy);
  border: 1px solid var(--border);
}

.ripple-btn.secondary:hover {
  background-color: var(--card-hover);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Card styles */
.card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  background-color: var(--card-hover);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

/* Section spacing */
section {
  padding: 3rem 0;
}

/* Header bar */
.header-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background-color: rgba(245, 237, 218, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.header-bar .user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: var(--burgundy);
}

.header-bar .user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--gold);
}

.header-bar .switch-user {
  font-size: 0.85rem;
  color: var(--muted);
  cursor: pointer;
  border: none;
  background: none;
  text-decoration: underline;
  font-family: 'Heebo', sans-serif;
}

.header-bar .switch-user:hover {
  color: var(--burgundy);
}

/* Toast */
.toast-container {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.toast {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: var(--burgundy);
  color: var(--cream);
  font-size: 0.9rem;
  animation: fadeUp 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.toast.success {
  background-color: var(--green);
}

.toast.error {
  background-color: var(--dark-red);
}

/* User select screen */
.user-select-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
  padding: 2rem;
  text-align: center;
}

.user-select-screen h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.user-select-screen p {
  color: var(--muted);
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.user-select-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 500px;
  width: 100%;
}

.user-select-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem;
  background-color: var(--card);
  border: 2px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Heebo', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: var(--burgundy);
}

.user-select-card:hover {
  border-color: var(--burgundy);
  background-color: var(--card-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(107, 28, 42, 0.12);
}

.user-select-card .avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--cream-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 2px solid var(--gold);
}

/* ===== Hero Section ===== */
.hero-section {
  position: relative;
  padding: 0;
  overflow: hidden;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Video background */
.hero-video-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 2s ease-in-out;
  filter: blur(2px) saturate(0.7) brightness(1.1);
}

.hero-video-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(245, 237, 218, 0.45) 0%,
    rgba(245, 237, 218, 0.6) 50%,
    rgba(245, 237, 218, 0.8) 100%
  );
  backdrop-filter: blur(1px);
}

.hero-inner {
  position: relative;
  z-index: 1;
  padding: 3rem 2rem;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: var(--burgundy);
  line-height: 1.1;
  margin-bottom: 0.25rem;
  text-shadow:
    0 0 30px rgba(245, 237, 218, 0.8),
    0 0 60px rgba(245, 237, 218, 0.5),
    0 2px 4px rgba(107, 28, 42, 0.15);
}

.hero-subtitle {
  font-size: 0.85rem;
  letter-spacing: 3px;
  color: var(--text);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  text-shadow: 0 0 20px rgba(245, 237, 218, 0.9);
}

.hero-bride-name {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: var(--burgundy);
  font-style: italic;
  margin-bottom: 0.25rem;
  text-shadow:
    0 0 30px rgba(245, 237, 218, 0.8),
    0 0 60px rgba(245, 237, 218, 0.5),
    0 2px 4px rgba(107, 28, 42, 0.15);
}

.hero-event-name {
  font-size: 0.9rem;
  letter-spacing: 4px;
  color: var(--burgundy);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(245, 237, 218, 0.9);
}

.hero-details {
  margin-bottom: 2rem;
}

.hero-details p {
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: var(--text);
  line-height: 1.8;
  text-shadow: 0 0 20px rgba(245, 237, 218, 0.9);
}

/* ===== Countdown ===== */
.countdown {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  direction: ltr;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-value {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: var(--burgundy);
  line-height: 1;
  min-width: 56px;
  text-align: center;
  text-shadow:
    0 0 30px rgba(245, 237, 218, 0.8),
    0 2px 4px rgba(107, 28, 42, 0.15);
}

.countdown-label {
  font-size: 0.75rem;
  color: var(--text);
  margin-top: 0.25rem;
  letter-spacing: 1px;
  text-shadow: 0 0 20px rgba(245, 237, 218, 0.9);
}

/* ===== Floral Border ===== */
.floral-border {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.floral-border-top {
  position: absolute;
  top: 0;
  left: 8px;
  right: 8px;
  height: 20px;
}

.floral-border-bottom {
  position: absolute;
  bottom: 0;
  left: 8px;
  right: 8px;
  height: 20px;
  transform: scaleY(-1);
}

.floral-border-right {
  position: absolute;
  top: 8px;
  right: 0;
  bottom: 8px;
  width: 20px;
}

.floral-border-left {
  position: absolute;
  top: 8px;
  left: 0;
  bottom: 8px;
  width: 20px;
  transform: scaleX(-1);
}

.floral-corner {
  position: absolute;
  width: 28px;
  height: 28px;
}

.floral-corner-tr {
  top: 0;
  right: 0;
}

.floral-corner-tl {
  top: 0;
  left: 0;
  transform: scaleX(-1);
}

.floral-corner-br {
  bottom: 0;
  right: 0;
  transform: scaleY(-1);
}

.floral-corner-bl {
  bottom: 0;
  left: 0;
  transform: scale(-1, -1);
}

/* ===== Floral Divider ===== */
.floral-divider {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

.floral-divider svg {
  width: 280px;
  height: 22px;
}

/* ===== Section Header ===== */
.section-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.section-header-icon {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  margin-bottom: 0.25rem;
}

.section-header-title {
  font-family: 'Great Vibes', cursive;
  font-size: 1.75rem;
  color: var(--burgundy);
  margin-bottom: 0.5rem;
}

.section-header .floral-divider {
  padding: 0.25rem 0;
}

.section-header .floral-divider svg {
  width: 200px;
  height: 18px;
}

/* ===== Bride Section ===== */
.bride-section {
  padding: 2rem 0;
}

.bride-card {
  text-align: center;
  padding: 2rem 1.5rem;
}

.bride-avatar-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.bride-avatar-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--cream-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 3px solid var(--gold);
  box-shadow: 0 4px 16px rgba(184, 134, 11, 0.15);
}

.bride-avatar-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--gold);
  box-shadow: 0 4px 16px rgba(184, 134, 11, 0.2);
}

.bride-message {
  font-size: 1.05rem;
  color: var(--text);
  line-height: 1.8;
  max-width: 500px;
  margin: 0 auto 1rem;
  font-style: italic;
  border-right: 3px solid var(--gold);
  padding-right: 1rem;
  text-align: right;
}

.bride-tagline {
  font-family: 'Great Vibes', cursive;
  font-size: 1.1rem;
  color: var(--burgundy);
  font-style: italic;
}

/* ===== Bridesmaids Section ===== */
.bridesmaids-section {
  padding: 2rem 0;
}

.bridesmaids-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.bridesmaid-card {
  text-align: center;
  padding: 1.5rem 1rem;
}

.bridesmaid-avatar-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.bridesmaid-avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--cream-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 2px solid var(--gold);
}

.bridesmaid-avatar-img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--gold);
  box-shadow: 0 2px 10px rgba(184, 134, 11, 0.18);
}

.bridesmaid-name {
  font-family: 'Great Vibes', cursive;
  font-size: 1.1rem;
  color: var(--burgundy);
  margin-bottom: 0.5rem;
}

.bridesmaid-dedication {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
}

/* Flip card */
.bridesmaid-card-flip {
  perspective: 800px;
  cursor: pointer;
  min-height: 180px;
}

.bridesmaid-card-inner {
  position: relative;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
  min-height: 180px;
}

.bridesmaid-card-flip.flipped .bridesmaid-card-inner {
  transform: rotateY(180deg);
}

.bridesmaid-card-front,
.bridesmaid-card-back {
  backface-visibility: hidden;
}

.bridesmaid-card-front {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bridesmaid-card-back {
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  text-align: center;
}

.bridesmaid-card-back .bridesmaid-dedication {
  font-style: italic;
  color: var(--text);
  line-height: 1.7;
  font-size: 0.95rem;
}

.bridesmaid-flip-hint {
  font-size: 0.7rem;
  color: var(--muted);
  margin-top: 0.5rem;
  opacity: 0.6;
}

/* ===== Timeline Section ===== */
.timeline-section {
  padding: 2rem 0;
}

.timeline-day {
  margin-bottom: 2rem;
}

.timeline-day:last-child {
  margin-bottom: 0;
}

.timeline-day-title {
  font-family: 'Great Vibes', cursive;
  font-size: 1.3rem;
  color: var(--burgundy);
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
}

.timeline-day-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background-color: var(--gold);
  margin: 0.5rem auto 0;
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
}

.timeline-time {
  font-family: 'Great Vibes', cursive;
  font-size: 1rem;
  color: var(--burgundy);
  min-width: 50px;
  text-align: center;
  direction: ltr;
}

.timeline-icon {
  font-size: 1.5rem;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-content {
  flex: 1;
}

.timeline-item-title {
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 0.15rem;
}

.timeline-item-desc {
  font-size: 0.85rem;
  color: var(--muted);
}

/* ===== RSVP Section ===== */
.rsvp-section {
  padding: 2rem 0;
}

.rsvp-content {
  text-align: center;
}

.rsvp-btn {
  font-size: 1.15rem;
  padding: 1rem 2.5rem;
}

.rsvp-confirmed {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.rsvp-status {
  font-family: 'Great Vibes', cursive;
  font-size: 1.3rem;
  color: var(--green);
}

.rsvp-list {
  margin-top: 1.5rem;
}

.rsvp-list-title {
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 0.75rem;
}

.rsvp-avatars {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.rsvp-avatar-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--burgundy);
  font-weight: 500;
}

.rsvp-chip-icon {
  font-size: 0.9rem;
}

/* ===== Shopping List Section ===== */
.shopping-section {
  padding: 2rem 0;
}

.shopping-admin {
  text-align: center;
  margin-bottom: 1.25rem;
}

.shopping-add-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
}

.shopping-input {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: 'Heebo', sans-serif;
  font-size: 0.95rem;
  background-color: var(--cream);
  color: var(--text);
  direction: rtl;
}

.shopping-input:focus {
  outline: none;
  border-color: var(--burgundy);
}

.shopping-select {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: 'Heebo', sans-serif;
  font-size: 0.95rem;
  background-color: var(--cream);
  color: var(--text);
  direction: rtl;
}

.shopping-select:focus {
  outline: none;
  border-color: var(--burgundy);
}

.shopping-add-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.shopping-categories {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.shopping-category-title {
  font-family: 'Great Vibes', cursive;
  font-size: 1.4rem;
  color: var(--burgundy);
  margin-bottom: 0.5rem;
  padding-right: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.shopping-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.shopping-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
}

.shopping-item.claimed {
  opacity: 0.7;
  background-color: var(--cream-dark);
}

.shopping-item-desc {
  flex: 1;
  font-size: 0.95rem;
}

.shopping-item-action {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.shopping-claimed-by {
  font-size: 0.8rem;
  color: var(--green);
  font-weight: 500;
}

.shopping-claim-btn {
  font-size: 0.8rem;
  padding: 0.4rem 0.85rem;
}

.shopping-unclaim-btn {
  font-size: 0.75rem;
  color: var(--muted);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-family: 'Heebo', sans-serif;
}

.shopping-unclaim-btn:hover {
  color: var(--dark-red);
}

.shopping-delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
  font-size: 0.85rem;
  padding: 0.25rem;
  line-height: 1;
  font-family: 'Heebo', sans-serif;
}

.shopping-delete-btn:hover {
  color: var(--dark-red);
}

/* ===== Message Wall Section ===== */
.message-wall-section {
  padding: 2rem 0;
}

.message-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 1.25rem;
}

.message-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: 'Heebo', sans-serif;
  font-size: 0.95rem;
  background-color: var(--cream);
  color: var(--text);
  resize: vertical;
  min-height: 80px;
  direction: rtl;
}

.message-textarea:focus {
  outline: none;
  border-color: var(--burgundy);
}

.message-send-btn {
  align-self: flex-start;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.message-card {
  padding: 1rem 1.25rem;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.message-author {
  font-weight: 500;
  color: var(--burgundy);
  font-size: 0.9rem;
}

.message-date {
  font-size: 0.75rem;
  color: var(--muted);
}

.message-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text);
  white-space: pre-wrap;
}

/* ===== Gallery Section ===== */
.gallery-section {
  padding: 2rem 0;
}

.gallery-upload {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1.25rem;
}

.gallery-upload-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background-color: var(--burgundy);
  color: var(--cream);
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Heebo', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.gallery-upload-label:hover {
  background-color: var(--burgundy-light);
}

.gallery-upload-icon {
  font-size: 1.1rem;
}

.gallery-file-input {
  display: none;
}

.gallery-caption-input {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: 'Heebo', sans-serif;
  font-size: 0.9rem;
  background-color: var(--cream);
  color: var(--text);
  text-align: center;
  direction: rtl;
}

.gallery-caption-input:focus {
  outline: none;
  border-color: var(--burgundy);
}

.gallery-uploading {
  font-size: 0.85rem;
  color: var(--muted);
}

.gallery-grid {
  columns: 2;
  column-gap: 0.75rem;
}

.gallery-item {
  position: relative;
  break-inside: avoid;
  margin-bottom: 0.75rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  display: block;
  border-radius: 10px;
}

.gallery-item-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0.75rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  color: white;
  font-size: 0.8rem;
  border-radius: 0 0 10px 10px;
}

.gallery-delete-btn {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(139, 0, 0, 0.8);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.gallery-item:hover .gallery-delete-btn {
  opacity: 1;
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--burgundy);
  color: var(--cream);
  border: 2px solid var(--cream);
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.lightbox-caption {
  color: var(--cream);
  font-size: 0.95rem;
  margin-top: 0.75rem;
}

.lightbox-author {
  color: var(--muted);
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

/* ===== Footer ===== */
.site-footer {
  text-align: center;
  padding: 2rem 0 3rem;
}

.footer-quote {
  font-family: 'Great Vibes', cursive;
  font-size: 1.25rem;
  color: var(--burgundy);
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.footer-details {
  font-size: 0.85rem;
  color: var(--muted);
}

/* ===== Mobile Responsive ===== */
@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-bride-name {
    font-size: 2.2rem;
  }

  .countdown {
    gap: 1rem;
  }

  .countdown-value {
    font-size: 2rem;
    min-width: 44px;
  }

  .countdown-label {
    font-size: 0.65rem;
  }

  .hero-inner {
    padding: 2.5rem 1.5rem;
  }

  .user-select-screen h1 {
    font-size: 2rem;
  }

  .user-select-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-header-title {
    font-size: 1.5rem;
  }

  .bridesmaids-grid {
    grid-template-columns: 1fr;
  }

  .bride-avatar-placeholder {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  .timeline-item {
    gap: 0.75rem;
    padding: 0.85rem 1rem;
  }

  .timeline-time {
    font-size: 0.9rem;
    min-width: 42px;
  }

  .timeline-icon {
    font-size: 1.25rem;
    min-width: 28px;
  }

  .shopping-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .shopping-item-action {
    width: 100%;
    justify-content: flex-end;
  }

  .rsvp-btn {
    width: 100%;
  }

  .message-send-btn {
    width: 100%;
  }

  .gallery-grid {
    columns: 1;
  }

  .lightbox-close {
    top: -8px;
    right: -8px;
  }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--cream);
}

::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--muted);
}
```


## `src/main.tsx`

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { UserProvider } from './context/UserContext'
import { SharedDataProvider } from './hooks/useSharedData'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <SharedDataProvider>
        <App />
      </SharedDataProvider>
    </UserProvider>
  </StrictMode>,
)
```


## `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2023",
    "useDefineForClassFields": true,
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```


## `tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```


## `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```


## `tsconfig.server.json`

```json
{
  "compilerOptions": {
    "target": "ES2023",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist-server",
    "rootDir": "./server",
    "types": ["node"]
  },
  "include": ["server"]
}
```


## `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
```

