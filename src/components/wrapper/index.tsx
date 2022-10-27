import React from 'react'

import { IWrapper } from './types'

import './styles.scoped.scss'

const Wrapper = ({ children }: IWrapper) => {
  return <div className='wrapper'>{children}</div>
}

export default Wrapper
