import { SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { User } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex justify-between items-center bg-red-500 h-20 px-6 gap-4'>
      <SidebarTrigger
        variant='ghost'
        className='text-white'
        aria-label='Abrir barra lateral'
        aria-controls='app-sidebar'
        aria-expanded='false'
      />
      <Field className='max-w-2xl w-full'>
        <ButtonGroup>
          <Input
            id='input-button-group'
            placeholder='Escribe para buscar...'
            className='bg-white text-gray-900 placeholder:text-gray-500'
          />
          <Button variant='outline'>Buscar</Button>
        </ButtonGroup>
      </Field>
      <Button
        variant='ghost'
        size='icon-lg'
        className='text-white'
        aria-label='Perfil'
      >
        <User className='size-7' />
        <span className='sr-only'>Abrir menú de usuario</span>
      </Button>
    </header>
  )
}

export default Header
