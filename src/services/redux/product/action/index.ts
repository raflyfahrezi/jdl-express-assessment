import { IProductAction, TProductAction, IProductActionReturn } from './types'

export const GET_PRODUCT: TProductAction = 'GET_PRODUCT'
export const SET_PRODUCT: TProductAction = 'SET_PRODUCT'
export const SET_PRODUCT_KEYWORD: TProductAction = 'SET_PRODUCT_KEYWORD'
export const SET_PRODUCT_CATEGORY: TProductAction = 'SET_PRODUCT_CATEGORY'
export const GET_PRODUCT_CATEGORIES: TProductAction = 'GET_PRODUCT_CATEGORIES'
export const SET_PRODUCT_CATEGORIES: TProductAction = 'SET_PRODUCT_CATEGORIES'
export const GET_PRODUCT_BY_KEYWORD: TProductAction = 'GET_PRODUCT_BY_KEYWORD'
export const GET_PRODUCT_BY_CATEGORY: TProductAction = 'GET_PRODUCT_BY_CATEGORY'

export const productAction: IProductAction = {
  GET_PRODUCT: (): IProductActionReturn => {
    return {
      type: GET_PRODUCT,
    }
  },
  SET_PRODUCT: (): IProductActionReturn => {
    return {
      type: SET_PRODUCT,
    }
  },
  SET_PRODUCT_KEYWORD: (keyword: string): IProductActionReturn => {
    return {
      type: SET_PRODUCT_KEYWORD,
      data: keyword,
    }
  },
  SET_PRODUCT_CATEGORY: (category: string): IProductActionReturn => {
    return {
      type: SET_PRODUCT_CATEGORY,
      data: category,
    }
  },
  GET_PRODUCT_CATEGORIES: (): IProductActionReturn => {
    return {
      type: GET_PRODUCT_CATEGORIES,
    }
  },
  SET_PRODUCT_CATEGORIES: (): IProductActionReturn => {
    return {
      type: SET_PRODUCT_CATEGORIES,
    }
  },
  GET_PRODUCT_BY_KEYWORD: (keyword: string): IProductActionReturn => {
    return {
      type: GET_PRODUCT_BY_KEYWORD,
      data: keyword,
    }
  },
  GET_PRODUCT_BY_CATEGORY: (category: string): IProductActionReturn => {
    return {
      type: GET_PRODUCT_BY_CATEGORY,
      data: category,
    }
  },
}
