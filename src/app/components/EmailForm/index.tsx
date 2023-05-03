'use client'

import Label from './Label'
import Input from './Input'
import Button from './Button'

const EmailForm: React.FC = () => (
  <form className="flex flex-col gap-4 w-full">
    <fieldset>
      <Label htmlFor="name">Name</Label>

      <Input name="name" type="text" />
    </fieldset>

    <fieldset>
      <Label htmlFor="email">Email</Label>

      <Input textarea={false} name="email" type="email" />
    </fieldset>

    <fieldset>
      <Label htmlFor="message">Message</Label>

      <Input textarea={true} name="message" />
    </fieldset>

    <Button />
  </form>
)

export default EmailForm
