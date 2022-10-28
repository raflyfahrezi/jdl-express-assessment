import { IProductState } from '@/models'

export const initialState: IProductState = {
  products: [],
  categories: [],
  isLoadingProducts: true,
  isLoadingCategories: true,
}
