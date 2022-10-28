export interface IProductResponse {
  limit: number
  products: IProduct[]
  skip: number
  total: number
}

export interface IProduct {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export interface IProductState {
  isLoading: boolean
  products: IProduct[]
}

export interface IProductGenerator {
  config?: any
  data?: IProduct[]
  headers?: any
  request?: any
  status?: number
  statusText?: string
}