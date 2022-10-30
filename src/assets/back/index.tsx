import React from 'react'

import { IBack } from './types'

const Back = ({ color }: IBack) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      style={{ color: color ?? '' }}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
      />
    </svg>
  )
}

export default Back
