import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ToolProvider from './components/ContextTools.jsx'
import TextEditorProvider from './components/context.jsx'
import "./components/init"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToolProvider>
      <TextEditorProvider>
       <Router>
        <App />
       </Router>
     </TextEditorProvider>
    </ToolProvider>
  </React.StrictMode>,
)
