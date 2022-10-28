import React from 'react'

import { Head } from '@/layout'

import { IPageWrapper } from './types'

const PageWrapper = ({ title, children }: IPageWrapper) => {
  return (
    <>
      <Head title={title} />
      <main>{children}</main>
    </>
  )
}

export default PageWrapper
