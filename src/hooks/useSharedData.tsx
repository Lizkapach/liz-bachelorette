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

export interface PollVote {
  name: string;
  option: string;
  timestamp: string;
}

interface SharedData {
  tasks: Task[];
  rsvps: Rsvp[];
  messages: Message[];
  blessings: Blessing[];
  photos: Photo[];
  pollVotes: PollVote[];
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
  const [pollVotes, setPollVotes] = useState<PollVote[]>([]);
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
      setPollVotes(data.pollVotes ?? []);
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
    <SharedDataContext.Provider value={{ tasks, rsvps, messages, blessings, photos, pollVotes, loading, refresh: fetchAll }}>
      {children}
    </SharedDataContext.Provider>
  );
}

export function useSharedData(): SharedData {
  const ctx = useContext(SharedDataContext);
  if (!ctx) throw new Error('useSharedData must be used within SharedDataProvider');
  return ctx;
}
