'use client'

import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'

import type { UseFormRegister } from 'react-hook-form'

import type { SendEmailData } from '.'

HTMLTextAreaElement

interface IMessageProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Message = forwardRef<
  HTMLTextAreaElement,
  IMessageProps & ReturnType<UseFormRegister<SendEmailData>>
>((props, ref) => {
  const tailwindClass = `
    w-full px-4 py-3 
    font-body font-normal text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf] 
    bg-transparent rounded-lg 
    border border-[#464444] dark:border-[#cdcedf] 
    focus:outline-0 focus:border-[#01B0EA] focus:dark:border-[#01B0EA]
  `

  return <textarea {...props} ref={ref} rows={5} className={tailwindClass} />
})

Message.displayName = 'Message'

export default Message
