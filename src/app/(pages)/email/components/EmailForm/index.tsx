'use client'

import Label from './Label'
import Input from './Input'
import Button from './Button'

export default function EmailForm() {
  return (
    <form className="flex flex-col gap-4 w-full max-w-[360px]">
      <fieldset>
        <Label htmlFor="name">Name</Label>

        <Input name="name" type="text" />
      </fieldset>

      <fieldset>
        <Label htmlFor="email">Email</Label>

        <Input name="email" type="email" />
      </fieldset>

      <fieldset>
        <Label htmlFor="message">Message</Label>

        <Input textarea name="message" />
      </fieldset>

      <Button type="button" />
    </form>
  )
}
