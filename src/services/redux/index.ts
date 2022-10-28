import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

import { productSaga } from './product'
import { combinedReducer } from './root'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: combinedReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(productSaga)

export * from './product'
