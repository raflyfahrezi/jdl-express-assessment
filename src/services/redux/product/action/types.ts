export type TProductAction =
  | 'GET_PRODUCT'
  | 'SET_PRODUCT'
  | 'GET_PRODUCT_CATEGORIES'
  | 'SET_PRODUCT_CATEGORIES'

export interface IProductAction {
  GET_PRODUCT: () => void
  SET_PRODUCT: () => void
  GET_PRODUCT_CATEGORIES: () => void
  SET_PRODUCT_CATEGORIES: () => void
}

export interface IProductActionReturn {
  type: TProductAction
  data?: any
}
