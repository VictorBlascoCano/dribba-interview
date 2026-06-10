import { products } from '@/mockData'
import ProductCard from './ProductCard'
import { addToCart } from '@/actions/cart'

const ProductList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={addToCart.bind(null, product.title)}
          toastConfig={{
            success: `${product.title} añadido al carrito 🛒`,
            error: `No se pudo añadir ${product.title}`,
          }}
        />
      ))}
    </div>
  )
}

export default ProductList
