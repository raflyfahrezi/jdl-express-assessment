import { IProductAction, TProductAction, IProductActionReturn } from './types'

export const GET_PRODUCT: TProductAction = 'GET_PRODUCT'
export const SET_PRODUCT: TProductAction = 'SET_PRODUCT'

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
}
