import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './components/App/App'

createRoot(document.getElementById('root')).render(
  <Router
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
    <App />
  </Router>,
)
