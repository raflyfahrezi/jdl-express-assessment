import { TLoadingSize } from './types'

export const getSizeClassName = (size: TLoadingSize) => {
  switch (size) {
    case 'small':
      return 'loading-small'
    case 'medium':
      return 'loading-medium'
    case 'large':
      return 'loading-large'
    default:
      return ''
  }
}
