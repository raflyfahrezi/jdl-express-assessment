import { IProductAction, TProductAction, IProductActionReturn } from './types'

export const GET_PRODUCT: TProductAction = 'GET_PRODUCT'
export const SET_PRODUCT: TProductAction = 'SET_PRODUCT'
export const GET_PRODUCT_CATEGORIES: TProductAction = 'GET_PRODUCT_CATEGORIES'
export const SET_PRODUCT_CATEGORIES: TProductAction = 'SET_PRODUCT_CATEGORIES'

export const productAction: IProductAction = {
  GET_PRODUCT: (): IProductActionReturn => {
    return {
      type: 'GET_PRODUCT',
    }
  },
  SET_PRODUCT: (): IProductActionReturn => {
    return {
      type: 'SET_PRODUCT',
    }
  },
  GET_PRODUCT_CATEGORIES: (): IProductActionReturn => {
    return {
      type: 'GET_PRODUCT_CATEGORIES',
    }
  },
  SET_PRODUCT_CATEGORIES: (): IProductActionReturn => {
    return {
      type: 'SET_PRODUCT_CATEGORIES',
    }
  },
}
