import React from 'react'
import { Helmet } from 'react-helmet-async'

import { IHead } from './types'

const Head = ({ title }: IHead) => {
  const titleTemplate: string = '%s | Farhan - JDL Express'

  return (
    <Helmet titleTemplate={titleTemplate}>
      <title>{title}</title>
    </Helmet>
  )
}

export default Head
