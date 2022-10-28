import React from 'react'
import { useSelector } from 'react-redux'

import { IProduct } from '@/models'
import { Wrapper } from '@/components'

import './styles.scoped.scss'

const Home = () => {
  const products: IProduct[] = useSelector(
    (state: any) => state.productReducer.products
  )
  return (
    <Wrapper>
      <div className='home'>
        {products.map((item) => {
          return <p key={item.id}>{item.title}</p>
        })}
      </div>
    </Wrapper>
  )
}

export default Home
