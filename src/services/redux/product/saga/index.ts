import { takeEvery } from 'redux-saga/effects'

import { getProducts } from './helpers'

import { GET_PRODUCT } from '../action'

export function* productSaga() {
  yield takeEvery(GET_PRODUCT, getProducts)
}
