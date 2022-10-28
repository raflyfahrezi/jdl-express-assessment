import React from 'react'

import { StarIcon, VerifiedIcon } from '@/assets'
import { formatPrice, formatRating, getPriceBeforeDiscount } from '@/utils'

import { IInfo } from './types'

import './styles.scoped.scss'

const ProductInfo = ({ product }: IInfo) => {
  const {
    title,
    price,
    stock,
    brand,
    rating,
    category,
    thumbnail,
    description,
    discountPercentage,
  } = product

  return (
    <div className='info'>
      <div className='info-header'>
        <div className='info-header__thumbnail'>
          <img src={thumbnail} alt='' />
        </div>
        <div className='info-header__details'>
          <h1>{title}</h1>
          <div className='info-header__details--ratingAndStock'>
            <div className='info-header__details--rating'>
              <div className='info-header__details--ratingIcon'>
                <StarIcon />
              </div>
              <p>{formatRating(rating)}</p>
            </div>
            <p>&middot;</p>
            <p>{stock} left in stock</p>
          </div>
          <div className='info-header-price'>
            <p className='info-header-price__original'>{formatPrice(price)}</p>
            <p className='info-header-price__discount'>
              {Math.round(discountPercentage)}%
            </p>
            <p className='info-header-price__beforeDiscount'>
              {formatPrice(getPriceBeforeDiscount(price, discountPercentage))}
            </p>
          </div>
          <div className='info-header-verified'>
            <div className='info-header-verified__icon'>
              <VerifiedIcon />
            </div>
            <p> {brand}</p>
          </div>
        </div>
      </div>
      <div>
        <p>About this product</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductInfo
