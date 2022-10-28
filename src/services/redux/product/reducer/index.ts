import { IProductState } from '@/models'

import { SET_PRODUCT } from '../action'
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
      }
    default:
      return state
  }
}
