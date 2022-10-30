import React from 'react'

import { INext } from './types'

const Next = ({color}:INext) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
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
        d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
      />
    </svg>
  )
}

export default Next
