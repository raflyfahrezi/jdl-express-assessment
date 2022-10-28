import { ReactNode, HTMLAttributes } from 'react'

export interface IPageWrapper extends HTMLAttributes<HTMLDivElement> {
  title?: string
  children: ReactNode
}
