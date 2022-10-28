import axios from 'axios'

import { AxiosProps } from './types'

const baseURL: string = 'https://dummyjson.com'

export const axiosGet = <T>(
  url: string,
  { withoutBaseURL, ...config }: AxiosProps
) => {
  return axios.get<T>(url, {
    ...config,
    baseURL: withoutBaseURL ? '' : baseURL,
  })
}
