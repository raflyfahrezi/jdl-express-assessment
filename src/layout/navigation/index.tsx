import React from 'react'

import { Wrapper } from '@/components'

import './styles.scoped.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <Wrapper>
        <div>
          <div>
            <p>Farhan's Shop</p>
          </div>
          <div>
            <input type='text' />
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navigation
