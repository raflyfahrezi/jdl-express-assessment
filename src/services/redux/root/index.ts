import { combineReducers } from 'redux'

import { productReducer } from '../product'

export const combinedReducer = combineReducers({
  productReducer,
})
