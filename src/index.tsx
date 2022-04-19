import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { LocalContextProvider } from '@/contexts/local'

import '@/styles/index.css'

const root = createRoot(
  document.getElementById('root') ?? new DocumentFragment()
)

root.render(
  <StrictMode>
    <LocalContextProvider>
      <App />
    </LocalContextProvider>
  </StrictMode>
)
