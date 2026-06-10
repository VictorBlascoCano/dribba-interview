import { Product } from '../types/product'
import Image from 'next/image'
import AddProductButton from './AddProductButton'
import { ToastConfig } from '@/types/toast'

type Props = {
  product: Product
  onAdd: () => Promise<void>
  toastConfig?: ToastConfig
  currency?: string
  locale?: string
  className?: string
}

const ProductCard = ({
  product,
  onAdd,
  toastConfig,
  currency = 'EUR',
  locale = 'es-ES',
  className = '',
}: Props) => {
  const price = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
  }).format(product.price)

  return (
    <article
      className={`border p-4 flex flex-col gap-2 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-lg ${className}`}
      aria-labelledby={`product-${product.id}`}
    >
      <Image
        src={`/images/${product.image}`}
        alt={product.title}
        width={200}
        height={200}
        className='mb-2 mx-auto'
      />
      <h3 id={`product-${product.id}`} className='text-lg font-extrabold'>
        {product.title}
      </h3>
      <p>{product.description}</p>
      <footer className='mt-auto flex items-center justify-between'>
        <p className='text-xl font-bold'>{price}</p>
        <AddProductButton onAdd={onAdd} toastConfig={toastConfig} />
      </footer>
    </article>
  )
}

export default ProductCard
