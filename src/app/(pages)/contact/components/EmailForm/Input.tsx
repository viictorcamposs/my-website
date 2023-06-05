'use client'

import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'

import type { UseFormRegister } from 'react-hook-form'

import type { SendEmailData } from '.'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, IInput & ReturnType<UseFormRegister<SendEmailData>>>(
  ({ name, ...props }, ref) => {
    const tailwindClass = `
    w-full px-4 py-3 
    font-body font-normal text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf] 
    bg-transparent rounded-lg 
    border border-[#464444] dark:border-[#cdcedf] 
    focus:outline-0 focus:border-[#01B0EA] focus:dark:border-[#01B0EA]
  `

    return <input {...props} name={name} ref={ref} className={tailwindClass} />
  }
)

Input.displayName = 'Input'

export default Input
