import { put } from 'redux-saga/effects'

import { axiosGet } from '@/utils'
import { IProductResponse } from '@/models'

import { IProductActionReturn } from '../action/types'
import { SET_PRODUCT, SET_PRODUCT_CATEGORIES } from '../action'

export const checkQueryOfProductCategory = (query: string) => {
  if (query === 'all') {
    return '/products'
  }
  return `/products/category/${query}`
}

export function* getProducts() {
  try {
    const { data } = yield axiosGet<IProductResponse>('/products', {})
    const response = data as IProductResponse

    yield put({
      type: SET_PRODUCT,
      data: response.products,
    })
  } catch {
    //
  }
}

export function* getProductsCategories() {
  try {
    const { data } = yield axiosGet<string[]>('/products/categories', {})
    const response = data as string[]

    yield put({
      type: SET_PRODUCT_CATEGORIES,
      data: response,
    })
  } catch {
    //
  }
}

export function* getProductByCategory(query: IProductActionReturn) {
  try {
    const { data } = yield axiosGet<IProductResponse>(
      checkQueryOfProductCategory(query.data),
      {}
    )
    const response = data as IProductResponse

    yield put({
      type: SET_PRODUCT,
      data: response.products,
    })
  } catch {
    //
  }
}
