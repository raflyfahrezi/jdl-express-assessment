import React from 'react'
import { Link } from 'react-router-dom'

import { StarIcon } from '@/assets'
import { Button } from '@/components'

import { ICard } from './types'
import { formatPrice, formatRating, getPriceBeforeDiscount } from './helpers'

import './styles.scoped.scss'

const Card = ({
  id,
  title,
  price,
  stock,
  rating,
  thumbnail,
  description,
  discountPercentage,
}: ICard) => {
  return (
    <div className='card'>
      <div className='card-thumbnail'>
        <img src={thumbnail} alt='thumbnail' loading='lazy' />
      </div>
      <div className='card-content'>
        <p className='card-content__title'>{title}</p>
        <div className='card-content-ratingAndStock'>
          <div className='card-content-rating__rating'>
            <div className='card-content-rating__ratingIcon'>
              <StarIcon />
            </div>
            <p>{formatRating(rating)}</p>
          </div>
          <p>&middot;</p>
          <div>
            <p>{stock} left in stocks</p>
          </div>
        </div>
        <p className='card-content__description'>{description}</p>
        <div className='card-content-price'>
          <p className='card-content-price__original'>{formatPrice(price)}</p>
          <p className='card-content-price__discount'>
            {Math.round(discountPercentage)}%
          </p>
          <p className='card-content-price__beforeDiscount'>
            {formatPrice(getPriceBeforeDiscount(price, discountPercentage))}
          </p>
        </div>
        <Link to={`/product/${id}`}>
          <Button type='button'>Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default Card
