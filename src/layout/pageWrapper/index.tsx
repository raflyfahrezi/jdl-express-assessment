import React from 'react'

import { Head, Footer, Navigation } from '@/layout'

import { IPageWrapper } from './types'

import './styles.scoped.scss'

const PageWrapper = ({ title, children }: IPageWrapper) => {
  return (
    <>
      <Head title={title} />
      <div className='pageWrapper'>
        <div>
          <Navigation />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default PageWrapper
