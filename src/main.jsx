import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ToolProvider from './components/ContextTools.jsx'
import TextEditorProvider from './components/context.jsx'
import HelpProvider from './components/contextHelp.jsx'
import "./components/init"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToolProvider>
      <TextEditorProvider>
        <HelpProvider>
       <Router>
        <App />
       </Router>
       </HelpProvider>
     </TextEditorProvider>
    </ToolProvider>
  </React.StrictMode>,
)
