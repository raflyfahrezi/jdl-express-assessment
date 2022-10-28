export type TProductAction = 'GET_PRODUCT' | 'SET_PRODUCT'

export interface IProductAction {
  GET_PRODUCT: () => void
  SET_PRODUCT: () => void
}

export interface IProductActionReturn {
  type: TProductAction
  data?: any
}
