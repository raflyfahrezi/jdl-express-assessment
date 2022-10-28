/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import { IProduct } from '@/models'
import { axiosGet } from '@/utils'
import { Wrapper, Loading } from '@/components'

import './styles.scoped.scss'

const Product = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<IProduct>()
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
    <Wrapper>
      <div className='product'>
        {isLoading ? (
          <div className='product__loading'>
            <Loading size='large' />
          </div>
        ) : (
          <div>
            <p>{product?.title}</p>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Product
