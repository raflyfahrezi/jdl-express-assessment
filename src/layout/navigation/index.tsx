import { Link, useLocation } from 'react-router-dom'
import React, { ChangeEvent, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { BackIcon } from '@/assets'
import { productAction } from '@/services'
import { Input, Button, Wrapper } from '@/components'

import './styles.scoped.scss'

const Navigation = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const keyword = useSelector((state: any) => state.productReducer.keyword)

  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch<any>(productAction.GET_PRODUCT_BY_KEYWORD(keyword))
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    dispatch<any>(productAction.SET_PRODUCT_KEYWORD(value))
  }

  return (
    <nav className='navigation'>
      <Wrapper>
        <div className='navigation-content'>
          <div className='navigation-content__logo'>
            <p>Farhan's Shop</p>
          </div>
          <div>
            {location.pathname === '/' ? (
              <form onSubmit={formHandler} className='navigation-search'>
                <Input
                  value={keyword}
                  onChange={searchHandler}
                  placeholder='Find product'
                />
                <Button type='submit'>Search</Button>
              </form>
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
