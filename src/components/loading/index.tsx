import React from 'react'

import { LoadingIcon } from '@/assets'

import { ILoading } from './types'
import { getSizeClassName } from './helpers'

import './styles.scoped.scss'

const Loading = ({ size }: ILoading) => {
  return (
    <div className={`loading ${getSizeClassName(size)}`}>
      <LoadingIcon />
    </div>
  )
}

export default Loading
