import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ToolProvider from './components/ContextTools.jsx'
import TextEditorProvider from './components/context.jsx'
import HelpProvider from './components/contextHelp.jsx'
import "./components/init"
import DarkModeProvider from './components/ContextDarkMode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToolProvider>
      <TextEditorProvider>
        <HelpProvider>
          <DarkModeProvider>
            <Router>
                <App />
            </Router>
          </DarkModeProvider>
       </HelpProvider>
     </TextEditorProvider>
    </ToolProvider>
  </React.StrictMode>,
)
