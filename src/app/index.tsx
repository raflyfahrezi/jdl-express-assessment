/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useDispatch } from 'react-redux'

import { productAction } from '@/services'

import { router } from './helpers'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(productAction.GET_PRODUCT())
    dispatch<any>(productAction.GET_PRODUCT_CATEGORIES())
  }, [])

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
