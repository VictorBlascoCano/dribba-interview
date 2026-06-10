'use server'

export async function addToCart(productId: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  console.log(`Producto ${productId} añadido`)
}
