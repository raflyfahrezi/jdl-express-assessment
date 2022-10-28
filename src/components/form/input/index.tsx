import React from 'react'

import { IInput } from './types'

import './styles.scoped.scss'

const Input = ({ ...props }: IInput) => {
  return <input className='input' {...props} />
}

export default Input
