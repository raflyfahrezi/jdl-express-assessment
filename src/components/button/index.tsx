import React from 'react'

import { IButton } from './types'

import './styles.scoped.scss'

const Button = ({ type, children, ...props }: IButton) => {
  return (
    <button type={type} className='button' {...props}>
      {children}
    </button>
  )
}

export default Button
