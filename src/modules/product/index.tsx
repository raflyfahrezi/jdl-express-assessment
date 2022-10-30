/* eslint-disable react-hooks/exhaustive-deps */

import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { IProduct } from '@/models'
import { axiosGet } from '@/utils'
import { Wrapper, Loading } from '@/components'

import ProductInfo from './info'

import './styles.scoped.scss'

const Product = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<IProduct | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchData = async () => {
    const { data } = await axiosGet<IProduct>(`products/${id}`, {})

    setProduct(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {product && (
        <Helmet>
          <title>{product.title}</title>
        </Helmet>
      )}
      <Wrapper>
        <div className='product'>
          {isLoading ? (
            <div className='product__loading'>
              <Loading size='large' />
            </div>
          ) : (
            <div>{product && <ProductInfo product={product} />}</div>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default Product
