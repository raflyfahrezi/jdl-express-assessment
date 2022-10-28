import React from 'react'
import { useSelector } from 'react-redux'

import { IProduct } from '@/models'
import { Card, Wrapper } from '@/components'

import './styles.scoped.scss'

const Home = () => {
  const products: IProduct[] = useSelector(
    (state: any) => state.productReducer.products
  )

  return (
    <Wrapper>
      <div className='home'>
        {products.map((item) => {
          return <Card key={item.id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}

export default Home
