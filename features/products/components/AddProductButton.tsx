'use client'

import { ToastConfig } from '@/types/toast'
import { useTransition } from 'react'
import { toast } from 'sonner'

type Props = {
  onAdd: () => Promise<void>
  label?: string
  toastConfig?: ToastConfig
  productName?: string
}

const AddProductButton = ({
  onAdd,
  label = 'Añadir',
  toastConfig,
  productName,
}: Props) => {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      try {
        await onAdd()
        if (toastConfig?.success) toast.success(toastConfig.success)
      } catch {
        if (toastConfig?.error) toast.error(toastConfig.error)
      }
    })
  }

  const ariaLabel = productName
    ? `${isPending ? 'Añadiendo' : label} ${productName} al carrito`
    : undefined

  return (
    <button
      type='button'
      disabled={isPending}
      aria-busy={isPending}
      aria-label={ariaLabel}
      className='bg-red-400 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-500 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed'
      onClick={handleClick}
    >
      {isPending ? 'Añadiendo...' : label}
    </button>
  )
}

export default AddProductButton
