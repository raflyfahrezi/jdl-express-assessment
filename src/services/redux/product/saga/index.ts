import { takeEvery } from 'redux-saga/effects'

import { getProducts, getProductsCategories } from './helpers'

import { GET_PRODUCT, GET_PRODUCT_CATEGORIES } from '../action'

export function* productSaga() {
  yield takeEvery(GET_PRODUCT, getProducts)
  yield takeEvery(GET_PRODUCT_CATEGORIES, getProductsCategories)
}
