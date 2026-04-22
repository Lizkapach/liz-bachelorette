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
