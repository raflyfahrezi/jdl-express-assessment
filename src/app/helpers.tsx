import { createBrowserRouter } from 'react-router-dom'

import { Home, Product } from '@/modules'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/product/:id', element: <Product /> },
])
