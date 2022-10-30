import { IProductState } from '@/models'

export const initialState: IProductState = {
  keyword: '',
  category: '',
  products: [],
  categories: [],
  isLoadingProducts: true,
  isLoadingCategories: true,
}
