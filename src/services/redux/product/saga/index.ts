import { takeEvery } from 'redux-saga/effects'

import {
  getProducts,
  getProductByKeyword,
  getProductByCategory,
  getProductsCategories,
} from './helpers'

import {
  GET_PRODUCT,
  GET_PRODUCT_CATEGORIES,
  GET_PRODUCT_BY_KEYWORD,
  GET_PRODUCT_BY_CATEGORY,
} from '../action'

export function* productSaga() {
  yield takeEvery(GET_PRODUCT, getProducts)
  yield takeEvery(GET_PRODUCT_BY_KEYWORD, getProductByKeyword)
  yield takeEvery(GET_PRODUCT_CATEGORIES, getProductsCategories)
  yield takeEvery(GET_PRODUCT_BY_CATEGORY, getProductByCategory)
}
