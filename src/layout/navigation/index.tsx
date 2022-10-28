import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BackIcon } from '@/assets'
import { Input, Wrapper } from '@/components'

import './styles.scoped.scss'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className='navigation'>
      <Wrapper>
        <div className='navigation-content'>
          <div className='navigation-content__logo'>
            <p>Farhan's Shop</p>
          </div>
          <div>
            {location.pathname === '/' ? (
              <Input placeholder='Find product here' />
            ) : (
              <Link to='/' className='navigation-content__back'>
                <div className='navigation-content__backLogo'>
                  <BackIcon />
                </div>
                <p>Back to home</p>
              </Link>
            )}
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navigation
