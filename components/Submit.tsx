'use client'

import { Button, ButtonProps } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

interface SubmitProps extends ButtonProps {
  label: string;
}

const Submit = ({ label, ...btnProps }: SubmitProps) => {
  const { pending } = useFormStatus()
  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {label}
    </Button>
  )
}

export default Submit
