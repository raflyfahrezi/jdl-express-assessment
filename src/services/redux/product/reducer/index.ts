import { IProductState } from '@/models'

import { SET_PRODUCT, SET_PRODUCT_CATEGORIES } from '../action'
import { initialState } from '../state'
import { IProductActionReturn } from '../action/types'

export const productReducer = (
  state = { ...initialState },
  action: IProductActionReturn
): IProductState => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: action.data,
        isLoadingProducts: false,
      }
    case SET_PRODUCT_CATEGORIES:
      return {
        ...state,
        categories: action.data,
        isLoadingCategories: false,
      }
    default:
      return state
  }
}
