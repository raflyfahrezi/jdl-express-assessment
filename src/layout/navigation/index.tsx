import React from 'react'

import { Input, Wrapper } from '@/components'

import './styles.scoped.scss'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <Wrapper>
        <div className='navigation-content'>
          <div className='navigation-content__logo'>
            <p>Farhan's Shop</p>
          </div>
          <div>
            <Input placeholder='Find product here' />
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navigation
