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
      className={`border p-4 flex flex-col gap-2 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-2 hover:shadow-lg motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-sm ${className}`}
      aria-labelledby={`product-${product.id}`}
    >
      <div className='relative w-full h-48 mb-2'>
        <Image
          src={`/images/${product.image}`}
          alt={product.title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-contain mx-auto'
        />
      </div>
      <h3 id={`product-${product.id}`} className='text-lg font-extrabold'>
        {product.title}
      </h3>
      <p>{product.description}</p>
      <footer className='mt-auto flex items-center justify-between'>
        <p className='text-xl font-bold' aria-label={`Precio: ${price}`}>
          <span aria-hidden='true'>{price}</span>
        </p>
        <AddProductButton
          onAdd={onAdd}
          toastConfig={toastConfig}
          productName={product.title}
        />
      </footer>
    </article>
  )
}

export default ProductCard
