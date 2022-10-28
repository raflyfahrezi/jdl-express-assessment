import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { PageWrapper } from '@/layout'

import { router } from './helpers'

const App = () => {
  return (
    <PageWrapper>
      <RouterProvider router={router} />
    </PageWrapper>
  )
}

export default App
