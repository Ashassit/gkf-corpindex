import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import "odometer/themes/odometer-theme-default.css";
import App from './App.tsx'

if ('serviceWorker' in navigator) {
  // Force an immediate SW update check instead of waiting for browser schedule
  navigator.serviceWorker.ready.then(registration => {
    registration.update()
  })
  // Reload the page when a new SW takes over so users get fresh assets immediately
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload()
  })
}

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </HelmetProvider>,
)
