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
// In production on Railway, set UPLOADS_PATH to a mounted volume (e.g. /data/uploads)
const UPLOADS_DIR = process.env.UPLOADS_PATH || path.join(__dirname, '..', 'public', 'uploads');
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
  pollVotes: Array<{
    name: string;
    option: string;
    timestamp: string;
  }>;
}

// In production on Railway, set DATA_PATH to a mounted volume file (e.g. /data/data.json)
const DATA_FILE = process.env.DATA_PATH || path.join(__dirname, '..', 'data.json');

// Ensure DATA_FILE directory exists (for volume paths)
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const DEFAULT_TASKS = [
  { id: 1, description: 'גומי', category: 'food', claimed_by: null },
  { id: 2, description: 'חטיפים', category: 'food', claimed_by: null },
  { id: 3, description: 'קרקרים', category: 'food', claimed_by: null },
  { id: 4, description: 'גבינות קשות/שמנת', category: 'food', claimed_by: null },
  { id: 5, description: 'שוקולדים', category: 'food', claimed_by: null },
  { id: 6, description: 'יין', category: 'drinks', claimed_by: null },
  { id: 7, description: 'פרוסקו/שמפניה', category: 'drinks', claimed_by: null },
  { id: 8, description: 'מזרני יוגה (למי שאין)', category: 'gear', claimed_by: null },
  { id: 9, description: 'רמקול למוזיקה', category: 'gear', claimed_by: null },
  { id: 10, description: 'מצלמת פולרואיד', category: 'gear', claimed_by: null },
];

function loadData(): DataStore {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return ensureDataShape(JSON.parse(raw) as DataStore);
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
    pollVotes: [],
  };
}

function ensureDataShape(data: DataStore): DataStore {
  if (!Array.isArray(data.pollVotes)) data.pollVotes = [];
  return data;
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

// Poll
app.get('/api/polls', (_req, res) => {
  const data = loadData();
  res.json(data.pollVotes);
});

app.post('/api/polls/vote', (req, res) => {
  const data = loadData();
  const { name, option } = req.body as { name: string; option: string };
  if (!name || !option) {
    res.status(400).json({ error: 'Missing name or option' });
    return;
  }
  // Upsert: one vote per person
  data.pollVotes = data.pollVotes.filter((v) => v.name !== name);
  data.pollVotes.push({ name, option, timestamp: new Date().toISOString() });
  saveData(data);
  res.json(data.pollVotes);
});

app.delete('/api/polls/vote', (req, res) => {
  const data = loadData();
  const { name } = req.body as { name: string };
  if (!name) {
    res.status(400).json({ error: 'Missing name' });
    return;
  }
  data.pollVotes = data.pollVotes.filter((v) => v.name !== name);
  saveData(data);
  res.json(data.pollVotes);
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
