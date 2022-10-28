import { HTMLAttributes } from 'react'

export interface IInput extends HTMLAttributes<HTMLInputElement> {
  name?: string
  value?: string
  placholder?: string
}
