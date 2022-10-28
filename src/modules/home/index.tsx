import React from 'react'
import { useSelector } from 'react-redux'

import { IProduct } from '@/models'
import { Card, Wrapper, Loading } from '@/components'

import './styles.scoped.scss'

const Home = () => {
  const products: IProduct[] = useSelector(
    (state: any) => state.productReducer.products
  )

  const isLoadingProducts: boolean = useSelector(
    (state: any) => state.productReducer.isLoadingProducts
  )

  return (
    <Wrapper>
      <div className='home'>
        {isLoadingProducts ? (
          <div className='home-loading'>
            <Loading size='large' />
          </div>
        ) : (
          <div className='home-content'>
            {products.map((item) => {
              return <Card key={item.id} {...item} />
            })}
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Home
