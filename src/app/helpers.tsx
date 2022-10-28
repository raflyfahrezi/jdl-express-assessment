import { PageWrapper } from '@/layout'
import { createBrowserRouter } from 'react-router-dom'

import { Home, Product } from '@/modules'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageWrapper title='Home'>
        <Home />
      </PageWrapper>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <PageWrapper>
        <Product />
      </PageWrapper>
    ),
  },
])
