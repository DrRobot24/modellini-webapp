import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import '@aws-amplify/ui-react/styles.css';  
import { ThemeProvider } from "@aws-amplify/ui-react";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)