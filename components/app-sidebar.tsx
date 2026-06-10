import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className='flex items-center justify-between px-3 py-2'>
        <div className='flex items-center gap-3'>
          <Image
            src='/images/logo.jpg'
            alt='Burger King Logo'
            width={60}
            height={60}
            className='rounded-full'
          />
          <div>
            <div className='text-lg font-heading font-bold text-red-600'>
              Burger King
            </div>
            <div className='text-xs text-muted-foreground'>Sabor que manda</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span className='text-xl'>🍔</span>
                <span>Whoppers</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <span className='text-xl'>🍟</span>
                <span>Combos & Patatas</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <span className='text-xl'>🥤</span>
                <span>Bebidas</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <span className='text-xl'>🍗</span>
                <span>Entradas & Sides</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <span className='text-xl'>🎁</span>
                <span>Promociones</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Cuenta</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span className='text-xl'>🧾</span>
                <span>Mis Pedidos</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <span className='text-xl'>⭐</span>
                <span>Favoritos</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className='px-3 py-3'>
        <div className='flex w-full flex-col gap-2'>
          <Button className='bg-yellow-300 text-red-600 font-bold'>
            Ordenar ahora
          </Button>
          <Button variant='ghost'>Ver carrito</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
