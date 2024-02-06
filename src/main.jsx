import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/* CSS */
// Bootstrap
import 'bootstrap/scss/bootstrap.scss';
import "bootstrap/dist/js/bootstrap.bundle.min";
// Style
import '../index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <App />
</StrictMode>
)
