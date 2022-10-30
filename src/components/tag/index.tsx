import React from 'react'

import { ITag } from './types'

import './styles.scoped.scss'

const Tag = ({ children }: ITag) => {
  return (
    <div className='tag'>
      <p>{children}</p>
    </div>
  )
}

export default Tag
