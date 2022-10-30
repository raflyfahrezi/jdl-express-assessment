import { IProductState } from '@/models'

import { initialState } from '../state'
import { IProductActionReturn } from '../action/types'
import {
  SET_PRODUCT,
  SET_PRODUCT_KEYWORD,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_CATEGORIES,
  GET_PRODUCT_BY_KEYWORD,
  GET_PRODUCT_BY_CATEGORY,
} from '../action'

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
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        isLoadingProducts: true,
      }
    case GET_PRODUCT_BY_KEYWORD:
      return {
        ...state,
        category: '',
        isLoadingProducts: true,
      }
    case SET_PRODUCT_KEYWORD:
      return {
        ...state,
        keyword: action.data,
      }
    case SET_PRODUCT_CATEGORY:
      return {
        ...state,
        category: action.data,
        keyword: '',
      }
    default:
      return state
  }
}
