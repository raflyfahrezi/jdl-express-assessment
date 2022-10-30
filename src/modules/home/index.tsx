/* eslint-disable react-hooks/exhaustive-deps */

import React, { ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IProduct } from '@/models'
import { productAction } from '@/services'
import { Card, Select, Wrapper, Loading } from '@/components'

import './styles.scoped.scss'

const Home = () => {
  const dispatch = useDispatch()

  const products: IProduct[] = useSelector(
    (state: any) => state.productReducer.products
  )

  const category: string = useSelector(
    (state: any) => state.productReducer.category
  )

  const categories: string[] = useSelector(
    (state: any) => state.productReducer.categories
  )

  const isLoadingProducts: boolean = useSelector(
    (state: any) => state.productReducer.isLoadingProducts
  )

  const selectHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target

    dispatch<any>(productAction.SET_PRODUCT_CATEGORY(value))
    dispatch<any>(productAction.GET_PRODUCT_BY_CATEGORY(value))
  }

  return (
    <Wrapper>
      <div className='home-categories'>
        <Select
          value={category}
          onChange={selectHandle}
          placeholder='Filter by categories'
        >
          <option value='all'>All</option>
          {categories.map((item: string, index: number) => {
            return (
              <option key={index} value={item}>
                {item.replace(/-/g, ' ')}
              </option>
            )
          })}
        </Select>
      </div>
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
