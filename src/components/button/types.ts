import { ReactNode, HTMLAttributes } from 'react'

export type TButtonType = 'button' | 'submit' | 'reset'

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  type: TButtonType
  children: ReactNode
}
