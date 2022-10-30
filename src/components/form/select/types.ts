import { ReactNode, HTMLAttributes } from 'react'

export interface ISelect extends HTMLAttributes<HTMLSelectElement> {
  value?: string
  children: ReactNode
  placeholder?: string
}
