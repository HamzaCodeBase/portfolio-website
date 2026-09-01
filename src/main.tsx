import { Analytics } from '@vercel/analytics/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { printConsoleGreeting } from './lib/console-greeting'
import './index.css'

printConsoleGreeting()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {import.meta.env.PROD && <Analytics />}
  </StrictMode>,
)
