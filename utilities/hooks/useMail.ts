import { useState } from 'react'
import type { MailForm } from '../mail/mail'

const initialState = (): MailForm => ({
  name: '',
  email: '',
  message: '',
})

export const useMail = () => {
  const [state, setState] = useState(initialState())
  const [sent, setSent] = useState(false)

  const send = async () => {
    await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    })
    setState(initialState())
    setSent(true)
  }

  const updateState = (key: keyof MailForm, value: string) => {
    setState((state) => ({
      ...state,
      [key]: value,
    }))
    setSent(false)
  }

  return {
    ...state,
    updateForm: updateState,
    send,
    sent,
  }
}
