import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NewscontextProvider } from './context/Newscontext.jsx'

window.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty(
    "--cursor-x",
    `${e.clientX}px`
  );
  document.documentElement.style.setProperty(
    "--cursor-y",
    `${e.clientY}px`
  );
});


createRoot(document.getElementById('root')).render(
  <NewscontextProvider>
    <App />
  </NewscontextProvider>
)
