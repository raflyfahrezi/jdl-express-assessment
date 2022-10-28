import React from 'react'

import { IButton } from './types'

import './styles.scoped.scss'

const Button = ({ children, ...props }: IButton) => {
  return (
    <button className='button' {...props}>
      {children}
    </button>
  )
}

export default Button
