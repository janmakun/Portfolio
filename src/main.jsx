import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Restore the real path after the 404.html redirect trick
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== window.location.pathname) {
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>,
)