import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app'

import '@/styles/global.scss'

import '@fontsource/open-sans/400.css'
import '@fontsource/frank-ruhl-libre/400.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
