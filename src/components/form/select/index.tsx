import React from 'react'

import { ISelect } from './types'

import './styles.scoped.scss'

const Select = ({ value, children, placeholder, ...props }: ISelect) => {
  return (
    <select value={value ?? ''} className='select' {...props}>
      {placeholder && (
        <option value='' disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  )
}

export default Select
