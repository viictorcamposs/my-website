'use client'

import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'

import type { UseFormRegister } from 'react-hook-form'

import type { SendEmailData } from '.'

interface IMessageProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Message = forwardRef<
  HTMLTextAreaElement,
  IMessageProps & ReturnType<UseFormRegister<SendEmailData>>
>((props, ref) => {
  const tailwindClass = `
    w-full px-4 py-3 
    font-body font-normal text-xs xl:text-sm text-[#c7c8e0] 
    bg-transparent rounded-lg 
    border border-[#c7c8e0] 
    focus:outline-0 focus:border-[#01B0EA]
  `

  return <textarea {...props} ref={ref} rows={5} className={tailwindClass} />
})

Message.displayName = 'Message'

export default Message
