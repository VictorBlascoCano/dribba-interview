import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className='bg-red-600 text-white'>
      <div className='mx-auto max-w-7xl px-6 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='h-12 w-12 shrink-0 rounded-full bg-yellow-300 flex items-center justify-center'>
                <span className='text-lg font-bold text-red-600'>BK</span>
              </div>
              <div>
                <div className='font-heading text-lg font-bold'>
                  Burger King
                </div>
                <div className='text-sm text-yellow-200'>Sabor que manda</div>
              </div>
            </div>
            <p className='text-sm text-yellow-100'>
              Encuentra nuestras mejores ofertas y disfruta de tu Whopper
              favorito.
            </p>
            <div className='flex gap-2'>
              <Button className='rounded-md bg-yellow-300 px-3 py-2 text-red-600 font-semibold'>
                Ubica tu BK
              </Button>
              <Button className='rounded-md bg-yellow-300 px-3 py-2 text-red-600 font-semibold'>
                Trabaja con nosotros
              </Button>
            </div>
          </div>

          <div className='flex justify-between md:justify-center gap-6'>
            <div>
              <h4 className='mb-3 font-medium'>Menú</h4>
              <ul className='flex flex-col gap-2 text-sm text-yellow-100'>
                <li>Whoppers</li>
                <li>Combos</li>
                <li>Patatas</li>
                <li>Bebidas</li>
              </ul>
            </div>
            <div>
              <h4 className='mb-3 font-medium'>Ayuda</h4>
              <ul className='flex flex-col gap-2 text-sm text-yellow-100'>
                <li>Contacto</li>
                <li>Preguntas Frecuentes</li>
                <li>Política de privacidad</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className='mb-3 font-medium'>Suscríbete</h4>
            <p className='text-sm text-yellow-100 mb-3'>
              Recibe ofertas exclusivas en tu correo.
            </p>
            <div className='flex gap-2 items-center'>
              <label htmlFor='subscribe-email' className='sr-only'>
                Correo electrónico
              </label>
              <Input
                id='subscribe-email'
                type='email'
                aria-label='Correo electrónico'
                placeholder='tu@correo.com'
                className='bg-white text-gray-900 placeholder:text-gray-500'
              />
              <Button
                type='button'
                aria-label='Enviar suscripción'
                className='bg-yellow-300 text-red-600'
              >
                Enviar
              </Button>
            </div>
            <div
              id='subscription-status'
              aria-live='polite'
              className='sr-only'
            />
            <div className='mt-6 flex items-center gap-3 text-yellow-200'>
              <span>📸</span>
              <span>🐦</span>
              <span>📘</span>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-red-500 pt-6 text-center text-sm text-yellow-100'>
          © {new Date().getFullYear()} Burger King. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
