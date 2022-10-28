import { put } from 'redux-saga/effects'

import { axiosGet } from '@/utils'
import { IProductResponse } from '@/models'

import { SET_PRODUCT } from '../action'

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
