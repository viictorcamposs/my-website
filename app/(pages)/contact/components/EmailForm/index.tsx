'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Message from './Message'
import Label from './Label'
import Input from './Input'
import Button from './Button'

const sendEmailFormSchema = z.object({
  name: z
    .string()
    .nonempty('Nome precisa ser preenchido.')
    .transform(name =>
      name
        .trim()
        .split(' ')
        .map(word => word[0].toUpperCase().concat(word.substring(1)))
        .join(' ')
    ),
  email: z
    .string()
    .nonempty('Email precisa ser preenchido.')
    .email('Formato de email inválido')
    .toLowerCase(),
  message: z.string().nonempty('Mensagem precisa ser preenchida.')
})

export type SendEmailData = z.infer<typeof sendEmailFormSchema>

export default function EmailForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SendEmailData>({
    resolver: zodResolver(sendEmailFormSchema)
  })

  function sendEmail(data: SendEmailData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-4 w-full max-w-[360px]">
      <div>
        <Label htmlFor="name">Name</Label>

        <Input type="text" {...register('name')} />
        {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>

        <Input type="email" {...register('email')} />
        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>

        <Message {...register('message')} />
        {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
      </div>

      <Button type="submit" />
    </form>
  )
}
