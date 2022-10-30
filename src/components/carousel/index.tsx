import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { NextIcon, BackIcon } from '@/assets'

import { ICarousel } from './types'
import { aCarousel } from './animations'

import './styles.scoped.scss'

const Carousel = ({ images }: ICarousel) => {
  const [pointer, setPointer] = useState<number>(0)

  const handleNext = () => {
    if (pointer === images.length - 1) {
      setPointer(0)
    } else {
      setPointer(pointer + 1)
    }
  }

  const handleBack = () => {
    if (pointer === 0) {
      setPointer(images.length - 1)
    } else {
      setPointer(pointer - 1)
    }
  }

  return (
    <div className='carousel-wrapper'>
      <div className='carousel'>
        <button
          onClick={handleBack}
          className='carousel-button carousel-button--left'
        >
          <BackIcon color='#ffffff' />
        </button>
        <button
          onClick={handleNext}
          className='carousel-button carousel-button--right'
        >
          <NextIcon color='#ffffff' />
        </button>
        <AnimatePresence mode='wait'>
          <motion.img
            key={pointer}
            src={images[pointer]}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={aCarousel}
            alt=''
            loading='lazy'
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </AnimatePresence>
      </div>
      <div className='carousel-dot__wrapper'>
        {images.map((_, index) => {
          return (
            <div
              key={index}
              className={`carousel__dot ${pointer === index &&
                'carousel-dot__active'}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
