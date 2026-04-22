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
